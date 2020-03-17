import Vue from "vue";
import VueRouter from "vue-router";

import Login from "../views/login/Login"
import Home from "../views/home/Home"
import Live from "../views/live/Live"
import Record from "../views/record/Record"
import UserManage from "../views/user/UserManage"

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
    name: "直播管理",
    component: Home,
    iconCls: 'fa fa-file-text-o',
    children: [
      {
        path: "/live",
        name: "直播",
        component:Live
      },
      {
        path: "/record",
        name: "录播",
        component: Record
      }
    ]
  },
  {
    path: "/home",
    name: "用户管理",
    component: Home,
    children:[
      {
        path: "/user",
        name: "用户管理",
        iconCls: 'fa fa-user-o',
        component: UserManage
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
