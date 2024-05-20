import { createStore } from 'vuex';

import actions from './actions';
import mutations from './mutations';

export const createUniversalStore = initialState => createStore({
  actions,
  mutations,
  state() {
    return {
      jokesCategories: [],
      ...initialState,
    };
  },
});
