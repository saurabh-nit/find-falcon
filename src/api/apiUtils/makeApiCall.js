import axios from 'axios';
import { serializeQueryParams } from './apiUtils';

const headers = {};
export default {
  makeGetRequest(path, callback, fail, params) {
    headers.Accept = 'application/json';
    const url = path + serializeQueryParams(params);
    axios
      .get(url, { withCredentials: false, headers })
      .then(callback)
      .catch(fail);
  },
  makePostRequest(path, callback, fail, payload, params) {
    headers.Accept = 'application/json';
    const url = path + serializeQueryParams(params);
    axios
      .post(url, payload, { withCredentials: false, headers })
      .then(callback)
      .catch(fail);
  },
};
