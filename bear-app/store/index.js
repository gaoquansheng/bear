import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
	state:{
		login: false,
		userTel: "",
		userName: "",
		lat: "",
		lng: ""
	},
	mutations:{
		login(state,provider){
			state.login = true;
			state.userTel = provider.userTel;
			state.userName = provider.userName;
			uni.setStorage({
				key: "userInfo",
				data:provider
			})
		},
		logout(state){
			state.login = false;
			state.userTel = "";
			state.userName = "";
			uni.removeStorage({
				key:"userInfo",
				success: function (res) {
					console.log('成功清理缓存');
				}
			})
		},
		// updateUserName(state,provider){
		// 	state.userName = provider.userName;
		// }
		location(state,provider){
			state.lat = provider.latitude;
			state.lng = provider.longitude;
		}
	},
	actions:{}
})

export default store