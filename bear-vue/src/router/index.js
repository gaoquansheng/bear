import Vue from "vue";
import VueRouter from "vue-router";
// import store from "@/store/index.js"

import Login from "@/views/login/Login";
import Home from "@/views/home/Home";
import Live from "@/views/live/Live";
import Record from "@/views/record/Record";
import LatestRecord from "@/views/record/LatestRecord";
import UserManage from "@/views/user/UserManage";
import Plan from "@/views/plan/plan"
import Attachment from "@/views/plan/attachment"
import Reviewer from "@/views/evaluation/reviewer"
import Evaluation from "@/views/evaluation/evaluation"
import Target from "@/views/evaluation/target"

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
    name: "应急演练配置",
    component: Home,
    iconCls: "fa fa-file-text-o",
    children: [
      {
        path: "/plan",
        name: "演练管理",
        component: Plan
      },

      {
        path: "/attachment",
        name: "附件管理",
        component: Attachment
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
  },
  {
    path: "/home",
    name: "评估管理",
    component: Home,
    children: [
      {
        path: "/target",
        name: "指标管理",
        component: Target
      },
      {
        path: "/reviewer",
        name: "评估人员管理",
        component: Reviewer
      },
      {
        path: "/evaluation",
        name: "评估管理",
        iconCls: "fa fa-user-o",
        component: Evaluation
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
// router.beforeEach((to,from,next) => {
//   //首先判断访问的路径是不是登录页面，如果是就不加阻止，如果不是
//   if(to.path == "/"){
//     next();
//   }else{
//     if(store.state.userTel){
//       console.log("已经登陆了");
//       next();
//     }else{
//       next("/")
//     }
//   }



// })
export default router;
