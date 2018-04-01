'use strick';

import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware, { runSaga } from 'redux-saga';
import { persistStore } from 'redux-persist';
import { createLogger } from 'redux-logger';
import reducer from '../reducers';
import sagas from '../sagas';

const isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;

var logger = createLogger({
  predicate: (getState, action) => isDebuggingInChrome,
  collapsed: true,
  duration: true
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
    null,
    onCompletion
  );

  sagaMiddleware.run(sagas);

  return store;
}
