"use strict";

import {Dispatch} from "redux";
import { createAction, Action} from "redux-actions";
import { assign } from "lodash";
import * as types from "../constants/ActionTypes";
import {DataService} from "../services/dataService";
import {push} from "react-router-redux";


export const loadShowsRequest = createAction<CloudCastPayload>(
    types.LOAD_SHOWS_REQUEST, () => ({
        data: [],
        paging : {next : null, previous : null}
    } as CloudCastPayload));

export const receiveShowsRequest = createAction<CloudCastPayload>(
    types.RECEIVE_SHOWS_REQUEST, (cloudCastResults: CloudCastResult) => ({
        data: cloudCastResults.data,
        paging : cloudCastResults.paging
    } as CloudCastPayload));

export const fetchShows = (url) => {
    return (dispatch, getState) => {
       var dr = new DataService();
        return dr.getShows(url).then(cloudCastResult => {
            return dispatch(receiveShowsRequest(cloudCastResult));
        }).catch((e) => {
            return dispatch(receiveShowsRequest({data: [], paging : {next : null, previous : null}}));
        });
    };
};