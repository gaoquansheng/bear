import { reject } from "core-js/fn/promise";
import Vue from "vue";
import Vuex from "vuex";
import {login} from "@/api/user"

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
    },
    SET_USERINFO(state, userInfo){

    }
  },
  actions: {
    login({commit}, userInfo){
      return new Promise((resolve, reject) => {
        login(userInfo).then(response => {
          commit("SET_USERINFO", response);
          resolve();
        }).catch(error => {
          reject(error);
        })
      })
    }
  },
  modules: {}
});
