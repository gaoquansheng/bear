<template>
  <div>
    <el-row :gutter="10" class="mb8">
      <el-col :span="1.5">
       选择演练:
      </el-col>
      <el-col :span="1.5">
        <el-select
          @change="getAttachments"
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
        >新增附件</el-button>
      </el-col>
    </el-row>

    <el-table
      :data="data"
      v-loading="loading"
      >
      <el-table-column
        align="center"
        prop="fileName"
        label="附件名">
      </el-table-column>
      <el-table-column
        align="center"
        prop="userTel"
        label="用户手机号">
      </el-table-column>
      <el-table-column
        align="center"
        prop="path"
        label="附件路径"
        >
        <template slot-scope="scope">
          <el-link 
            type="success" 
            target="_blank"
            :href="scope.row.path">{{scope.row.path}}</el-link>
        </template>
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

    <pagination
      v-show="total>0"
      :total="total"
      :page.sync="queryParams.pageNum"
      :limit.sync="queryParams.pageSize"
      @pagination="getAttachments"
    />


  <el-dialog :title="title" :visible.sync="flag" width="500px" append-to-body>
      <el-form :model="attachmentForm" label-width="80px">
        <el-form-item label="附件名称" >
          <el-upload
            ref="upload"
            class="upload-demo"
            :action="uploadUrl"
            :on-success="uploadSuccess"
            :on-change="handleChange"
            :file-list="fileList"
          >
            <el-button
              slot="trigger"
              size="small"
              type="success"
            >点击上传</el-button>
          </el-upload>
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
        pageSize: 10,
        planId: ""
      },
      planList: "",
      title: "",
      flag: false,
      attachmentForm: {},
      uploadUrl: process.env.VUE_APP_BASE_API + "/attachment/upload",
      fileList:[],
      data: [],
      loading: false,
      total: 0
    }
  },
  mounted(){
      this.getPlan();
  },
  methods: {
      getPlan(){
        getRequest("/plan/plans").then(res => {
            this.planList = res.rows;
            this.queryParams.planId = res.rows[0].planId
            this.getAttachments();
        })
      },
      getAttachments(){
        getRequest("/attachment/attachments/",this.queryParams).then(res =>{
          this.data = res.rows;
          this.total = res.total;
          this.loading = false;
        })
      },
      handleAdd(){
        this.clearForm()
        this.flag = true;
        this.title = "新增附件"
      },
      clearForm(){
        this.attachmentForm = {
          path: "",
          fileName: "",
          planId: "",
          attachmentId: "",
          userTel: ""
        };
        this.fileList = [];
      },
      submit() {
        //判断是新增还是修改
        if(!this.attachmentForm.attachmentId) {
          this.attachmentForm.planId = this.queryParams.planId;
          postRequest("/attachment/attachments",this.attachmentForm).then(res =>{
            this.flag = false;
            this.getAttachments();          
            this.$message({
              type: "success",
              message: "新增成功"
            })
          })
        }else {
          putRequest("/attachment/attachments",this.attachmentForm).then(res => {
            this.flag = false;
            this.getAttachments();          
            this.$message({
              type: "success",
              message: "修改成功"
            })            
          })
        }

      },
      uploadSuccess(res) {
        if(res){
          this.attachmentForm.path = res.path;
          this.attachmentForm.fileName = res.fileName;
        }
      },
      handleDelete(row) {
        this.$confirm(
          '是否确认删除附件编号为"' + row.attachmentId + '"的数据项?',
          "警告",
          {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "warning"
          }
        ).then(function(){
          
          return deleteRequest("/attachment/attachments/"+row.attachmentId)
        }).then(()=> {
          this.getAttachments()
          this.$message({
            message: '删除成功',
            type: 'success'
          });
        }) 
      },
      handleChange(files, fileList) {
        if (fileList.length > 0) {
          this.fileList = [fileList[fileList.length - 1]]; // 这一步，是 展示最后一次选择的csv文件
        }
    },

  }
}
</script>

<style>

</style>