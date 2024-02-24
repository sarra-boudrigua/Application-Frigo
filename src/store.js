import { createStore } from 'vuex';

export default createStore({
  state: {
    selectedElement: null,
  },
  mutations: {
    setSelectedElement(state, element) {
      state.selectedElement = element;
    },
  },
  actions: {
    setSelectedElement({ commit }, element) {
      commit('setSelectedElement', element);
    },
  },
});
