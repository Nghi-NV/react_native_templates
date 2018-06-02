/**
* Created by nghinv on Thu May 31 2018
* Copyright (c) 2018 nghinv
*/

'use strick';

import { all, fork } from 'redux-saga/effects';
import * as configs from './config';
import * as appState from './appState';

export default function* rootSaga() {
    yield all([
        ...Object.values(configs),
        ...Object.values(appState),
    ].map(fork));
}
