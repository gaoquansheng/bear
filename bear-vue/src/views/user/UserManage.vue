<template>
  <div>
    <el-row>
      <el-col :span="3">
        <el-button type="success" @click="addUser">添加用户</el-button>
      </el-col>
      <el-col :span="3">
        <el-button
          type="danger"
          @click="handleDeleteUsers"
          :disabled="deleteUsers.length == 0"
          >批量删除</el-button>
      </el-col>
    </el-row>

    <!-- </div> -->
    <el-table
      :data="userList"
      stripe
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column
        prop="userName"
        label="姓名"
        width="180"
      ></el-table-column>
      <el-table-column
        prop="userTel"
        label="手机号"
        width="180"
      ></el-table-column>
      <el-table-column
        prop="isAdmin"
        label="用户身份"
        :formatter="isAdmin"
      ></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <pagination
      v-show="total>0"
      :total="total"
      :page.sync="queryParams.pageNum"
      :limit.sync="queryParams.pageSize"
      @pagination="getUsers"
    />

    <el-dialog :title="title" :visible.sync="flag" width="500px" append-to-body>
      <el-form
        :model="userForm"
        status-icon
        ref="userForm"
      >
        <el-form-item label="用户权限" label-width="80px">
          <el-select placeholder="请选择用户身份" :disabled = "title == '编辑用户'" v-model.number="userForm.isAdmin">
            <el-option v-for="item in isAdminList" 
            
            :label="item.label" 
            :value="item.value" 
            :key="item.value"></el-option>           
          </el-select>
        </el-form-item>
        <el-form-item label="姓名" label-width="80px" prop="userName">
          <el-input
            v-model="userForm.userName"
          ></el-input>
        </el-form-item>
        <el-form-item label="手机号" label-width="80px" prop="userTel">
          <el-input
            v-model="userForm.userTel"
            :disabled="title == '编辑用户'"
          ></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="flag = false">取 消</el-button>
        <el-button type="primary" @click="submit"
          >确 定</el-button
        >
      </span>
    </el-dialog>

  </div>
</template>

<script>
// import{postRequest} from '../../utils/api'
import { getRequest, postRequest } from "@/utils/api";
import { deleteRequest } from "@/utils/api";
import { putRequest } from "@/utils/api";
export default {
  data() {
    return {
      queryParams: {
        pageNum: 1,
        pageSize: 10,  
      },
      userForm: {},
      deleteUsers: [],
      flag: false,
      oldUserTel: "",
      userTelShow: false,
      userList: [],
      loading: false,
      total: 0,
      title: "",
      isAdminList: [
        {
          label: "普通用户",
          value: 0
        },
        {
          label: "管理员",
          value: 1
        }
      ]
    };
  },
  mounted() {
    this.getUsers()
  },
  methods: {
    addUser(){
      this.clearForm();
      this.flag = true;
      this.title = "添加用户"
    },
    submit() {
      if(this.title == "添加用户"){
        postRequest("/user/users", this.userForm).then(res => {
          this.flag = false;
          this.getUsers();
          console.log(res);
          this.$message({
          message: res.msg,
          type: 'success'
        });
        });
      }else if(this.title == "编辑用户"){
        putRequest("/user/users",this.userForm).then(res => {
          this.flag = false;
          this.getUsers();
          this.$message({
            type: "success",
            message: res.msg
          })
        })
      }

    },
    getUsers() {
      this.loading = true;
      getRequest("/user/users",this.queryParams).then(res => {
        this.userList = res.rows;
        this.total = res.total;
        this.loading = false;
      });
    },
    handleSelectionChange(val) {
      this.deleteUsers = val;
    },
    handleEdit(index, row) {
      this.clearForm();
      this.flag = true;
      this.title = "编辑用户";
      getRequest("/user/users/"+row.userTel).then(res => {
        this.userForm = res.data;
      })
      //这里通过userTel去查询信息
    },

    editUser(formName) {
      var _this = this;
      this.$refs[formName].validate(valid => {
        if (valid) {
          //验证通过，这时将验证通过的信息传给后台
          _this.editUserDiaLog = false;
          //1.将整个用户信息传递给后台
          //判断用户数据是否发生了改变
          putRequest(
            "/user/users?oldUserTel=" + _this.oldUserTel,
            _this.editUserForm
          ).then(
            resp => {
              //2.根据后台返回的信息进行输出
              if (resp.data.statusCode == 200) {
                _this.$message({
                  message: resp.data.msg,
                  type: "success"
                });
                //刷新页面
                window.eventBus.$emit("userManage");
              } else if (resp.data.statusCode == 400) {
                _this.$message.error(resp.data.msg);
                window.eventBus.$emit("userManage");
              }
            },
            () => {
              _this.$message.error("网络出错");
            }
          );
          //3.刷新表格
        } else {
          return false;
        }
      });
    },
    handleDelete(index, row) {
      this.$confirm("此操作将永久删除该用户, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
      .then(() => {
        deleteRequest("/user/users/" + row.userTel).then(
          res => {
            this.getUsers();
            this.$message({
              type: "success",
              message: res.msg
            })
          }
        );
      })
      .catch(() => {
        this.$message({
          type: "info",
          message: "已取消删除"
        });
      });
    },
    // eslint-disable-next-line
    isAdmin(row, column, cellValue, index) {
      if (cellValue == "1") {
        return "管理员";
      } else if (cellValue == "0") {
        return "普通用户";
      } else {
        return "无";
      }
    },
    handleDeleteUsers() {
      this.$confirm("此操作将永久删除所选用户, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
      .then(() => {
        let userTels = this.deleteUsers.map(item => item.userTel).join();
        getRequest("/user/deleteUserList", { userTels: userTels }).then(
          (res) => {
            this.getUsers();
            this.$message({
              type: "success",
              message: res.msg
            });
          }
        );
      })
      .catch(() => {
        this.$message({
          type: "info",
          message: "已取消删除"
        });
      });
    },
    clearForm(){
      this.userForm = {
        userName: "",
        userTel: "",
        isAdmin: "",
      }
    }
  }
};
</script>

<style>
.el-pagination {
  margin-top: 2px;
}
</style>
