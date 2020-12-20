<template>
  <div>
    <el-row :gutter="10" class="mb8">
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
        :formatter="enabledFormatter"
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
      <el-table-column
        align="center"
        prop="description"
        label="描述"
        width="180">
      </el-table-column>
      <el-table-column
        align="center"
        prop="indexType"
        label="指标类型">
      </el-table-column>
      <el-table-column
        align="center"
        prop="options"
        label="选项">
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
    <el-form :model="indexForm" label-width="80px">
      <el-form-item label="指标名称" >
        <el-input v-model="indexForm.indexName" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="是否启用" >
        <el-select v-model="indexForm.enabled" placeholder="请选择">
              <el-option
              v-for="indexEnabled in indexEnabledList"
              :key="indexEnabled.value"
              :label="indexEnabled.label"
              :value="indexEnabled.value">
              </el-option>
          </el-select>
      </el-form-item>
      <el-form-item label="演练描述" >
        <el-input v-model="indexForm.description" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="指标类型" >
          <el-select  
            v-model="indexForm.indexType"
            placeholder="请选择">
              <el-option
              v-for="indexType in indexTypeList"
              :key="indexType.value"
              :value="indexType.value">
              </el-option>
          </el-select>
      </el-form-item>
      <el-form-item label="最低分" v-if="indexForm.indexType ===indexTypeList[0].value">
          <el-input v-model="indexForm.minScore" placeholder="请输入最小分数"></el-input>
      </el-form-item>
      <el-form-item label="最高分" v-if="indexForm.indexType ===indexTypeList[0].value">
          <el-input v-model="indexForm.maxScore" placeholder="请输入最大分数"></el-input>
      </el-form-item>
      <el-form-item label="选项" v-if="indexForm.indexType ===indexTypeList[1].value">
        <el-checkbox-group v-model="checkList">
          <el-checkbox label="优秀"></el-checkbox>
          <el-checkbox label="良好"></el-checkbox>
          <el-checkbox label="及格"></el-checkbox>
          <el-checkbox label="不及格"></el-checkbox>
        </el-checkbox-group>
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
            data: [],
            planList: "",
            flag: false,
            loading: true,
            indexForm: {
                indexName: "",
                enabled: true,
                minScore: "",
                maxScore: "",
                description: "",
                indexType: "",
                planId: "",
                options: ""
            },
            indexTypeList: [
                {
                    value: "打分" 
                },
                {
                    value: "优良中差" 
                },
                {
                    value: "评语" 
                }
            ],
            indexEnabledList: [
                {
                    label: "是",
                    value: true
                },
                {
                    label: "否",
                    value: false
                }
            ],
            title: "",
            checkList: []
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
                this.getIndexes();
            })
        },
        getIndexes(){
          this.loading = true;
          getRequest("/index/indexes/"+this.queryParams.planId).then(res => {
            this.data = res.data;
            this.loading = false;
          })
        },
        handleAdd(){
            this.clearForm()
            this.flag = true;
            this.title = "新增指标"

        },
        submit(){
          //过滤指标选项的内容
          if(this.indexForm.indexType == this.indexTypeList[1].value){
            let options = this.checkList.join("_");
            this.indexForm.options = options
            this.indexForm.minScore = "";
            this.indexForm.maxScore = "";
          }
          if(this.indexForm.indexType == this.indexTypeList[2].value){
            this.indexForm.options = "";
            this.indexForm.minScore = "";
            this.indexForm.maxScore = "";
          }
          if(!this.indexForm.planId){
            this.indexForm.planId = this.queryParams.planId;
            postRequest("/index/indexes",this.indexForm).then(res => {
              console.log(res);
              this.flag = false;
              this.getIndexes();
              this.$message({
                message: '新增成功',
                type: 'success'
              });
            })
          }else {
            putRequest("/index/indexes",this.indexForm).then(res =>{
              this.flag = false;
              this.getIndexes();
              this.$message({
                message: '修改成功',
                type: 'success'
              });   
            })
          }
        },
        clearForm(){
            this.indexForm = {
                indexName: "",
                enabled: true,
                minScore: "",
                maxScore: "",
                description: "",
                indexType: "",
                options: ""
            }
            this.checkList = [];
        },
        handleUpdate(row){
          this.clearForm();
          getRequest("/index/indexes/indexId/"+row.indexId).then(res => {
            console.log(res);
            this.indexForm = res.data;
            this.flag = true;
            this.title = "修改指标"
          })
        },
        handleDelete(row){
          this.$confirm(
            '是否确认删除指标编号为"' + row.indexId + '"的数据项?',
            "警告",
            {
              confirmButtonText: "确定",
              cancelButtonText: "取消",
              type: "warning"
            }
          ).then(function(){
            console.log("hello");
            return deleteRequest("/index/indexes/"+row.indexId)
          }).then(()=> {
            this.getIndexes()
            this.$message({
              message: '删除成功',
              type: 'success'
            });
          })
        },
        enabledFormatter(row,column,value){
          return !value? "否":"是"
        }
    }
}
</script>

<style>

</style>