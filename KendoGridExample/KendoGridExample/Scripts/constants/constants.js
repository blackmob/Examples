var constants;
(function (constants) {
    var controlNames = (function () {
        function controlNames() {
        }
        controlNames.kendoGrid = "kendoGrid";
        return controlNames;
    })();
    constants.controlNames = controlNames;

    (function (views) {
        var Users = (function () {
            function Users() {
            }
            Users.title = "Kendo Bootstrap Grid Example";
            Users.moduleName = "start";
            Users.loadSucceded = "Grid Loaded.";
            Users.loadFailed = "Grid failed to load!";
            Users.grid = "#exampleGrid";
            Users.popUpEditor = "#popUpUserEditor";
            Users.userDetails = "#userDetails";
            Users.userEditor = "#userEditor";
            Users.apply = "#apply";
            Users.save = "#save";
            Users.cancel = "#cancel";
            return Users;
        })();
        views.Users = Users;

        var Shell = (function () {
            function Shell() {
            }
            Shell.appLoaded = "Example Loaded";
            return Shell;
        })();
        views.Shell = Shell;

        var Home = (function () {
            function Home() {
            }
            Home.title = 'Kendo Bootstrap Grid Example';
            Home.moduleName = "home";
            Home.viewLoaded = "Home Loaded";
            return Home;
        })();
        views.Home = Home;
    })(constants.views || (constants.views = {}));
    var views = constants.views;
})(constants || (constants = {}));
//# sourceMappingURL=constants.js.map
