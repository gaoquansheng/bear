
<template>
  <el-form
    :rules="rules"
    :model="loginForm"
    class="login-container"
    label-position="left"
    label-width="0px"
    v-loading="loading"
    ref="loginForm"
  >
    <h3 class="login_title">系统登录</h3>
    <el-form-item prop="userTel">
      <el-input
        type="text"
        v-model="loginForm.userTel"
        auto-complete="off"
        placeholder="手机号"
      ></el-input>
    </el-form-item>
    <el-form-item prop="userPwd">
      <el-input
        type="password"
        v-model="loginForm.userPwd"
        auto-complete="off"
        placeholder="密码"
      ></el-input>
    </el-form-item>
    <el-checkbox class="login_remember" v-model="checked" label-position="left"
      >记住密码</el-checkbox
    >
    <el-form-item style="width: 100%">
      <el-button
        type="primary"
        @click.native.prevent="submitClick('loginForm')"
        style="width: 100%"
        >登录</el-button
      >
    </el-form-item>
  </el-form>
</template>

<script>
import { postRequest } from "../../utils/api";
export default {
  data() {
    return {
      //elementui验证规则中rules中的键值必须与v-model中的键值一致
      rules: {
        userTel: [{ required: true, message: "请输入手机号", trigger: "blur" }],
        userPwd: [{ required: true, message: "请输入密码", trigger: "blur" }]
      },
      checked: true,
      loginForm: {
        userTel: "15516392395",
        userPwd: "123456"
      },
      loading: false
    };
  },
  methods: {
    submitClick(formName) {
      this.$refs[formName].validate((valid) => {    
        if(valid){
          this.loading = true;
          this.$store.dispatch("login", this.loginForm)
            .then(() => {
              console.log("helo");
              this.$router.push({path: "/home"});
              this.loading = false;
            })
            .catch(() => {
              this.loading = false;
            })
          // postRequest("/web/login", this.loginForm).then(res => {
          //   console.log(res);
          //   this.loading = false;         
          //   this.$store.commit("login",res.data);
          //   this.$router.replace({ path: "/home" });
          //   },
          //   error => {
          //     this.loading = false;
          //   }
          // );
        }else{
          return false;
        }
      })

    }
  }
};
</script>

<style scoped>
.login-container {
  border-radius: 15px;
  background-clip: padding-box;
  margin: 180px auto;
  width: 350px;
  padding: 35px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}

.login_title {
  margin: 0px auto 40px auto;
  text-align: center;
  color: #505458;
}

.login_remember {
  margin: 0px 0px 35px 0px;
  text-align: left;
}
</style>
