/**
* Created by nghinv on Thu May 31 2018
* Copyright (c) 2018 nghinv
*/

import { fromJS } from "immutable";
import * as types from '../types';

const initialState = fromJS({
  authenticated: false
});

export default function authen(state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}
