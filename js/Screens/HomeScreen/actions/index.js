'use strict';

import { SAVE_LANGUAGE } from './actionTypes';

export const saveLanguageToStore = (selectedLanguage) => {
    return {
        type: SAVE_LANGUAGE,
        selectedLanguage
    }
};