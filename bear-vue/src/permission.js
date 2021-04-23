import router from "./router";
import store from "./store";

let admin = ["/","/home", "/live", "/latestrecord", "/record", "/plan", "/attachment", "/user", "/target", "/reviewer", "/evaluation"];
let reviewer = ["/","/home","/live", "/latestrecord", "/record", "/evaluation"]

router.beforeEach((to, from, next) => {
  //首先判断用户是否已登录
  console.log(store.state);
  if(store.state.isAdmin == ""){
    console.log("hello");
    next("/")
  }else{
    if(store.state.isAdmin == 1){
      if(admin.includes(to.path)){
        next();
      }else{
        next("/")
      }
    }else if(store.state.isAdmin == 2){
      console.log(to.path);
      if(reviewer.includes(to.path)){
        next();
      }else{
        next("/")
      }
    }
  }
  //接着判断用户角色 1 admin, 2 reviewer
  //然后判断 to是否在 其列表中，在则跳转，不在则不跳转

})