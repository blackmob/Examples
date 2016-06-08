module constants {

    export class controlNames {
        static kendoGrid: string = "kendoGrid";
    }

    export module views {

        export class Users {
            static title = "Kendo Bootstrap Grid Example";
            static moduleName = "start";
            static loadSucceded = "Grid Loaded.";
            static loadFailed = "Grid failed to load!";
            static grid = "#exampleGrid";
            static popUpEditor = "#popUpUserEditor";
            static userDetails = "#userDetails";
            static userEditor = "#userEditor";
            static apply = "#apply";
            static save = "#save";
            static cancel = "#cancel";
        }

        export class Shell {
            static appLoaded = "Example Loaded";
        }

        export class Home {
            static title = 'Kendo Bootstrap Grid Example';
            static moduleName = "home";
            static viewLoaded = "Home Loaded";
        }

    }

} 