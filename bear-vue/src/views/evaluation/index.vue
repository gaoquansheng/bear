<template>
  <div>
    <el-row :gutter="10" class="mb8">
      <el-col :span="1.5">
       选择预案:
      </el-col>
      <el-col :span="1.5">
        <el-select
          @change="getIndexes"
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
        prop="indexName"
        label="指标名称"
       >
      </el-table-column>
      <el-table-column
        align="center"
        prop="indexType"
        label="指标类型"
       >
      </el-table-column>
      <el-table-column label="评估内容" align="center">
        <template slot-scope="scope">
          <el-input v-if="scope.row.indexType == '打分'" v-model="scope.row.score"></el-input>
          <el-input v-else-if="scope.row.indexType == '评语'" v-model="scope.row.score"></el-input>
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
      @pagination="getIndexes"
    />


  </div>  
</template>

<script>
import { getRequest, postRequest } from "@/utils/api";

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
        this.getIndexes();
      })
    },
    getIndexes(){
      this.loading = true;
      getRequest("/index/indexes",this.queryParams).then(res =>{
        this.data = res.rows;
        this.total = res.total;
        this.loading = false;
      })
    },
    handleUpdate(row){
      postRequest("/score/scores", row).then(res => {
        console.log(res);
      })
    },

  }
}
</script>
