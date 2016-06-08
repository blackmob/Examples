"use strict";

import {Dispatch} from "redux";
import { createAction, Action} from "redux-actions";
import { assign } from "lodash";
import * as types from "../constants/ActionTypes";
import {DataService} from "../services/dataService";
import {push} from "react-router-redux";

export const loadEmotionsRequest = createAction<EmotionsPayload>(
    types.LOAD_EMOTION_REQUEST, () => ({
        faces: [], url : null
    } as EmotionsPayload));

export const receiveEmotionsRequest = createAction<EmotionsPayload, EmotionsPayload>(
    types.RECEIVE_EMOTION_REQUEST, (input) => {
        return {faces: input.faces, url : input.url} as EmotionsPayload;
        }
    );

export const fetchEmotions = (imageUrl: string, slug: string) => {
    return (dispatch, getState) => {
       dispatch(push(`/${slug}`)); 
       dispatch(loadEmotionsRequest);
       var dr = new DataService();       
        return dr.getEmotions(imageUrl).then(results => {                        
            return dispatch(receiveEmotionsRequest({faces: results, url: imageUrl}));
        }).catch((e) => {
            return dispatch(receiveEmotionsRequest({faces: [], url: null}));
        });
    };
};