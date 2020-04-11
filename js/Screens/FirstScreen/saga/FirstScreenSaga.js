import { put, select, takeLatest, delay } from 'redux-saga/effects';
import { Api } from "./API";
import {
    CALL_API,
    SAVE_API_RESPONSE
} from "../actions/actionTypes";

function* watchCallAPI(action) {
    try {
        const state = yield select((state) => state);
        let page = state.FirstScreenReducer.pageNo
        let data = yield Api.callAPI(page);
        yield put({ type: SAVE_API_RESPONSE, data: data.hits, pageNo: page + 1 })
        
        // Call API after 10 sec.
        yield delay(10000);
        yield put({ type: CALL_API })
    } catch (error) {
        alert('An error occured')
    }
}

export default function* FABPointsWatcher() {
    yield takeLatest(CALL_API, watchCallAPI)
}
