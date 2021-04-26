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

Vue.use(VueRouter);

const constantRoutes = [
  {
    path: "/",
    name: "登录",
    hidden: true,
    component: () =>import("@/views/login/Login")
  },
  {
    path: "/404",
    hidden: true,
    component: () =>import("@/views/error-page/404")
  },
  { path: '*', redirect: '/404', hidden: true }
];

export const asyncRoutes = [
  {
    path: "/home",
    component: Home,
    iconCls: "fa fa-file-text-o",
    children: [
      {
        path: "/live",
        name: "直播管理",
        component: () => import("@/views/live/Live")
      }
    ],
    meta:{
      role: ["admin","reviewer"]
    }
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
        component: () => import("@/views/record/LatestRecord")
      },
      {
        path: "/record",
        name: "历史录播",
        component: () => import("@/views/record/Record")
      }
    ],
    meta:{
      role: ["admin","reviewer"]
    }
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
        component: () => import("@/views/plan/plan")
      },

      {
        path: "/attachment",
        name: "附件管理",
        component: () => import("@/views/plan/attachment")
      }
    ],
    meta:{
      role: ["admin"]
    }
  },

  {
    path: "/home",
    component: Home,
    children: [
      {
        path: "/user",
        name: "用户管理",
        iconCls: "fa fa-user-o",
        component: () => import("@/views/user/UserManage")
      }
    ],
    meta:{
      role: ["admin"]
    }
  },
  {
    path: "/home",
    name: "评估管理",
    component: Home,
    children: [
      {
        path: "/target",
        name: "指标管理",
        component: () => import("@/views/evaluation/target"),
        meta: {role: ["admin"]}
      },
      {
        path: "/reviewer",
        name: "评估人员管理",
        component: () => import("@/views/evaluation/reviewer"),
        meta: {role: ["admin"]}
      },
      {
        path: "/evaluation",
        name: "评估管理",
        iconCls: "fa fa-user-o",
        component: () => import("@/views/evaluation/evaluation"),
        meta: {role: ["admin", "reviewer"]}
      }
    ]
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  constantRoutes
});

export default router;
