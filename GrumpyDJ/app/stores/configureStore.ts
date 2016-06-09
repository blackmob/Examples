"use strict";

import * as React from "react";
import {compose, createStore, applyMiddleware} from 'redux';
import {browserHistory} from "react-router";
import DevTools from "../containers/DevTools";
import rootReducer from '../reducers' 
let thunk = require('redux-thunk');
let createLogger = require('redux-logger');
var routerMiddleware = require('react-router-redux').routerMiddleware;
var syncHistoryWithStore = require('react-router-redux').syncHistoryWithStore;

export var history = null;

const reduxRouterMiddleware = routerMiddleware(browserHistory);

const initialState: RootState = {
    cloudCast : {cloudCastResults: {data : [], paging : {next : null, previous : null}}}, 
    emotions : { faces: [] , url : null}    
};

const finalCreateStore = compose(
    applyMiddleware(thunk),
    applyMiddleware(createLogger()),
    applyMiddleware(reduxRouterMiddleware),
    DevTools.instrument()
)(createStore);

const enableHotLoader = (store) => {
    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers').default;
            store.replaceReducer(nextRootReducer);
        });
    }
}

export function configureStore() {

    const store = finalCreateStore(rootReducer, initialState);

    history = syncHistoryWithStore(browserHistory, store);

    enableHotLoader(store);        

    return store;
}