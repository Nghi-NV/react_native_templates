'use strick';

import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import Config from './config';

const setupConfig = {
  key: 'configReducer',
  storage: storage,
  blacklist: ['']
}

export default combineReducers({
  config: persistReducer(setupConfig, Config),
});
