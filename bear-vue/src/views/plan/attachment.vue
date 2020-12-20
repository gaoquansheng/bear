<template>
  <div>
    <el-row :gutter="10" class="mb8">
      <el-col :span="1.5">
        <el-select
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

    <el-dialog :title="title" :visible.sync="flag" width="500px" append-to-body>
      <el-form :model="attachmentForm" label-width="80px">
        <el-form-item label="附件名称" >
          <el-upload
            ref="upload"
            class="upload-demo"
            :action="uploadUrl"
            :on-success="uploadSuccess"
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
          planId: ""
      },
      planList: "",
      title: "",
      flag: false,
      attachmentForm: {},
      uploadUrl: "http://localhost:8080/attachment/upload",
      // fileList:[]
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
              this.getAttachments();
          })
      },
      getAttachments(){

      },
      handleAdd(){
        this.clearForm()
        this.flag = true;
        this.title = "新增指标"
      },
      clearForm(){

      },
      submit(){

      },
      uploadSuccess(){

      },
    //   handleChange(files, fileList) {
    //     if (fileList.length > 0) {
    //       this.fileList = [fileList[fileList.length - 1]]; // 这一步，是 展示最后一次选择的csv文件
    //     }
    // },
  }
}
</script>

<style>

</style>