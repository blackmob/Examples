/// <reference path="../../Scripts/typings/durandal/durandal.d.ts" />
/// <reference path="../../scripts/constants/constants.ts" />
/// <reference path="../../Scripts/typings/requirejs/require.d.ts" />

/**
 * Not much to say about this view its pretty much the boilerplate Durandal shell view model 
 * with some bits edited, and in typescript
 */
import router = require('plugins/router');
import logger = require('services/logger');
import system = require('durandal/system');
import _app = require('durandal/app');

var shell = {
    activate: activate,
    router: router
};
return shell;

function activate() {
    return boot();
}

function boot() {

    log(constants.views.Shell.appLoaded, null, true);

    router.on('router:route:not-found', function (fragment) {
        logError('No Route Found', fragment, true);
    });

    var routes = [
        { route: '', title: 'Welcome', moduleId: 'welcome', nav: true },
        { route: 'welcome', title: 'Welcome', moduleId: 'welcome', nav: false },
        { route: 'start', title: 'Get started', moduleId: 'start', nav: true }];

    return router.makeRelative({ moduleId: 'viewmodels' }) // router will look here for viewmodels by convention
        .map(routes)            // Map the routes
        .buildNavigationModel() // Finds all nav routes and readies them
        .activate();     

}

function log(msg, data, showToast) {
    logger.logger.log({ message: msg, data: data, source: system.getModuleId(shell), showToast: showToast });
}

function logError(msg, data, showToast) {
    logger.logger.logError({ message: msg, data: data, source: system.getModuleId(shell), showToast: showToast });
}