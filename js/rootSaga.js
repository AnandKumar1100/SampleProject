'Use Strict'

import {call,all} from 'redux-saga/effects';

export default function* rootSaga() {
    const FirstScreenWatcher = require('./Screens/FirstScreen/saga/FirstScreenSaga').default;

    return yield all([
        call(FirstScreenWatcher)
    ])
}
