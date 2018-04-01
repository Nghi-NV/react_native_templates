import { takeLatest, put } from "redux-saga/effects";
import { setLanguage } from '../actions/config';
import { getLanguageDefault } from '../common/utils';

function* getInitial(action) {
  try {
    yield put(setLanguage(action.payload.language))
  } catch (e) {
    const defaultLanguage = yield getLanguageDefault()
    yield put(setLanguage(defaultLanguage))
  }
}

export function* watchInitial() {
  yield takeLatest('persist/REHYDRATE', getInitial)
}
