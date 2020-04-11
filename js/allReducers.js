'Use Strict';

import {combineReducers} from 'redux';

const allReducers = () => {
    const FirstScreenReducer = require("./Screens/FirstScreen/reducer/firstScreenReducer").default;

    return combineReducers({
        FirstScreenReducer
    })
};

export default allReducers;
