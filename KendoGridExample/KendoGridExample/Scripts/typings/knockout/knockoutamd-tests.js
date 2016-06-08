define(["require", "exports", "knockout"], function(require, exports, ko) {
    var myArray = ko.observableArray([1, 2, 3]);

    var MyViewModel = (function () {
        function MyViewModel() {
            this.name = ko.observable("Jeff");
        }
        return MyViewModel;
    })();

    ko.applyBindings(new MyViewModel());
});
//# sourceMappingURL=knockoutamd-tests.js.map
