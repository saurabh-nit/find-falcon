import axios from 'axios';
import { serializeQueryParams } from './apiUtils';

const headers = {};

export default {
  makeGetRequest(path, callback, fail, params) {
    headers['Content-Type'] = 'application/json;charset=UTF-8';
    const url = path + serializeQueryParams(params);
    axios
      .get(url, { withCredentials: false, headers })
      .then(callback)
      .catch(fail);
  },
  makePostRequest(path, callback, fail, payload, params) {
    // headers['Content-Type'] = 'application/json;charset=UTF-8';
    headers.Accept = 'application/json';
    const url = path + serializeQueryParams(params);
    axios
      .post(url, payload, { withCredentials: false, headers })
      .then(callback)
      .catch(fail);
  },
  // makeDeleteRequest(path, callback, fail, params) {
  //   headers['Content-Type'] = 'application/json;charset=UTF-8';
  //   path += serializeQueryParams(params);
  //   axios
  //     .delete(path, { withCredentials: true, headers })
  //     .then(callback)
  //     .catch(fail);
  // },
  // makePutRequest(path, callback, fail, payload, params) {
  //   headers['Content-Type'] = 'application/json;charset=UTF-8';
  //   path += serializeQueryParams(params);
  //   axios
  //     .put(path, payload, { withCredentials: true, headers })
  //     .then(callback)
  //     .catch(fail);
  // },
};
