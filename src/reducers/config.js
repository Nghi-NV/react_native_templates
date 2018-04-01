import * as types from '../actions/types';
import { getLanguageDefault } from '../common/utils';

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
