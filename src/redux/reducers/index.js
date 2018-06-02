/**
* Created by nghinv on Thu May 31 2018
* Copyright (c) 2018 nghinv
*/

'use strick';

import { AsyncStorage } from 'react-native';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

import Config from './config';
import AppState from './appState';
import Authen from './authen';

const setupConfig = {
  key: 'configReducer',
  storage: AsyncStorage
}

export default combineReducers({
  config: persistReducer(setupConfig, Config),
  appState: AppState,
  authen: Authen
});
