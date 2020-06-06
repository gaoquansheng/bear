import Vue from "vue";
import VueRouter from "vue-router";

import Login from "../views/login/Login";
import Home from "../views/home/Home";
import Live from "../views/live/Live";
import Record from "../views/record/Record";
import LatestRecord from "../views/record/LatestRecord"
import UserManage from "../views/user/UserManage";
// import Map from "../views/map/Map"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "登录",
    hidden: true,
    component: Login
  },
  {
    path: "/home",
    name: "",
    hidden: true,
    component: Home
  },
  {
    path: "/home",
    // name: "直播管理",
    component: Home,
    iconCls: "fa fa-file-text-o",
    children: [
      {
        path: "/live",
        name: "直播管理",
        component: Live
      }
    ]
  },

  {
    path: "/home",
    name: "录播管理",
    component: Home,
    iconCls: "fa fa-file-text-o",
    children: [

      {
        path: "/latestrecord",
        name: "最新录播",
        component: LatestRecord
      },
      {
        path: "/record",
        name: "历史录播",
        component: Record
      }
    ]
  },
  {
    path: "/home",
    // name: "用户管理",
    component: Home,
    children: [
      {
        path: "/user",
        name: "用户管理",
        iconCls: "fa fa-user-o",
        component: UserManage
      }
    ]
  }
  // {
  //   path: "/home",
  //   // name: "用户管理",
  //   component: Home,
  //   children: [
  //     {
  //       path: "/map",
  //       name: "地图管理",
  //       iconCls: "fa fa-user-o",
  //       component: Map
  //     }
  //   ]
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
