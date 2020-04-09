/* eslint-disable */
<template>
  <div>
    <el-row >
      <el-col :span="3">
        <el-button type="success" @click="handleAddUser">添加用户</el-button>
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
      :data="tableData"
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
      <el-table-column>
        <template slot="header">
          <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
        </template>
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

    <el-dialog title="新增用户" :visible.sync="addUserDiaLog" width="30%">
      <el-form
        :model="addUserForm"
        status-icon
        :rules="addUserDiaLogRules"
        ref="addUserForm"
      >
        <el-form-item label="用户权限">
          <el-select placeholder="请选择用户身份" v-model="addUserForm.isAdmin">
            <el-option label="普通用户" value="0"></el-option>
            <el-option label="管理员用户" value="1"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="用户名" prop="userName">
          <el-input
            v-model="addUserForm.userName"
            :disabled="addUserForm.isAdmin == ''"
          ></el-input>
        </el-form-item>
        <!-- 这为当上面选择为管理员用户的时候，不绑定prop属性，不然validate不通过 -->
        <el-form-item
          label="手机号"
          :prop="addUserForm.isAdmin == 1 ? '' : 'userTel'"
          v-show="addUserForm.isAdmin == 0"
        >
          <el-input
            v-model="addUserForm.userTel"
            v-show="addUserForm.isAdmin == 0"
            :disabled="addUserForm.isAdmin == ''"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="userPwd">
          <el-input
            v-model="addUserForm.userPwd"
            type="password"
            :disabled="addUserForm.isAdmin == ''"
          ></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkUserPwd">
          <el-input
            v-model="addUserForm.checkUserPwd"
            type="password"
            :disabled="addUserForm.isAdmin == ''"
          ></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addUserDiaLog = false">取 消</el-button>
        <el-button type="primary" @click="addUser('addUserForm')"
          >确 定</el-button
        >
      </span>
    </el-dialog>

    <el-dialog title="编辑用户" :visible.sync="editUserDiaLog" width="50%">
      <el-form
        :inline="true"
        :model="editUserForm"
        :rules="editUserDiaLogRules"
        ref="editUserForm"
      >
        <el-form-item label="用户名" prop="userName">
          <el-input
            placeholder="用户名"
            v-model="editUserForm.userName"
          ></el-input>
        </el-form-item>
        <el-form-item label="手机号" v-show="userTelShow"  :prop="userTelShow?'userTel':''">
          <el-input
            placeholder="手机号"
            v-model="editUserForm.userTel"
            v-show="userTelShow"
          ></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editUserDiaLog = false">取 消</el-button>
        <el-button type="primary" @click="editUser('editUserForm')"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
// import{postRequest} from '../../utils/api'
import { getRequest, postRequest } from "../../utils/api";
import { deleteRequest } from "../../utils/api";
import { putRequest } from "../../utils/api";
export default {
  data() {
    let checkUserName = (rule, value, callback) => {
      console.log("这里是checkUserName" + value);
      let reg = /[0-9a-zA-Z]{2,10}/;
      if (!reg.test(value)) {
        callback(new Error("用户名必须由2-10位数字和字母组合"));
      } else {
        callback();
      }
    };
    let checkUserTel = (rule, value, callback) => {
      console.log("这里是手机号验证");
      let reg = /^1[3-578]\d{9}$/;
      if (!reg.test(value)) {
        callback(new Error("请输入正确格式的手机号"));
      } else {
        callback();
      }
    };
    let checkUserPwd = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.addUserForm.userPwd !== "") {
          this.$refs.addUserForm.validateField("checkUserPwd");
        }
        callback();
      }
    };
    let validateUserPwd = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.addUserForm.userPwd) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      search: "",
      deleteUsers: [],
      editUserDiaLog: false,
      addUserDiaLog: false,
      editUserForm: "",
      userTelShow: false,
      addUserForm: {
        userName: "",
        userTel: "",
        isAdmin: "",
        userPwd: "",
        checkUserPwd: ""
      },
      addUserDiaLogRules: {
        userName: [{ validator: checkUserName, trigger: "blur" }],
        userTel: [{ validator: checkUserTel, trigger: "blur" }],
        userPwd: [{ validator: checkUserPwd, trigger: "blur" }],
        checkUserPwd: [{ validator: validateUserPwd, trigger: "blur" }]
      },
      editUserDiaLogRules: {
        userName: [{ validator: checkUserName, trigger: "change" }],
        userTel: [
          // { required: true, message: '请输入用户手机号', trigger: 'blur' }
          { validator: checkUserTel, trigger: "change" }
        ]
      },
      // 返回对象数组
      tableData: []
    };
  },
  methods: {
    handleSelectionChange(val) {
      this.deleteUsers = val;
    },
    handleEdit(index, row) {
      this.editUserDiaLog = true;
      this.editUserForm = row;
      console.log(this.editUserForm);
      this.userTelShow = this.editUserForm.isAdmin == 0? true:false;
    },
    handleAddUser() {
      this.addUserDiaLog = true;
    },
    addUser(formName) {
      var _this = this;
      this.$refs[formName].validate(valid => {
        if (valid) {
          //验证通过，这时将验证通过的信息传给后台
          _this.addUserDiaLog = false;
          // 1.将整个用户信息传递给后台
          postRequest("http://localhost:8080/web/users", _this.addUserForm).then(
            resp => {
              //2.根据后台返回的信息进行输出
              if (resp.data.statusCode == 200) {
                _this.$message({
                  message: resp.data.msg,
                  type: "success"
                });
                //将弹出框的信息清空
                _this.addUserForm = {
                  userName: "",
                  userTel: "",
                  isAdmin: "",
                  userPwd: "",
                  checkUserPwd: ""
                };
                //刷新页面
                window.eventBus.$emit("userManage","test")
              } else if (resp.data.statusCode == 400) {
                _this.$message.error(resp.data.msg);
              }
            },
            resp => {
              console.log(resp);
              this.$message.error("网络出错");
            }
          );
          // 3.刷新表格
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    editUser(formName) {
      var _this = this;
      this.$refs[formName].validate(valid => {
        if (valid) {
          //验证通过，这时将验证通过的信息传给后台
          _this.editUserDiaLog = false;
          //1.将整个用户信息传递给后台
          //判断用户数据是否发生了改变
          putRequest("http://localhost:8080/web/users", _this.editUserForm).then(
            resp => {
              //2.根据后台返回的信息进行输出
              if (resp.data.statusCode == 200) {
                _this.$message({
                  message: resp.data.msg,
                  type: "success"
                });
                //刷新页面
                window.eventBus.$emit("userManage","test")
              } else if (resp.data.statusCode == 400) {
                _this.$message.error(resp.data.msg);
              }
            },
            resp => {
              console.log(resp);
              _this.$message.error("网络出错");
            }
          );
          //3.刷新表格
        } else {
          console.log("error submit!!");
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
          deleteRequest("http://localhost:8080/web/users/" + row.userId).then(
            resp => {
              if (resp.data.statusCode == 200) {
                _this.$message.success(resp.data.msg);
                //刷新页面
                window.eventBus.$emit("userManage","test")
              } else {
                _this.$message.error(resp.data.msg);
              }
              //3.删除成功之后更新页面
            },
            resp => {
              console.log(resp);
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
      console.log(row,column,index);
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
          let ids = _this.deleteUsers.map(item => item.userId).join();
          getRequest("http://localhost:8080/web/deleteUserList", { ids: ids }).then(
            resp => {
              console.log(resp);
              _this.$message({
                type: "success",
                message: "删除成功!"
              });
              //3.
              window.eventBus.$emit("userManage","test");
            },
            resp => {
              console.log(resp);
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
    loadingUsers(){
      var _this = this;
      getRequest("http://localhost:8080/web/users").then(
      resp => {
        console.log(resp);
        _this.tableData = resp.data;
      },
      resp => {
          console.log(resp);
      })
      }
  },
  mounted() {
    var _this = this;
    this.loadingUsers();
    window.eventBus.$on("userManage",(data) =>{
      console.log("这里是接受事件"+data);
      _this.loadingUsers()
    });
  }
}
</script>

<style></style>
