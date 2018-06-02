/**
* Created by nghinv on Sat Jun 02 2018
* Copyright (c) 2018 nghinv
*/

import { takeLatest, put } from "redux-saga/effects";
import * as types from '../types';

function* sagaAppStateForeground(action) {
  try {
    // do something when app foreground
    
  } catch (e) {
    
  }
}

export function* watchAppStateBackground() {
  yield takeLatest(types.APP_STATE_FOREGROUND, sagaAppStateForeground)
}
