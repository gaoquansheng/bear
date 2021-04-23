import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userTel: "",
    userName: "",
    isAdmin: ""
  },
  mutations: {
    login(state, payload) {
      state.userTel = payload.userTel;
      state.userName = payload.userName;
      state.isAdmin = payload.isAdmin;
    },
    logout(state){
      state.userTel = "";
      state.userName = "";
    }
  },
  actions: {},
  modules: {}
});
