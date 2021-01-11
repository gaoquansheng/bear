<template>
  <div>
    <el-row :gutter="10" class="mb8">
      <el-col :span="1.5">
       选择预案:
      </el-col>
      <el-col :span="1.5">
        <el-select
          @change="getTargets"
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
        prop="targetName"
        label="指标名称"
       >
      </el-table-column>
      <el-table-column
        align="center"
        prop="targetType"
        label="指标类型"
       >
      </el-table-column>
      <el-table-column label="评估内容" align="center">
        <template slot-scope="scope">
          <el-input v-if="scope.row.targetType == '打分'" v-model="scope.row.score"></el-input>
          <el-input v-else-if="scope.row.targetType == '评语'" v-model="scope.row.score"></el-input>
          <el-select v-else v-model="scope.row.score">
            <el-option v-for="item in scope.row.options.split('_')" :key="item" :value="item"></el-option>
          </el-select>
        </template>
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
      @pagination="getTargets"
    />


  </div>  
</template>

<script>
import { getRequest, postRequest } from "@/utils/api";
import Vue from "vue"
import { putRequest } from '../../utils/api';
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
      flag: false,
      title: "评估",
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
        this.getTargets();
        
      })
    },
    getTargets(){
      this.loading = true;
      getRequest("/target/targets",this.queryParams).then(res =>{
        this.data = res.rows;
        this.total = res.total;
        this.loading = false;
        this.getScores()
      })
    },
    getScores(){
      getRequest("/score/scores?planId="+this.queryParams.planId).then(res => {
        for(let item of res.data) {
          for(let tmp of this.data){
            if(item.targetId === tmp.targetId){
              // tmp.score = item.score;
              Vue.set(tmp, "score", item.score)
              Vue.set(tmp, "scoreId", item.scoreId)
            }
          }
        }
        console.log(this.data);
      })
    },
    handleUpdate(row){
      if(!row.scoreId){
        //就是新增
        postRequest("/score/scores", row).then(res => {
          this.$message({
            type: "success",
            message: res.msg
          })
          this.getTargets();
        })
      }else {
        //就是更新
        putRequest("/score/scores", row).then(res =>{
          this.$message({
            type: "success",
            message: res.msg
          })
          this.getTargets();
        })
      }

    },

  }
}
</script>
