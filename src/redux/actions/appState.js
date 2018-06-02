/**
* Created by nghinv on Sat Jun 02 2018
* Copyright (c) 2018 nghinv
*/
import * as types from '../types';

export const appStateChange = (type) => {
  return {
    type: types.APP_STATE_CHANGE,
    payload: type
  }
}
