/* eslint-disable */
<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="5">
        <el-input v-model="title" @keyup.enter.native="getLiveVideos" placeholder="请输入标题或用户姓名"></el-input>
      </el-col>
      <el-col :span="2">
        <el-button type="success" @click="getLiveVideos">搜索</el-button>
      </el-col>
      <el-col :span="2">
        <el-button
          type="success"
          :title="patten ? '切换地图模式' : '切换列表模式'"
          icon="el-icon-s-operation"
          @click="patten = !patten"
        ></el-button>
      </el-col>
      <el-col :span="4">
        <el-select v-model="videoSpan" placeholder="请选择布局">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      </el-col>
    </el-row>
    <!-- 默认为列表模式 -->
    <div v-if="patten">
      <el-row v-show="liveVideoList.length != 0">
        <el-col :span="18">

          <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
          <div style="margin: 15px 0;"></div>

          <el-row :gutter="20">
            <el-checkbox-group v-model="checkedUserTels" @change="handleChange">

            <draggable v-model="liveVideoList" @start="testStart" @end="testEnd" class="list-group" :animation='200'>
                <el-col
                  :span="videoSpan"
                  v-for="(video, id) in liveVideoList"
                  :key="video.videoId"
                >
                  <div class="dislike" @click="dislikeVideo(video, id)">x</div>
                  <VideoPlayer
                    :ref="'video'+video.videoId"
                    :options="{
                      controls: true,
                      autoplay: true,
                      //muted: true,
                      fluid: true,
                      liveui: true,
                      sources: [{ src: video.url, type: 'rtmp/flv' }]
                    }"
                  ></VideoPlayer>
                  <VideoInfo :videoInfo="video"></VideoInfo>
                  <el-checkbox  :label="video.userTel">
                    <div style="display:none"></div>
                  </el-checkbox>
                </el-col>
              </draggable>
            </el-checkbox-group>
          </el-row>
                      

        </el-col>
        <el-col :span="5">
          <ChatRoom
            ref="chat"
            :checkedUserTels="checkedUserTels_"
            @liveVideo="newLive"
            
          ></ChatRoom>
        </el-col>
      </el-row>
    </div>
    <div v-else>
      <VideoMap :videoPoints="liveVideoList"></VideoMap>
    </div>
  </div>
</template>

<script>
import { postRequest } from "../../utils/api";
import VideoPlayer from "@/components/VideoPlayer.vue";
import VideoMap from "@/components/VideoMap.vue";
import VideoInfo from "@/components/VideoInfo.vue";
import ChatRoom from "@/components/ChatRoom.vue";
import draggable from "vuedraggable"

export default {
  data() {
    return {
      // 直播列表
      liveVideoList: [],
      dislikeVideoList: [],
      //监听器
      // timer: "",
      //筛选的直播标题
      title: "",
      patten: true, //true代表列表模式,false代表map模式

      checkedUserTels: [],
      checkedUserTels_: [],
      checkAll: false,
      isIndeterminate: true,
      options: [{
          value: 12,
          label: '每行显示2个'
        }, {
          value: 8,
          label: '每行显示3个'
        }, {
          value: 6,
          label: '每行显示4个'
        }, {
          value: 4,
          label: '每行显示6个'
        }, {
          value: 3,
          label: '每行显示8个'
        }, {
          value: 2,
          label: '每行显示12个'
        }],
      videoSpan: 6 
    };
  },
  components: {
    VideoPlayer,
    VideoMap,
    VideoInfo,
    ChatRoom,
    draggable
  },
  methods: {
    getLiveVideos() {
      let video = {
        title: this.title
      };
      postRequest("/web/liveVideos",video).then(
        //
        resp => {
          //这里目前先这样做吧。没有加dislikevideoList的筛选条件。默认搜索就会充值dislikeVideoList
          this.liveVideoList = resp;
        },
        resp => {
          console.log(resp);
        }
      );
    },
    // eslint-disable-next-line
    dislikeVideo(video, id) {
      //首先将此直播资源从直播列表中移除
      this.liveVideoList.splice(id, 1);
      this.dislikeVideoList.push(video);
    },
    newLive(video){
      this.liveVideoList.push(video);
    },
    handleCheckAllChange(val) {
        this.checkedUserTels = val ? this.liveVideoList.map(video =>video.userTel) : [];
        this.isIndeterminate = false;
        //因为elementui中checkbox绑定的值无法动态响应，即无法作为prop属性传递下去，所以用两外一个变量传递
        this.checkedUserTels_.splice(0,this.checkedUserTels_.length)
        this.checkedUserTels.forEach(userTel => this.checkedUserTels_.push(userTel));
      },
    handleChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.liveVideoList.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.liveVideoList.length;
        this.checkedUserTels_.splice(0,this.checkedUserTels_.length);
        this.checkedUserTels.forEach(userTel => this.checkedUserTels_.push(userTel));
    },
    testStart(el){
      console.log(el);
      
      console.log("开始了");
      this.$refs['video113'][0].dis()
    },
    testEnd(){
      console.log("结束了");
      // this.$refs['video113'][0].init();
    }
  },
  mounted() {
    this.getLiveVideos();

    
  },
 


};
</script>

<style>
.el-col {
  border-radius: 20px;
  margin-bottom: 20px;
  position: relative;
}
.dislike {
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(50%, -50%);
  font-size: 16px;
  width: 14px;
  height: 14px;
  line-height: 14px;
  border-radius: 50%;
  cursor: pointer;
}
.dislike:hover {
  background-color: gray;
  color: white;
}
</style>
