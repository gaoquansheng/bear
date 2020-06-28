<template>
  <div class="chatRoom">
    <div class="top" id="top">
      <h3>聊天</h3>
      <hr />
      <ul>
        <li v-for="(chat, index) in chatList" class="list-item" :key="index">
          <div class="userMessage">
            <span>{{ chat.userTel }}:</span>
            <span>{{ chat.message }}</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="bottom">
      <el-input v-model="message" placeholder="请输入信息" />
      <el-button @click.native="sendMessage">发送</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "",
      userTelList: this.initUserTels,
      websock: null,
      chatList: [],
      websocketUrl:
      "ws://192.168.1.29:8080/webSocketServer/" + this.$store.state.userTel,
      receivedUserTels: this.initUserTels
    };
  },
  props: {
    //接受信息的人员名单
    initUserTels: {
      type: Array
    }
  },
  methods: {
    sendMessage() {
      console.log(this.userTelList);
      
      // if (this.message != "") {
      //   if(this.userTelList.length == 0){
      //     this.$message("请选择要发送的用户")
      //   }else{
      //     this.websock.websocketsend()
      //     this.message = "";
      //   }
      // }
    },
    initWebSocket() {
      //初始化weosocket
      this.websock = new WebSocket(this.websocketUrl);
      this.websock.onmessage = this.websocketonmessage;
      this.websock.onopen = this.websocketonopen;
      this.websock.onerror = this.websocketonerror;
      this.websock.onclose = this.websocketclose;
    },
    //下面这些是回调函数
    websocketonopen() {
      //连接建立之后执行send方法发送数据
      console.log("连接成功");
    },
    websocketonerror() {
      //连接建立失败重连
      console.log("连接失败重新连接");
      this.initWebSocket();
    },
    websocketonmessage(e) {
      //这里会接受两个数据,一个直播数据,一个交互信息
      console.log("接受数据");
      let data = JSON.parse(e.data);
      if (data.message != null) {
        //这里是消息
        this.chatList.push(data);
      } else {
        //这里是直播,发送出去，父组件接受这个时间
        this.$emit("liveVideo",data);
      }
    },

    //两个方法
    websocketsend(message) {
      //数据发送
      let data = {
        userTel: this.$store.state.userTel,
        message: message,
        sendTime: new Date(),
        receivedUserTels:this.receivedUserTels.join(",")
      };
      this.websock.send(JSON.stringify(data));
    },
    //eslint-ignore-next-line
    websocketclose() {
      console.log("断开连接");
    },
  },
  updated() {
    //设置聊天室滚动条一直在最下方
    let ele = document.getElementById("top");
    ele.scrollTop = ele.scrollHeight;
  },
  created() {
    this.initWebSocket();
  },
  destroyed() {
    this.websock.close(); //离开路由之后断开websocket连接
  }
      

};
</script>
<style scoped>
.chatRoom {
  position: fixed;
  width: inherit;
  margin-left: 10px;
  border-radius: 10px;
  background-clip: padding-box;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}
ul {
  padding: 0px;
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
