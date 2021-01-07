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
          <el-select placeholder="请选择用户身份" v-model="userForm.isAdmin">
            <el-option v-for="item in isAdminList" :label="item.label" :value="item.value" :key="item.value"></el-option>           
          </el-select>
        </el-form-item>
        <el-form-item label="姓名" label-width="80px" prop="userName">
          <el-input
            v-model="userForm.userName"
            :disabled="userForm.isAdmin == ''"
          ></el-input>
        </el-form-item>
        <el-form-item label="手机号" label-width="80px" prop="userTel">
          <el-input
            v-model="userForm.userTel"
            :disabled="userForm.isAdmin == ''"
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
    // let checkUserName = (rule, value, callback) => {
    //   let reg = /^[\u4E00-\u9FA5]{2,4}$/;
    //   if (!reg.test(value)) {
    //     callback(new Error("姓名格式不正确"));
    //   } else {
    //     callback();
    //   }
    // };
    // let checkUserTel = (rule, value, callback) => {
    //   let reg = /^1[3-578]\d{9}$/;
    //   if (!reg.test(value)) {
    //     callback(new Error("请输入正确格式的手机号"));
    //   } else {
    //     callback();
    //   }
    // };
    // let checkUserPwd = (rule, value, callback) => {
    //   if (value === "") {
    //     callback(new Error("请输入密码"));
    //   } else {
    //     if (this.userForm.userPwd !== "") {
    //       this.$refs.userForm.validateField("checkUserPwd");
    //     }
    //     callback();
    //   }
    // };
    // let validateUserPwd = (rule, value, callback) => {
    //   if (value === "") {
    //     callback(new Error("请再次输入密码"));
    //   } else if (value !== this.userForm.userPwd) {
    //     callback(new Error("两次输入密码不一致!"));
    //   } else {
    //     callback();
    //   }
    // };
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
      // userFormRules: {
      //   userName: [{ validator: checkUserName, trigger: "blur" }],
      //   userTel: [{ validator: checkUserTel, trigger: "blur" }],
      //   userPwd: [{ validator: checkUserPwd, trigger: "blur" }],
      //   checkUserPwd: [{ validator: validateUserPwd, trigger: "blur" }]
      // },
      // 返回对象数组
      userList: [],
      loading: false,
      total: 0,
      title: "",
      isAdminList: [
        {
          label: "普通用户",
          value: "0"
        },
        {
          label: "管理员",
          value: "1"
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
      postRequest("/user/users", this.userForm).then(res => {
        console.log(res);
      });
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
      this.editUserDiaLog = true;
      this.editUserForm = row;
      this.oldUserTel = row.userTel;
      // this.userTelShow = this.editUserForm.isAdmin == 0? true:false;
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
      var _this = this;
      //1.弹出是否确定删除此用户的弹框
      this.$confirm("此操作将永久删除该用户, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          //2.确定则通过用户id删除
          deleteRequest("/user/users/" + row.userTel).then(
            resp => {
              if (resp.data.statusCode == 200) {
                _this.$message.success(resp.data.msg);
                //刷新页面
                window.eventBus.$emit("userManage");
              } else {
                _this.$message.error(resp.data.msg);
              }
              //3.删除成功之后更新页面
            },
            () => {
              _this.$message.error("网络出错");
            }
          );
        })
        .catch(() => {
          _this.$message({
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
      var _this = this;
      //1.弹出是否确定删除此用户的弹框
      this.$confirm("此操作将永久删除所选用户, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          //2.
          let userTels = _this.deleteUsers.map(item => item.userTel).join();
          getRequest("/user/deleteUserList", { userTels: userTels }).then(
            () => {
              _this.$message({
                type: "success",
                message: "删除成功!"
              });
              //3.
              window.eventBus.$emit("userManage");
            },
            () => {
              _this.$message.error("网络出错");
            }
          );
        })
        .catch(() => {
          _this.$message({
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
