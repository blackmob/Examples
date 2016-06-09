var routerReducer = require('react-router-redux').routerReducer;
import {combineReducers } from 'redux';
import cloudCastReducer from "./cloudCastReducer";
import emotionReducer from "./emotionReducer";

const rootReducer = combineReducers({ cloudCast: cloudCastReducer, emotions : emotionReducer, routing: routerReducer});

export default rootReducer;


