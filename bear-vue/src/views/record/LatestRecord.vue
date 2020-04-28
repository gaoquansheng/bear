/* eslint-disable */
<template>
  <div>
    <!-- 这里是头部过滤条件部分 -->
      <el-row :gutter="10">
        <el-col :span="8">
          <el-date-picker
            v-model="videoFilterFactors.timeRange"
            type="daterange"
            align="right"
            unlink-panels
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :picker-options="pickerOptions">
          </el-date-picker>
        </el-col>
        <el-col :span="2">
          <el-button type="success" @click="initVideos">确定</el-button>
        </el-col>
         <el-col :span="2">
          <el-button type="success" :disabled="checkedVideoIds.length == 0" @click="dialogVisible = true">添加标题</el-button>
          </el-col>
        <el-col :span="2" :offset="10">
          <el-button type="success" :title="patten?'切换地图模式':'切换列表模式'"  icon="el-icon-s-operation" @click="patten = !patten"></el-button>
        </el-col>
      </el-row>
      <!-- 这里是录播的列表模式 -->
      <div v-if="patten">
        <el-row :gutter="10">
          <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
          <el-checkbox-group v-model="checkedVideoIds">
            <el-col :span="6" :offset="id%3 == 0?0:2" v-for="(video,id) in recordVideoList" :key="video.videoId">
              <el-checkbox :label="video.videoId">
                <VideoPlayer :options="{controls:true,autoplay:true,muted:true,width:'279px',sources:[{src:video.videoUrl,type:'rtmp/flv'}]}"></VideoPlayer>
                <VideoInfo :videoInfo="video"></VideoInfo>
              </el-checkbox>
            </el-col>
          </el-checkbox-group>
        </el-row>
      </div>
      <!-- 这里是录播的地图模式 -->
      <div v-else>
        <VideoMap :videoPoints="recordVideoList"></VideoMap>
      </div>
      <!-- 统一给视频添加标题的弹出框部分 -->
      <el-dialog
        title="添加标题"
        :visible.sync="dialogVisible"
        width="30%">
        <el-input v-model="title" placeholder="请输入标题"></el-input>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="addTitle">确 定</el-button>
        </span>
      </el-dialog>


  </div>
</template>

<script>
import { getRequest,postRequest } from "../../utils/api";
import VideoPlayer from "@/components/VideoPlayer.vue";
import VideoMap from "@/components/VideoMap.vue"
import VideoInfo from "@/components/VideoInfo.vue";
export default {
  data() {
    return {
      patten: true,//true代表列表模式,flase代表地图模式
      title: "",
      dialogVisible: false,
      isIndeterminate: true,
      checkAll: false,
      checkedVideoIds: [],
      recordVideoList: [],
      //日期选择模块
      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', [start, end]);
          }
          }, {
          text: '最近一个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            picker.$emit('pick', [start, end]);
            }
          }, {
          text: '最近三个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            picker.$emit('pick', [start, end]);
            }
          }]
        },
        //视频筛选条件对象
      
      
      videoFilterFactors:{
        timeRange: "",
      }
    };
  },
  components: {
    VideoPlayer,
    VideoMap,
    VideoInfo
  },
  methods: {
    handleCheckAllChange(val) {
      //这里将所有的videoIds赋值给checkedVideoIds,这里应该有更好的处理方法
      var videoIds = [];
      for(var video of this.recordVideoList){
        videoIds.push(video.videoId);
      };
      this.checkedVideoIds = val ? videoIds : [];
      this.isIndeterminate = false;
    },
    addTitle(){
      // console.log(this.checkedVideoIds)
      var _this = this;
      var ids = this.checkedVideoIds.join();
      console.log(ids);
      getRequest("http://localhost:8080/web/addTitle?ids="+ids+"&title="+this.title).then(
        resp =>{
          console.log(resp);
          //这里成功之后刷新数据
          _this.initVideos();
        }
      )
      this.dialogVisible = false;
    },
    //获取最新录播的数据
    initVideos(){
      var _this = this;
      //这里判断一下日期
      var video;
      console.log(this.videoFilterFactors.timeRange)
      if(this.videoFilterFactors.timeRange == null || this.videoFilterFactors.timeRange == ""){
        video = {
          flag:0
        }
      }else{
        video = {
          flag:0,
          startTime: this.videoFilterFactors.timeRange[0],
          endTime: this.videoFilterFactors.timeRange[1]
        }
      }
      
      postRequest("http://localhost:8080/web/latestVideos",video).then(
        resp => {
          _this.recordVideoList.splice(0,_this.recordVideoList.length);//重新赋值数组后会无法追踪数组
          //直接将数组进行赋值就会使得vue无法跟踪数组吗?
          //为什么修改数组之后没办法触发呢
          //这里是因为数组的更新检测
          for (let item of resp.data) {
            //判断这一项原来的列表中有吗,如果有就跳过,没有就push进去
            _this.recordVideoList.push(item)
            
          }

        },
        resp => {
          console.log(resp.data);
        }
      );
      
    }
  },
  mounted() {
    this.initVideos();
  }
};
</script>

<style>

  .el-col {
    border-radius: 20px;
    margin-bottom: 20px;
  }
  </style>
