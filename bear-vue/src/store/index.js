// import { reject } from "core-js/fn/promise";
import Vue from "vue";
import Vuex from "vuex";
import {login} from "@/api/user"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userTel: "",
    userName: "",
    role: ""
  },
  mutations: {
    logout(state){
      state.userTel = "";
      state.userName = "";
    },
    SET_USERINFO(state, payload){
      state.userTel = payload.userTel;
      state.userName = payload.userName;
      state.role = payload.isAdmin == 1? "admin":"reviewer";
    }
  },
  actions: {
    login({commit}, userInfo){
      return new Promise((resolve, reject) => {
        login(userInfo).then(response => {
          commit("SET_USERINFO", response);
          //这里把用户信息也存入到sessionStorage中，没办法了。先这样
          let role = response.isAdmin == 1? "admin":"reviewer";
          sessionStorage.setItem("role", role)
          resolve();
        }).catch(error => {
          reject(error);
        })
      })
    },
    
  },
  modules: {}
});
