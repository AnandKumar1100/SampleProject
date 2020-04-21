'Use Strict';
import { persistReducer } from "redux-persist";
import { AsyncStorage } from "react-native";
import {
    SAVE_LANGUAGE
} from "../actions/actionTypes";

const initialState = {
    selectedLanguage : 'English'
};

const HomeScreenReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_LANGUAGE:
            return {
                selectedLanguage: action.selectedLanguage
            }
        default:
            return state;
    }
}

export default persistReducer({
    key: 'selectedLanguage',
    storage: AsyncStorage
}, HomeScreenReducer);
