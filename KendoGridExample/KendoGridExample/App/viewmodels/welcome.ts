/// <reference path="../../Scripts/typings/knockout/knockout.d.ts" />
/// <reference path="../../Scripts/typings/requirejs/require.d.ts" />
/// <reference path="../../Scripts/typings/bootstrap/bootstrap.d.ts" />
/// <reference path="../../scripts/constants/constants.ts" />
/**
 * Not much to say about this view its pretty much the boilerplate Durandal welcome view model 
 * with some bits edited, and in typescript
 */

import _logger = require('services/logger');
import _system = require('durandal/system');
import _router = require('plugins/router');
import _app = require('durandal/app');

var displayName = constants.views.Home.title;
var features = [
    'Kendo UI grid configured to use Web API controller',
    'Replace kendo popup with Bootstrap Modal for editing',
    'Typescript view model'
];
var references = [
    { name: 'Durandal', url: 'http://durandaljs.com/' },
    { name: 'Bootstrap', url: 'http://getbootstrap.com/' },
    { name: 'Kendo', url: 'http://www.telerik.com/kendo-ui' }
];

function activate(routeData) {
}

function attached(view) {
}

return function () {
    this.displayName = displayName;
    this.activate = activate;
    this.attached = attached;
    this.features = features;
    this.references = references;
};
