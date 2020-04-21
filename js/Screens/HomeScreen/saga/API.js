'Use Strict';

import BaseApiService from "../../../services/BaseApiServices"

function callAPI(page) {
    const url = ''
    return BaseApiService.get(url);
}

export const Api = {
    callAPI
};