'use strict';

import * as types from '../constants/actionTypes';
import { Action, createAction } from 'redux-actions';
import {Dispatch} from 'redux';

export const getCityDataError = createAction(
    types.GET_CITY_DATA_ERROR, () => ({feeds : null, selectedFeedUrl : null}));

export const getCityDataReceived = createAction(
    types.GET_CITY_DATA_RECEIVED, (feeds) => ({        
        feeds: feeds.map(i => i)
    }));

export const fetchCityFeeds = (city) => {
    return (dispatch, getState) => {
        return fetch(`https://api.mixcloud.com/search/?q=${city}&type=tag`).then((results)=>{   
            return results.json().then((r)=>{
                return dispatch(getCityDataReceived(r.data));
            });
        }).catch((e) => {
            dispatch(getCityDataError());
        });
    };
};