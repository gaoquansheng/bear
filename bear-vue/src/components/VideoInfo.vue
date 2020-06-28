<template>
  <div>
    <el-row class="videoTitle">{{ video.title }}</el-row>
    <el-row class="videoFoot">
      <el-col :span="12"
        ><i class="el-icon-user"></i>{{ video.user.userName }}</el-col
      >
      <el-col :span="12" class="date"
        ><i class="el-icon-date"></i>{{ video.startTime | timeFormat }}</el-col
      >
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      video: this.videoInfo
    };
  },
  props: {
    videoInfo: {
      type: Object
    }
  },
  filters: {
    timeFormat(time) {
      var date = new Date(time);
      return (
        date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
      );
    }
  }
};
</script>

<style scoped>
div {
  cursor: pointer;
}
.videoTitle {
  word-break: keep-all; /* 不换行 */
  white-space: nowrap; /* 不换行 */
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
  font-size: 14px;
  line-height: 20px;
  margin: 10px 0 8px;
  font-weight: 500;
  padding-right: 12px;
}
.videoFoot {
  /* justify-content: space-between; */
  text-align: left;
  font-size: 12px;
  line-height: 16px;
  color: #999;
  /* margin-left: 10px; */
}
i {
  color: blue;
  margin: 0 5px;
}
.date {
  text-align: right;
}
</style>
