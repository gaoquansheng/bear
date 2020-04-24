/* eslint-disable */
<template>
  <div>
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
        <el-col :span="8">
          <el-input v-model="videoFilterFactors.title" placeholder="请输入标题"></el-input>
        </el-col>
        <el-col :span="2">
          <el-button type="success" @click="videoFilter">确定</el-button>
        </el-col>
      </el-row>
    <el-row :gutter="20">
      <el-col :span="8" v-for="(video, id) in recordVideoList" :key="id">
        <VideoPlayer :options="{controls:true,autoplay:true,muted:true,height:'200px',sources:[{src:video.videoUrl,type:'rtmp/flv'}]}"></VideoPlayer>
        <el-row>{{video.title}}</el-row>
        <el-row>
          <el-col :span="12">{{video.user.userName}}</el-col>
          <el-col :span="12">{{video.startTime | timeFormat}}</el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getRequest } from "../../utils/api";
import VideoPlayer from "@/components/VideoPlayer.vue";
export default {
  data() {
    return {
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
        title: ""
      }
    };
  },
  components: {
    VideoPlayer
  },
  filters: {
    timeFormat(time){
      console.log(time);
      var date = new Date(time);
      return date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
      // return  '1';
    }
  },
  methods: {
    videoFilter(){
      console.log(this.videoFilterFactors.timeRange)
      var _this = this;
      var tmp = "&title="+this.videoFilterFactors.title+"&timeRange="+this.videoFilterFactors.timeRange;
      getRequest("http://localhost:8080/web/videos?flag=0"+tmp).then(
        resp => {
          //这里遍历循环,
          _this.recordVideoList = resp.data;
          console.log(resp.data)
        },
        resp => {
          console.log(resp.data);
        }
      );
    },
    initVideos(){
      var _this = this;
      getRequest("http://localhost:8080/web/videos?flag=0").then(
        resp => {
          _this.recordVideoList = resp.data;
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
