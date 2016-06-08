
"use strict";
jest.unmock("../cloudCastActions");
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

import {fetchShows,loadShowsRequest,receiveShowsRequest} from "../cloudCastActions";
var deepFreeze = require("deep-freeze-node");
var thunk = require("redux-thunk");
var mock = require("redux-mock-store");
const middlewares: Redux.Middleware[] = [thunk];
const mockStore = mock(middlewares);
import {LOAD_SHOWS_REQUEST,RECEIVE_SHOWS_REQUEST } from "../../constants/ActionTypes";
import {shows,face} from "../../services/__mocks__/dataService";

const initialState: CloudCastState = {
    cloudCastResults: {data : [], paging : {next : null, previous : null}}
};

const loadedState = {
    cloudCastResults : shows
}; 

const done = (): boolean => {
    return true;
};

describe("cloud cast actions", () => {
    it("dispatches LOAD_SHOWS_REQUEST", () => {
            let state = deepFreeze(initialState);
            var store = mockStore(state, [{ type: LOAD_SHOWS_REQUEST, payload: {data: [], paging : {next : null, previous : null}}}], done);
            store.dispatch(loadShowsRequest());
    });

    it('dispatches RECEIVE_SHOWS_REQUEST', () => {
            let state = deepFreeze(initialState);
            var store = mockStore(state, [{ type: RECEIVE_SHOWS_REQUEST, payload: shows}], done);
            store.dispatch(receiveShowsRequest(shows));
    });
    
    pit('dispatches fetchShows', () => {
            let state = deepFreeze(initialState);
            var store = mockStore(state, [{ type: RECEIVE_SHOWS_REQUEST, payload: shows}], done);
            return store.dispatch(fetchShows(null)).then((response) => {expect(response).toEqual({ type: RECEIVE_SHOWS_REQUEST, payload: shows})});
    });
});