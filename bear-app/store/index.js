import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
	state:{
		login: false,
		userName: "",
		userId: ""
	},
	mutations:{
		login(state,provider){
			state.login = true;
			state.userName = provider.userName;
			state.userId = provider.userId;
		},
		logout(state){
			state.login = false;
			state.userName = "";
			state.userId = "";
		},
		updateUserName(state,provider){
			state.userName = provider.userName;
		}
	},
	actions:{}
})

export default store