'Use Strict';

import BaseApiService from "../../../services/BaseApiServices"

function callAPI(page) {
    const url = `https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${page}`
    return BaseApiService.get(url);
}

export const Api = {
    callAPI
};