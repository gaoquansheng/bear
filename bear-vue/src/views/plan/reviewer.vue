<template>
  <div>
    <el-row :gutter="10" class="mb8">
      <el-col :span="1.5">
       选择预案:
      </el-col>
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
        >新增评估人员</el-button>
      </el-col>
    </el-row>

    <el-table
      :data="data"
      v-loading="loading"
      >
      <el-table-column
        align="center"
        prop="id"
        label="演练名称"
       >
      </el-table-column>
      <el-table-column
        align="center"
        prop="userTel"
        label="用户手机号"
        >
      </el-table-column>
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
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
            :key="item.userTel"
            :label="item.userName + '-' + item.userTel"
            :value="item.userTel">
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
    this.getUsers();
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
      getRequest("/web/allUsers").then(res => {
        console.log(res);
        this.userList = res.data;
      })
    },
    getReviewers(){
      this.loading = true;
      getRequest("/reviewer/reviewers/"+this.queryParams.planId).then(res => {
        this.data = res.data;
        this.loading = false;
      })
    },
    submit(){
      let tmp = this.checkUserList.join("-");
      this.reviewForm.userTel = tmp
      postRequest("/reviewer/reviewers",this.reviewForm).then(res =>{
        this.getReviewers();
        this.flag = false;
      })
    },
    handleAdd(){
      this.clearForm()
      this.flag = true;
      this.title = "新增指标"
    },
    clearForm(){
      this.reviewForm = {
        planId: this.queryParams.planId,
        userTel: ""
      },
      this.checkUserList = [];
    },
    handleDelete(row){
      this.$confirm(
        '是否确认删除评估人员编号为"' + row.id + '"的数据项?',
        "警告",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }
      ).then(function(){
        return deleteRequest("/reviewer/reviewers/"+row.id)
      }).then(()=> {
        this.getReviewers()
        this.$message({
          message: '删除成功',
          type: 'success'
        });
      })
    }
  }
}
</script>

<style>

</style>