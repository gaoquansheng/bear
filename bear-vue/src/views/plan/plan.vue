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
      style="width: 100%"
      @selection-change="handleSelectionChange"
      >
      <!-- <el-table-column
        type="selection"
        width="55">
      </el-table-column> -->
      <el-table-column
        prop="planName"
        label="演练名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="startTime"
        label="开始时间"
        width="180">
      </el-table-column>
      <el-table-column
        prop="endTime"
        label="结束时间">
      </el-table-column>
    </el-table>

<el-dialog title="新增演练" :visible.sync="flag" width="500px" append-to-body>
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
      data: [],
      flag: false,
      planForm: {},
      multipleSelection: []
    }
  },
  mounted(){
    this.getPlans();
  },
  methods:{
    getPlans(){
      getRequest("/plan/plans").then(res => {
        console.log(res.data);
        this.data = res.data;
      })
    },
    addPlan(){
      this.flag = true;
      this.clearForm();
    },
    submit(){
      //首先验证合法性
      //然后发送给后端
      console.log(this.planForm);
      postRequest("/plan/plans",this.planForm).then(res =>{
        console.log(res);
        this.flag = false;
      })
    },
    handleSelectionChange(val){
       this.multipleSelection = val;
    },
    clearForm(){
      this.planForm = {
        planName: "",
        startTime: "",
        endTime: ""
      }
    }
  }
}
</script>

<style>

</style>