import api from '@/api/falcon-apis';
import errorHandler from '@/api/apiUtils/errorHandler';

export default {
  state: {
    planets: [],
    vehicles: [],
    token: '',
    result: {},
  },
  getters: {
    getPlanets(state) {
      return state.planets;
    },
    getVehicles(state) {
      return state.vehicles;
    },
    getToken(state) {
      return state.token;
    },
    findFalconResult(state) {
      return state.result;
    },
  },
  mutations: {
    setPlanets(state, value) {
      state.planets = value;
    },
    setVehicles(state, value) {
      state.vehicles = value;
    },
    setToken(state, value) {
      state.token = value;
    },
    setResult(state, value) {
      state.result = value;
    },
  },
  actions: {
    GET_PLANETS({ commit, dispatch }, { params, pathVariables } = {}) {
      api.getPlanets(
        (response) => {
          commit('setPlanets', response.data);
        },
        (error) => {
          errorHandler.handleErrors(dispatch, error);
        },
        pathVariables,
        params,
      );
    },
    GET_VEHICLES({ commit, dispatch }, { params, pathVariables } = {}) {
      api.getVehicles(
        (response) => {
          commit('setVehicles', response.data);
        },
        (error) => {
          errorHandler.handleErrors(dispatch, error);
        },
        pathVariables,
        params,
      );
    },
    GET_TOKEN({ commit, dispatch }, { params, payload } = {}) {
      api.getTokenToFindFalcon(
        (response) => {
          commit('setToken', response.data.token);
        },
        (error) => {
          errorHandler.handleErrors(dispatch, error);
        },
        payload,
        params,
      );
    },
    FIND_FALCON({ dispatch }, {
      params, payload, success, fail,
    }) {
      api.findFalconWithPayload(
        (response) => {
          success(response.data);
        },
        (error) => {
          errorHandler.handleErrors(dispatch, error);
          fail(error);
        },
        payload,
        params,
      );
    },
    CLEAR_RESULT({ commit }) {
      commit('setResult', {});
    },
    SAVE_RESULT({ commit }, { payload }) {
      commit('setResult', payload);
    },
  },
  namespaced: true,
};
