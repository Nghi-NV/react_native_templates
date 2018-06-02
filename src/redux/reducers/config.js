/**
* Created by nghinv on Thu May 31 2018
* Copyright (c) 2018 nghinv
*/

import { fromJS } from "immutable";
import * as types from '../types';
import { getLanguageDefault } from '../../common/utils';

const initialState = {
  language: getLanguageDefault(),
  theme: 'dark-theme',
  barStyle: 'light-content',
  notify: true,
  vibrate: false
};

export default function config(state = initialState, action) {
  switch (action.type) {
    case types.SET_LANGUAGE:
    return {
      ...state,
      language: action.payload
    }
    default:
      return state
  }
}
