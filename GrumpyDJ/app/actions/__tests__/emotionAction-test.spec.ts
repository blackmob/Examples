
"use strict";
jest.unmock("../emotionActions");
jest.unmock("redux-actions");
jest.unmock("lodash");
jest.unmock("deep-freeze-node");
jest.unmock("redux-thunk");
jest.unmock("redux-mock-store");
jest.unmock("../../constants/ActionTypes");
jest.unmock("Q");
jest.unmock("../../services/__mocks__/dataService");


jest.mock("../../services/dataService");

import {DataService} from "../../services/dataService";

import {fetchEmotions,loadEmotionsRequest,receiveEmotionsRequest} from "../emotionActions";
var deepFreeze = require("deep-freeze-node");
var thunk = require("redux-thunk");
var mock = require("redux-mock-store");
const middlewares: Redux.Middleware[] = [thunk];
const mockStore = mock(middlewares);
import {LOAD_EMOTION_REQUEST,RECEIVE_EMOTION_REQUEST} from "../../constants/ActionTypes";
import {shows,face} from "../../services/__mocks__/dataService";

const initialState: EmotionState = {
    faces: [], url : null
};

const loadedState = {
    faces : face
}; 

const done = (): boolean => {
    return true;
};

describe("emotion actions", () => {
    it("dispatches LOAD_EMOTIONS_REQUEST", () => {
            let state = deepFreeze(initialState);
            var store = mockStore(state, [{ type: LOAD_EMOTION_REQUEST, payload: initialState}], done);
            store.dispatch(loadEmotionsRequest());
    });

    it('dispatches RECEIVE_EMOTION_REQUEST', () => {
            let state = deepFreeze(initialState);
            var store = mockStore(state, [{ type: RECEIVE_EMOTION_REQUEST, payload: {faces : face, url : "test"}}], done);
            store.dispatch(receiveEmotionsRequest(face, "test"));
    });
    
    pit('dispatches fetchEmotions', () => {
            let state = deepFreeze(initialState);
            var store = mockStore(state, [
                { payload: { args: [ '/slug' ], method: 'push' }, type: '@@router/CALL_HISTORY_METHOD' },
                { type: RECEIVE_EMOTION_REQUEST, payload: {faces: face, url : "test_url"}}], done);
            return store.dispatch(fetchEmotions("test_url", "slug")).then((response) => {expect(response).toEqual({ type: RECEIVE_EMOTION_REQUEST, payload: {faces: face, url : "test_url"}})});
    });
});