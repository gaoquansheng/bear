/* eslint-disable */
<template>
  <el-container class="home_container">
    <el-header>
      <div class="home_title">灾情录播平台</div>
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
      <el-container>
        <el-main>
          <router-view />
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
export default {
  mounted() {
    console.log(this.$router);
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
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
</style>
