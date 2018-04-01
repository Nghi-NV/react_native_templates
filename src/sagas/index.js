'use strick';

import { all, fork } from 'redux-saga/effects';
import * as configs from './config';

export default function* rootSaga() {
    yield all([
        ...Object.values(configs),
    ].map(fork));
}
