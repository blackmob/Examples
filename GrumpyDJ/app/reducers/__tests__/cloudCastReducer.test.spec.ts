jest.unmock("deep-freeze-node");
jest.unmock('../cloudCastReducer');
jest.unmock('../../constants/ActionTypes');
jest.unmock('lodash');
jest.unmock("redux-actions");
jest.unmock("../../services/__mocks__/dataService");

import {shows} from "../../services/__mocks__/dataService";
import cloudCast from "../cloudCastReducer";

import {
    LOAD_SHOWS_REQUEST,
    RECEIVE_SHOWS_REQUEST
} from '../../constants/ActionTypes';

var deepFreeze = require('deep-freeze-node');

const initialState: CloudCastState = {
    cloudCastResults: {data : [] , paging : {next : null, previous : null}},
};

describe('shows reducer', () => {
    
    it('handles LOAD_SHOWS_REQUEST state', () => {

        var state = deepFreeze(initialState);
       
        var newState = cloudCast(state, { type: LOAD_SHOWS_REQUEST, payload: initialState });

        expect(newState).toEqual(initialState);
    });

    it('handles RECEIVE_SHOWS_REQUEST state', () => {

        var state = deepFreeze(initialState);

        var expectedState = {
            cloudCastResults : shows
        };

        var newState = cloudCast(state, {
            type: RECEIVE_SHOWS_REQUEST,
            payload: shows
        });

        expect(newState).toEqual(expectedState);

    });
})