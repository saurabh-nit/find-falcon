import apiUrls from './api-paths';
import apiCall from './apiUtils/makeApiCall';

export default {
  getPlanets(callback, fail, pathVariables, params) {
    apiCall.makeGetRequest(apiUrls.api.getAllPlanets, callback, fail, params);
  },
  getVehicles(callback, fail, pathVariables, params) {
    apiCall.makeGetRequest(apiUrls.api.getAllVehicles, callback, fail, params);
  },
  getTokenToFindFalcon(callback, fail, params, payload) {
    apiCall.makePostRequest(apiUrls.api.getToken, callback, fail, params, payload);
  },
  findFalconWithPayload(callback, fail, params, payload) {
    apiCall.makePostRequest(apiUrls.api.findTheFalcon, callback, fail, params, payload);
  },
};
