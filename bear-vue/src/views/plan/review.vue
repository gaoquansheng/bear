<template>
  <div>

    <el-row :gutter="10" class="mb8">
      <el-col :span="1.5">
        <el-select
          @change="getReviewers"
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
      <el-col :span="1.5">
        <el-button
          type="primary"
          icon="el-icon-plus"
          size="mini"
          @click="handleAdd"
          :disabled="!queryParams.planId"
        >新增</el-button>
      </el-col>
    </el-row>

    <el-table
      :data="data"
      v-loading="loading"
      >
      <el-table-column
        align="center"
        prop="indexName"
        label="演练名称"
       >
      </el-table-column>
      <el-table-column
        align="center"
        prop="enabled"
        label="是否启用"
        >
      </el-table-column>
      <el-table-column
        align="center"
        prop="minScore"
        label="最低分">
      </el-table-column>
      <el-table-column
        align="center"
        prop="maxScore"
        label="最高分"
       >
      </el-table-column>
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleUpdate(scope.row)"
          >修改</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>

  <el-dialog :title="title" :visible.sync="flag" width="500px" append-to-body>
    <el-form :model="reviewForm" label-width="80px">
      <el-form-item label="人员名称" >
        <el-select v-model="checkUserList" multiple placeholder="请选择">
          <el-option
            v-for="item in userList"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
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
import { getRequest, postRequest,putRequest,deleteRequest } from "../../utils/api";
export default {
  data(){
    return {
      queryParams: {
        planId: ""
      },
      planList: "",
      flag: false,
      title: "",
      reviewForm: {},
      userList: [],
      data: [],
      loading: true,
      checkUserList: []
    }
  },
  mounted(){
    this.getPlan();
  },
  methods: {
    getPlan(){
      getRequest("/plan/plans").then(res => {
          this.planList = res.data;
          this.queryParams.planId = res.data[0].planId
          this.getReviewers();
      })
    },
    getUsers(){
      getRequest("/web/users").then(res => {
        console.log(res);
      })
    },
    getReviewers(){

    },
    submit(){

    },
    handleAdd(){
      this.clearForm()
      this.flag = true;
      this.title = "新增指标"
    },
    clearForm(){

    },
    handleUpdate(){

    },
    handleDelete(){

    }
  }
}
</script>

<style>

</style>