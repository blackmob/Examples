/// <reference path="../../Scripts/typings/knockout/knockout.d.ts" />
/// <reference path="../../Scripts/typings/requirejs/require.d.ts" />
/// <reference path="../../Scripts/typings/bootstrap/bootstrap.d.ts" />
/// <reference path="../../scripts/constants/constants.ts" />
/// <reference path="../../scripts/typings/kendo/kendo.all.d.ts" />
/// <reference path="../../scripts/typings/jquery/jquery.d.ts" />
/**
 * The view model for the kendo grid popup example. This is where the magic happens
 */

import _logger = require('services/logger');
import _system = require('durandal/system');
import _router = require('plugins/router');
import _app = require('durandal/app');

/** Get a reference to the constants defined for this view */
var userView = constants.views.Users;

/* Set the title of the view */
var title = userView.title;

/**
 * @param {any} routeData - Any data passed along the route to initialise the viewmodel
 */
function activate(routeData: any) {

}

/**
 * When the view is attached initialise the kendo grid.
 */
function attached() {
    initGrid();
}

/**
 * Initialises the kendo grid. 
 * Here we attach the dataSource and set up the calls that will create the custom popup.
 */
function initGrid() {
    /* get a reference to the div that will becom our kendo grid. Notice the use of our constants class 
     * this reduces the ammount of magic strings in the code. 
     */
    var grid: any = $(constants.views.Users.grid);

    grid.kendoGrid({
        /*The toolbar has a custom template with a custom class k-grid-addUser we use this as our selector to 
         * hook up our custom code.
         */
        toolbar: [{ name: 'AddUser', template: '<a class="k-button k-grid-addUser">Create User</a>' }],
        dataSource: createDataSource(),
        columns: [
            { field: 'FirstName', title: 'First Name', editable: true },
            { field: 'Surname', title: 'Surname', editable: true },
            { command: [{ text: 'Edit', click: editUser }, { name: 'destroy', text: 'Delete' }], title: "&nbsp;" }
        ],
        filterable: true,
        sortable: true,
        pageable: { pageSize: 10 },
        editable: "inline",
        scrollable: { virtual: true }
    });

    /**
     * The custom logic for the add button is attached here.
     */
    $('.k-grid-addUser').click(function(e) {
        addUser(e);
    });
};

/**
 * This function creates the kendo dataSource for the grid.
 * @returns {kendo.data.DataSource} - The dataSource.
 */
function createDataSource(): kendo.data.DataSource {
    return new kendo.data.DataSource(
    {
        type: "odata",
        serverFiltering: true,
        serverPaging: true,
        serverSorting: true,
        pageSize: 10,
        schema: {
            /*As we are using WebAPI ODATA controllers we need the following extra 
                 * sections (data, total) in our schema definition. This is not required when using 
                 * WCF Data Services but they have become increasingly difficult to use 
                 * with later versions of Entity Framework.
                 */
            data: function(data) {
                return data["value"];
            },
            total: function(data) {
                return data["odata.count"];
            },
            model: {
                id: "Id",
                fields: {
                    Id: {
                        type: "number",
                        defaultValue: 0
                    },
                    FirstName: {
                        type: "string",
                        validation: {
                            required: true,
                            maxlength: 255
                        }
                    },
                    Surname: {
                        type: "string",
                        validation: {
                            required: true,
                            maxlength: 255
                        }
                    }
                }
            }
        },
        transport: {
            read: {
                url: "/odata/Users",
                dataType: "json"
            },
            create: {
                url: function(e) {
                    return "/odata/Users";
                },
                type: "POST",
                dataType: "json"
            },
            update: {
                url: function(data) {
                    return kendo.format("/odata/Users({0})", data.Id);
                },
                type: "PUT",
                dataType: "json"
            },
            destroy: {
                url: function(data) {
                    return kendo.format("/odata/Users({0})", data.Id);
                },
                type: "DELETE"
            }
        }
    });
}

/**
 * The edit user custom function.
 * This is where we hook into the grids eventing and create the bootstrap modal dialog 
 * binding the kendo model to it.
 * @param {JQueryEventObject} - The event object
  */
function editUser(e: JQueryEventObject): void {

    e.preventDefault();
    /*Get a reference to the grid*/
    var grid: kendo.ui.Grid = $(userView.grid).data(constants.controlNames.kendoGrid);
    /*Get a reference to the datasource*/
    var dataSource = grid.dataSource;
    /*Find the nearest row to the clicked edit button*/
    var row = $(e.currentTarget).closest("tr");
    /*Get the dataitem from the row*/
    var dataItem = grid.dataItem(row);
    /*From the dataitem we can get the model from the dataSource*/
    var model = dataSource.get(dataItem.get("Id"));
    /*Get our kendo template and assign it to the content of the modal editor*/
    $(userView.popUpEditor).html(kendo.template($(userView.userEditor).html()));
    /*Bind the model to this view*/
    kendo.bind($(userView.userDetails), model);
    /*Create the popup*/
    $(userView.popUpEditor).modal({
        keyboard: false
    });
    /*Set the row in the grid to edit mode*/
    grid.editRow(row);

    /*Hook up the events for the buttons in our custom popup*/
    $(userView.save).on("click", function (e) {
        /*Syc the datasource, this sends any pending changes to the server*/
        dataSource.sync();
        /*Tell the grid to save the row, this sets the rows view back to normal*/
        grid.saveRow();
        /*Hide the popup*/
        $(userView.popUpEditor).modal('hide');
        //Empty the popup editor of content to stop duplicate templates being added next time.
        $(userView.popUpEditor).empty();
        /*clean up*/
        dataItem = null;
    });

    $(userView.cancel).on("click", function(e) {
        e.preventDefault();
        /*Tell the grid that the changes have been cancelled*/
        grid.cancelChanges();
        $(userView.popUpEditor).modal('hide');
        //Empty the popup editor of content to stop duplicate templates being added next time.
        $(userView.popUpEditor).empty();
        dataItem = null;
    });

    $(userView.apply).on("click", function(e) {
        e.preventDefault();
        //Sync the dataSource, this sends any pending changes to the server.
        dataSource.sync();
    });
    /*Show the popup*/
    $(userView.popUpEditor).modal('show');
}

function addUser(e: JQueryEventObject): void {
    
    /*Get a reference to the grid*/
    var grid: kendo.ui.Grid = $(userView.grid).data(constants.controlNames.kendoGrid);
    /*Get a reference to the datasource*/
    var dataSource = grid.dataSource;
    //determines at what position to insert the record (needed for pageable grids)
    var index = dataSource.indexOf((dataSource.view() || [])[0]);

    if (index < 0) {
        index = 0;
    }

    //inserts a new model in the dataSource
    var model = dataSource.insert(index, {});
    /*Get our kendo template and assign it to the content of the modal editor*/
    $(userView.popUpEditor).html(kendo.template($(userView.userEditor).html()));
    /*Bind the model to this view*/
    kendo.bind($(userView.userDetails), model);
    /*Create the popup*/
    $(userView.popUpEditor).modal({ keyboard: false });

    /*This is all the same as the edit event and should probably be refactored out*/
    $(userView.apply).on("click", function(e) {
        e.preventDefault();
        grid.saveChanges();
    });

    $(userView.save).on("click", function(e) {
        e.preventDefault();
        grid.saveChanges();
        $(userView.popUpEditor).modal('hide');
        $(userView.popUpEditor).empty();
        model = null;
    });

    $(userView.cancel).on("click", function(e) {
        e.preventDefault();
        grid.cancelChanges();
        dataSource.cancelChanges(model);
        $(userView.popUpEditor).modal('hide');
        $(userView.popUpEditor).empty();
        model = null;
    });
    /*Show the popup*/
    $(userView.popUpEditor).modal('show');
}

return function() {
    this.title = title;
    this.activate = activate;
    this.attached = attached;
};