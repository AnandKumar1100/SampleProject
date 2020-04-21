'Use Strict'

import {call,all} from 'redux-saga/effects';

export default function* rootSaga() {
    const HomeScreenWatcher = require('./Screens/HomeScreen/saga/HomeScreenSaga').default;

    return yield all([
    ])
}
