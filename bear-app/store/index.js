import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
	state:{
		login:false,
		userName:""
	},
	mutations:{
		login(state,provider){
			state.login = true;
			state.userName = provider.userName;
		},
		logout(state){
			state.login = false;
			state.userName = "";
		},
		updateUserName(state,provider){
			state.userName = provider.userName;
		}
	},
	actions:{}
})

export default store