<template>
  <div>
    <el-row :gutter="10" class="mb8">
      <el-col :span="1.5">
       选择预案:
      </el-col>
      <el-col :span="1.5">
        <el-select
          @change="getVideos"
          v-model="queryParams.planId"
          size="small">
          <el-option
            v-for="plan in planList"
            :key="plan.planId"
            :label="plan.planName "
            :value="plan.planId"
          ></el-option>
        </el-select>
      </el-col>
    </el-row>

    <el-table
      :data="data"
      v-loading="loading"
      >
      <el-table-column
        align="center"
        prop="userTel"
        label="演练名称"
       >
      </el-table-column>
      <el-table-column
        align="center"
        prop="title"
        label="是否启用"
        >
      </el-table-column>
      <el-table-column
        align="center"
        prop="flag"
        label="是否启用"
        >
      </el-table-column>
      <el-table-column
        align="center"
        prop="videoUrl"
        label="是否启用"
        >
      </el-table-column>
      <el-table-column
        align="center"
        prop="url"
        label="最低分">
      </el-table-column>
      <el-table-column
        align="center"
        prop="lat"
        label="最高分"
       >
      </el-table-column>
      <el-table-column
        align="center"
        prop="lng"
        label="描述"
        width="180">
      </el-table-column>
      <el-table-column
        align="center"
        prop="startTime"
        label="指标类型">
      </el-table-column>
      <el-table-column
        align="center"
        prop="endTime"
        label="选项">
      </el-table-column>
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleUpdate(scope.row)"
          >评估</el-button>
        </template>
      </el-table-column>
    </el-table>

    <pagination
      v-show="total>0"
      :total="total"
      :page.sync="queryParams.pageNum"
      :limit.sync="queryParams.pageSize"
      @pagination="getVideos"
    />
<!-- 这里对指标进行for渲染 -->
  <el-dialog :title="title" :visible.sync="flag" width="500px" append-to-body>
    <el-form :model="scoreForm" label-width="80px">

      <el-form-item v-for="index in indexList" :key="index.indexId" :label="index.indexType">
        <el-input v-if="index.indexType == '打分'"></el-input>
        <el-input v-else-if="index.indexType == '评语'"></el-input>
        <el-select v-else >
          <el-option v-for="item in index.options.split('_')" :value="item" :key="item"></el-option>
        </el-select>
      </el-form-item>

    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="flag = false">取 消</el-button>
      <el-button type="primary" @click="submit">确 定</el-button>
    </div>
  </el-dialog>

  </div>  
</template>

<script>
import { getRequest } from "../../utils/api";

export default {
  data(){
    return {
      queryParams: {
        pageNum: 1,
        pageSize: 10,  
        planId: ''
      },
      total: 0,
      planList: [],
      loading: false,
      data: [],
      scoreForm: {},
      indexList: [],
      flag: false,
      title: "评估"
    }
  },
  mounted(){
    this.getPlansByUserTel();
  },
  methods: {
    getPlansByUserTel(){
      getRequest("/reviewer/plans").then(res => {
        this.planList = res;
        this.queryParams.planId = res[0].planId;
        this.getVideos();
      })
    },
    getVideos(){
      this.loading = true;
      getRequest("/video/videos",this.queryParams).then(res =>{
        this.data = res.rows;
        this.total = res.total;
        this.loading = false;
      })
    },
    handleUpdate(row){
      //这里首先去查index表来查看对应的指标类型
      let tmp = {"planId":row.planId};
      getRequest("/index/indexes",tmp).then(res =>{
        this.indexList = res.rows;
        this.flag = true;
      })
    },
    submit(){

    }
  }
}
</script>

<style>

</style>