import Vue from 'vue';
import Vuex from 'vuex';

import falconStore from './falcon-store';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    falconStore,
  },
});
