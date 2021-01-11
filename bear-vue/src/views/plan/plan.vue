<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="1.5">
         <el-button  
          type="primary"
          icon="el-icon-plus"
          size="mini" @click="addPlan">新增演练</el-button>
      </el-col>
    </el-row>

     <el-table
      :data="data"
      v-loading="loading"
      >
      <el-table-column
        align="center"
        prop="planName"
        label="演练名称"
       >
      </el-table-column>
      <el-table-column
        align="center"
        prop="startTime"
        label="开始时间"
        width="180">
      </el-table-column>
      <el-table-column
        align="center"
        prop="endTime"
        label="结束时间">
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

    <pagination
      v-show="total>0"
      :total="total"
      :page.sync="queryParams.pageNum"
      :limit.sync="queryParams.pageSize"
      @pagination="getPlans"
    />

<el-dialog :title="title" :visible.sync="flag" width="500px" append-to-body>
  <el-form :model="planForm" label-width="80px">
    <el-form-item label="演练名称" >
      <el-input v-model="planForm.planName" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="开始时间" >
      <el-date-picker
        v-model="planForm.startTime"
        type="datetime"
        value-format="yyyy-MM-dd HH:mm:ss"
        placeholder="选择日期时间">
      </el-date-picker>
    </el-form-item>
    <el-form-item label="结束时间" >
      <el-date-picker
        v-model="planForm.endTime"
        type="datetime"
        value-format="yyyy-MM-dd HH:mm:ss"
        placeholder="选择日期时间">
      </el-date-picker>
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
        pageNum: 1,
        pageSize: 10
      },
      data: [],
      flag: false,
      planForm: {},
      loading: true,
      title: "",
      total: 0
    }
  },
  mounted(){
    this.getPlans();
  },
  methods:{
    getPlans(){
      this.loading = true;
      getRequest("/plan/plans",this.queryParams).then(res => {
        console.log(res);
        this.data = res.rows;
        this.total = res.total;
        this.loading = false;
      },
      
      )
    },
    addPlan(){
      this.clearForm();
      this.flag = true;
      this.title = "新增应急演练"
    },
    submit(){
      if(!this.planForm.planId){
        postRequest("/plan/plans",this.planForm).then(res =>{
          this.flag = false;
          this.getPlans();
          this.$message({
          message: res.msg,
          type: 'success'
        });
        })
      }else {
        putRequest("/plan/plans",this.planForm).then(res =>{
          this.flag = false;
          this.getPlans();
          this.$message({
          message: res.msg,
          type: 'success'
        });
        })
      }

    },
    clearForm(){
      this.planForm = {
        planName: "",
        startTime: "",
        endTime: ""
      }
    },
    handleUpdate(row){
      this.clearForm();
      getRequest("/plan/plans/"+row.planId).then(res =>{
        this.planForm = res.data;
        this.flag = true;
        this.title = "修改应急演练"
      })
    },
    handleDelete(row){
       this.$confirm(
        '是否确认删除应急演练编号为"' + row.planId + '"的数据项?',
        "警告",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }
      ).then(function(){
        console.log("hello");
        return deleteRequest("/plan/plans/"+row.planId)
      }).then(()=> {
        this.getPlans()
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