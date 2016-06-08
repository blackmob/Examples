jest.unmock("deep-freeze-node");
jest.unmock('../emotionReducer');
jest.unmock('../../constants/ActionTypes');
jest.unmock('lodash');
jest.unmock("redux-actions");
jest.unmock("../../services/__mocks__/dataService");

import {face} from "../../services/__mocks__/dataService";
import cloudCast from "../emotionReducer";

import {
    LOAD_EMOTION_REQUEST,
    RECEIVE_EMOTION_REQUEST
} from '../../constants/ActionTypes';

var deepFreeze = require('deep-freeze-node');

const initialState: EmotionState = {
    faces: [], url : null
};

describe('emotion reducer', () => {
    
    it('handles LOAD_EMOTION_REQUEST state', () => {

        var state = deepFreeze(initialState);
       
        var newState = cloudCast(state, { type: LOAD_EMOTION_REQUEST, payload: initialState });

        expect(newState).toEqual(initialState);
    });

    it('handles RECEIVE_EMOTION_REQUEST state', () => {

        var state = deepFreeze(initialState);

        var expectedState = {
            faces : face, url : "test"
        };

        var newState = cloudCast(state, {
            type: RECEIVE_EMOTION_REQUEST,
            payload: {faces: face, url : "test"}
        });

        expect(newState).toEqual(expectedState);

    });
})