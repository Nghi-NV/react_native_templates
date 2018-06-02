/**
* Created by nghinv on Thu May 31 2018
* Copyright (c) 2018 nghinv
*/
'use strick';

import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware, { runSaga } from 'redux-saga';
import { persistStore } from 'redux-persist';
import { createLogger } from 'redux-logger';
import Immutable, { Iterable, fromJS } from 'immutable';
import reducer from './reducers';
import sagas from './sagas';

const isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;

const stateTransformer = (state) => {
  let newState = {};

    for (let i of Object.keys(state)) {
      if (Immutable.Iterable.isIterable(state[i])) {
        newState[i] = state[i].toJS();
      } else {
        newState[i] = state[i];
      }
    };

    return newState;
};

var logger = createLogger({
  predicate: (getState, action) => isDebuggingInChrome,
  collapsed: true,
  duration: true,
  stateTransformer
})

const sagaMiddleware = createSagaMiddleware();

export default configureStore = (onCompletion = () => { }) => {
  const store = createStore(
    reducer,
    undefined,
    compose(
      applyMiddleware(sagaMiddleware, logger)
    )
  );

  persistStore(
    store,
    undefined,
    onCompletion
  );

  sagaMiddleware.run(sagas);

  return store;
}
