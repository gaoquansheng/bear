<template>
  <div>
    <el-row :gutter="10" class="mb8">
      <el-col :span="1.5">
       选择演练:
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
      <el-col :span="1.5">
        <el-button
          type="primary"
          icon="el-icon-plus"
          size="mini"
          @click="handleAdd"
          :disabled="!queryParams.planId"
        >新增指标</el-button>
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
        prop="userTel"
        label="用户手机号">
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
        prop="targetType"
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

    <pagination
      v-show="total>0"
      :total="total"
      :page.sync="queryParams.pageNum"
      :limit.sync="queryParams.pageSize"
      @pagination="getTargets"
    />

  <el-dialog :title="title" :visible.sync="flag" width="500px" append-to-body>
    <el-form :model="targetForm" label-width="80px">
      <el-form-item label="指标名称" >
        <el-input v-model="targetForm.targetName" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="是否启用" >
        <el-select v-model="targetForm.enabled" placeholder="请选择">
              <el-option
              v-for="item in enabledList"
              :key="item.value"
              :label="item.label"
              :value="item.value">
              </el-option>
          </el-select>
      </el-form-item>
      <el-form-item label="指标描述" >
        <el-input v-model="targetForm.description" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="指标类型" >
          <el-select  
            v-model="targetForm.targetType"
            placeholder="请选择">
              <el-option
              v-for="item in targetTypeList"
              :key="item.value"
              :value="item.value">
              </el-option>
          </el-select>
          <template v-if="targetForm.targetType ===targetTypeList[1].value">
            <el-button @click="addOption">新增</el-button>
          </template>
      </el-form-item>

      <el-form-item label="最低分" v-if="targetForm.targetType ===targetTypeList[0].value">
          <el-input v-model="targetForm.minScore" placeholder="请输入最小分数"></el-input>
      </el-form-item>
      <el-form-item label="最高分" v-if="targetForm.targetType ===targetTypeList[0].value">
          <el-input v-model="targetForm.maxScore" placeholder="请输入最大分数"></el-input>
      </el-form-item>

      <template v-if="targetForm.targetType ===targetTypeList[1].value">
        <el-form-item
            v-for="(option, index) in dynamicOptionList"
            :label="'选项' + index"
            :key="option.key">
            <el-input v-model="option.value"></el-input>
            <el-button @click.prevent="removeOption(option)">删除</el-button>
          </el-form-item>
      </template>
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
            data: [],
            planList: "",
            flag: false,
            loading: false,
            targetForm: {},
            targetTypeList: [
                {
                    value: "打分" 
                },
                {
                    value: "单选" 
                },
                {
                    value: "评语" 
                }
            ],
            enabledList: [
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
            dynamicOptionList: [
              {
                value: ""
              }
            ],
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
                this.getTargets();
            })
        },
        getTargets(){
          this.loading = true;
          getRequest("/target/targets/",this.queryParams).then(res => {
            this.data = res.rows;
            this.total = res.total;
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
          if(this.targetForm.targetType == this.targetTypeList[1].value){
            let tmp = []
            this.dynamicOptionList.forEach(option => {
              tmp.push(option.value);
            });
            this.targetForm.options = tmp.join("_")
            this.targetForm.minScore = "";
            this.targetForm.maxScore = "";
          }
          if(this.targetForm.targetType == this.targetTypeList[2].value){
            this.targetForm.options = "";
            this.targetForm.minScore = "";
            this.targetForm.maxScore = "";
          }
          if(!this.targetForm.planId){
            this.targetForm.planId = this.queryParams.planId;
            postRequest("/target/targets",this.targetForm).then(res => {
              this.flag = false;
              this.getTargets();
              this.$message({
                message: '新增成功',
                type: 'success'
              });
            })
          }else {
            putRequest("/target/targets",this.targetForm).then(res =>{
              this.flag = false;
              this.getTargets();
              this.$message({
                message: '修改成功',
                type: 'success'
              });   
            })
          }
        },
        clearForm(){
            this.targetForm = {
                targetName: "",
                enabled: true,
                minScore: "",
                maxScore: "",
                description: "",
                targetType: "",
                options: ""
            }
            this.dynamicOptionList =  [
            ];
        },
        handleUpdate(row){
          this.clearForm();
          getRequest("/target/targets/"+row.targetId).then(res => {
            this.targetForm = res.data;
            let tmp = res.data.options.split("_")
            tmp.forEach(item => {
              this.dynamicOptionList.push({
                key: Date.now(),
                value: item
              })
            })
            this.flag = true;
            this.title = "修改指标";
          })
        },
        handleDelete(row){
          this.$confirm(
            '是否确认删除指标编号为"' + row.targetId + '"的数据项?',
            "警告",
            {
              confirmButtonText: "确定",
              cancelButtonText: "取消",
              type: "warning"
            }
          ).then(function(){
            return deleteRequest("/target/targets/"+row.targetId)
          }).then(()=> {
            this.getTargets()
            this.$message({
              message: '删除成功',
              type: 'success'
            });
          })
        },
        enabledFormatter(row,column,value){
          return !value? "否":"是"
        },
        addOption(){
          this.dynamicOptionList.push({
            value: "",
            key: Date.now()
          })
        },
        removeOption(item) {
          let index = this.dynamicOptionList.indexOf(item)
          if (index !== -1) {
            this.dynamicOptionList.splice(index, 1)
          }
        }
    }
}
</script>

<style>

</style>