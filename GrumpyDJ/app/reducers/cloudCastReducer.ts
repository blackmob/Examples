
"use strict"

import { merge, assign} from 'lodash';
import { handleActions, Action } from "redux-actions";

import {
    LOAD_SHOWS_REQUEST, 
    RECEIVE_SHOWS_REQUEST
} from '../constants/ActionTypes';

const initialState: CloudCastState = {
    cloudCastResults: {data : [] , paging : {next : null, previous : null}},
};

export default handleActions<CloudCastState>({
    [LOAD_SHOWS_REQUEST]: (state: CloudCastState, action: Action): CloudCastState => {
        return assign({}, state, { cloudCastResults : {data : [] , paging : {next : null, previous : null}} }) as CloudCastState;
    },
    [RECEIVE_SHOWS_REQUEST]: (state: CloudCastState, action: Action): CloudCastState => {
        return assign({}, state, { cloudCastResults : { data : action.payload.data, paging: action.payload.paging }}) as CloudCastState;
    }
}, initialState);