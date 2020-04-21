'Use Strict';
import { persistReducer } from "redux-persist";
import {
    
} from "../actions/actionTypes";

const initialState = {
    
};

const HomeScreenReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default HomeScreenReducer;
