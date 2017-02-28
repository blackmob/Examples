'use strict';
import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import DevTools from '../containers/DevTools';
const enableHotLoader = (store) => {
    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers').default;
            store.replaceReducer(nextRootReducer);
        });
    }
};

export default function configureStore() {
    let finalCreateStore = compose(
            applyMiddleware(thunk),
            applyMiddleware(createLogger()),
            DevTools.instrument(),
        )(createStore);

    const store = finalCreateStore(rootReducer, undefined);

    enableHotLoader(store);
    return store;
}




