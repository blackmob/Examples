
"use strict";
require("script!../node_modules/babel-polyfill/dist/polyfill.js");
require("expose?$!expose?jQuery!jquery");
require("font-awesome/css/font-awesome.css");
require("bootstrap-webpack!../node_modules/bootstrap-webpack/bootstrap.config.js");
//require('./bootswatch.less');
import * as React from "react";
import * as ReactDom from "react-dom";

import {Root} from "./containers/Root";
import {configureStore} from "./stores/configureStore";
import {history} from "./stores/configureStore.ts";
React;


// use React as an expression to prevent React being purged from dependencies as not used directly
// We can use it exactly like “vanilla” createStore. 
const store = configureStore();
ReactDom.render(
    <Root store={store} history={history}/>,
    document.getElementById("app"));