'Use Strict';

import { combineReducers } from 'redux';

const allReducers = () => {
    const HomeScreenReducer = require("./Screens/HomeScreen/reducer/homeScreenReducer").default;

    return combineReducers({
        HomeScreenReducer
    })
};

export default allReducers;
