"use strict";

import * as React from "react";
import {compose, createStore, applyMiddleware, combineReducers } from 'redux';
let thunk = require('redux-thunk');
let createLogger = require('redux-logger');
import {browserHistory} from "react-router";

var routerReducer = require('react-router-redux').routerReducer;
var routerMiddleware = require('react-router-redux').routerMiddleware;
var syncHistoryWithStore = require('react-router-redux').syncHistoryWithStore;

import cloudCast from '../reducers/cloudCastReducer';
import emotions from '../reducers/emotionReducer';
import DevTools from "../containers/DevTools";

export var history = null;

export const rootReducer = combineReducers({ cloudCast: cloudCast, emotions : emotions, routing: routerReducer});

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

export function configureStore() {

    const store = finalCreateStore(rootReducer, initialState);

    history = syncHistoryWithStore(browserHistory, store);

    //reduxRouterMiddleware.listenForReplays(store);

    let m = module as any;

    if (m.hot) {
        m.hot
            .accept('../reducers', () => {
                const nextRootReducer = require('../reducers/index');
                store.replaceReducer(nextRootReducer);
            });
    }


    return store;
}