/**
* Created by nghinv on Sat Jun 02 2018
* Copyright (c) 2018 nghinv
*/

import * as types from '../types';

const INITIAL_STATE = {
  currentState: ''
}

export default function (state = INITIAL_STATE, action) {
  switch(action.type) {
    case types.APP_STATE_CHANGE:
      return {
        ...state,
        currentState: action.payload
      }
    default:
      return state
  }
}