import { call, put, select, take, takeLatest } from 'redux-saga/effects';
import { Api } from "./API";
import {
    CALL_API,
    SAVE_API_RESPONSE
} from "../actions/actionTypes";

function* watchCallAPI(action) {
    try {
        const state = yield select((state) => state);
        debugger
        let page = state.FirstScreenReducer.pageNo
        let data = yield Api.callAPI(page);
        debugger
        yield put({ type: SAVE_API_RESPONSE, data: data.hits, pageNo: page + 1 })
        debugger
    } catch (error) {
        // Todo: Handle Error
    }
}

export default function* FABPointsWatcher() {
    yield takeLatest(CALL_API, watchCallAPI)
}
