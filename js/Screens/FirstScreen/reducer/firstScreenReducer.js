'Use Strict';

import {
    CALL_API,
    SAVE_API_RESPONSE
} from "../actions/actionTypes";

const initialState = {
    list: [],
    pageNo: 0
};

const FirstScreenReducer = (state = initialState, action) => {
    switch (action.type) {
        case CALL_API:
            return {
                ...state
            }
        case SAVE_API_RESPONSE: {
            debugger
            return {
                ...state,
                list: [...state.list, ...action.data],
                pageNo: action.pageNo
            }
        }
        default:
            return state;
    }
}

export default FirstScreenReducer;
