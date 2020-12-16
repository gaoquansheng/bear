<template>
  <div>
    <el-row :gutter="10" class="mb8">
      <el-col :span="1.5">
        <el-select
          @change="changePlan"
          v-model="indexForm.planId"
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
          :disabled="!indexForm.planId"
        >新增</el-button>
      </el-col>
    </el-row>

<el-dialog title="新增指标" :visible.sync="flag" width="500px" append-to-body>
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
          @change="changeType" 
          v-model="indexForm.type"
          placeholder="请选择">
            <el-option
            v-for="indexType in indexTypeList"
            :key="indexType.value"
            :value="indexType.value">
            </el-option>
        </el-select>
    </el-form-item>
    <el-form-item label="最低分" v-if="indexForm.type ==='打分'">
        <el-input v-model="indexForm.minScore" placeholder="请输入最小分数"></el-input>
    </el-form-item>
    <el-form-item label="最高分" v-if="indexForm.type ==='打分'">
        <el-input v-model="indexForm.maxScore" placeholder="请输入最大分数"></el-input>
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
            indexForm: {
                indexName: "",
                enabled: true,
                minScore: "",
                maxScore: "",
                description: "",
                type: "",
                planId: ""
            },
            indexTypeList: [
                {
                    value: "打分" 
                },
                {
                    value: "点评" 
                },
                {
                    value: "优良中差" 
                },
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
            ]
        }
    },
    mounted(){
        this.getPlan();
    },
    methods: {
        getPlan(){
            getRequest("/plan/plans").then(res => {
                console.log(res);
                this.planList = res.data;
                this.indexForm.planId = res.data[0].planId
            })
        },
        handleAdd(){
            this.flag = true;
            this.clearForm()
        },
        changePlan(){

        },
        changeType(){

        },
        submit(){
            console.log(this.indexForm);
        },
        clearForm(){
            this.indexForm = {
                indexName: "",
                enabled: true,
                minScore: "",
                maxScore: "",
                description: "",
                type: "",
                planId: ""
            }
        }
    }
}
</script>

<style>

</style>