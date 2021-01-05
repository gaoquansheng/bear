import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/element.js";
import BaiduMap from "vue-baidu-map";

//全局组件挂载分页
import Pagination from "./components/Pagination"
Vue.component('Pagination', Pagination)

Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: "MaNFkHxfgMEfEodDwDsB6pbE95pj3dCB"
});

window.eventBus = new Vue();
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
