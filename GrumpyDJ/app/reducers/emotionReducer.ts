
"use strict"

import { merge, assign} from 'lodash';
import { handleActions, Action } from "redux-actions";

import {
    LOAD_EMOTION_REQUEST, 
    RECEIVE_EMOTION_REQUEST
} from '../constants/ActionTypes';

const initialState: EmotionState = {
    faces: [], url : null
};

export default handleActions<EmotionState>({
    [LOAD_EMOTION_REQUEST]: (state: EmotionState, action: Action): EmotionState => {
        return assign({}, state, { faces : [], url : null }) as EmotionState;
    },
    [RECEIVE_EMOTION_REQUEST]: (state: EmotionState, action: Action): EmotionState => {
        return assign({}, state, { faces : action.payload.faces, url : action.payload.url}) as EmotionState;
    }
}, initialState);