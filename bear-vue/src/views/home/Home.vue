/* eslint-disable */
<template>
  <el-container class="home_container">
    <el-header>
      <div class="home_title">应急指挥演练辅助平台
      </div>
      <div class="userInfo">
        <el-dropdown @command="handleCommand">
          <span class="el-dropdown-link">
            {{this.$store.state.userName}}<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>

    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu
          default-active="0"
          class="el-menu-vertical-demo"
          style="background-color:  #ececec"
          router
        >
          <template v-for="(item, index) in this.$router.options.routes">
            <template v-if="!item.hidden">
              <el-submenu
                :index="index + ''"
                v-if="item.children.length > 1"
                :key="index"
              >
                <template slot="title">
                  <i :class="item.iconCls"></i>
                  <span>{{ item.name }}</span>
                </template>
                <el-menu-item
                  v-for="child in item.children"
                  :index="child.path"
                  :key="child.path"
                  >{{ child.name }}</el-menu-item
                >
              </el-submenu>
              <template v-else>
                <el-menu-item
                  :index="item.children[0].path"
                  :key="item.children[0].path"
                >
                  <i :class="item.children[0].iconCls"></i>
                  <span slot="title">{{ item.children[0].name }}</span>
                </el-menu-item>
              </template>
            </template>
          </template>
        </el-menu>
      </el-aside>
        <el-main>
          <router-view />
        </el-main>
    </el-container>
    <el-footer>©防灾科技学院 应急管理学院</el-footer>
  </el-container>
</template>

<script>
export default {
  mounted() {
    // console.log(this.$router);
  },
  methods: {
    handleCommand(command){
      this[command]();
    },
    logout(){
      this.$store.commit("logout");
      this.$router.replace("/")
    }
  }
};
</script>

<style>
.home_container {
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
}

.el-header {
  background-color: #20a0ff;
  color: #333;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.el-aside {
  background-color: #ececec;
}

.el-main {
  background-color: #fff;
  color: #000;
  text-align: center;
}

.home_title {
  color: #fff;
  font-size: 22px;
  display: inline;
}
.el-footer {
  position: fixed;
  bottom: 0px;
  width:100%;
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-dropdown {
  color:#fff !important;
}
</style>
