<template>
  <div class="chatRoom">
    <div class="top" id="top">
      <h3>聊天室</h3>
      <hr>
      <ul>
        <li v-for="(chat,index) in chatList" class="list-item" :key="index">
          <div class="userMessage">
            <span>{{chat.userTel}}:</span>
            <span>{{ chat.message }}</span>
          </div>
          </li>
      </ul>
    </div>
    <div class="bottom">
      <el-input v-model="message" placeholder="请输入信息"/>
      <el-button @click.native="sendMessage">发送</el-button>
    </div>
  </div>


</template>

<script>
  export default {
    data () {
      return {
        message: "",
        chatList: this._chatList
      }
    },
    props: {
      _chatList: {
        type: Array
      }
    },
    methods: {
      sendMessage(){
        if (this.message != ""){
          this.$emit("sendMessage",this.message)
          this.message = "";
        }
      }
    },
    updated(){
      //设置聊天室滚动条一直在最下方
      let ele = document.getElementById('top');
      ele.scrollTop = ele.scrollHeight;
  }
  }
</script>
<style scoped>
.chatRoom {
  position:fixed;
  width:inherit;
  margin-left: 10px;
  border-radius: 10px;
  background-clip: padding-box;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}
ul {
  padding:0px
}
li {
    position: relative;
    line-height: 21px;
    word-break: break-all;
    word-wrap: break-word;
    margin-bottom: 8px;
    margin-top: 8px;
    font-size: 13px;
    outline: none;
    list-style: none;
    text-align: left;
}
.userMessage {
  vertical-align: middle;
}
span:first-child {
  color: red;
  margin: 0 5px;
}
span:nth-child(2) {
  color: black;
}
.top {
  height: 300px;
  overflow: auto;
}
.bottom {
  display: flex;
}
</style>