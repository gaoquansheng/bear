import axios from "axios";
import errorCode from "./errorCode"
import { MessageBox, Message } from 'element-ui'
import store from '@/store'


let base = process.env.VUE_APP_BASE_API;

axios.defaults.withCredentials = true; //设置跨域访问cookie和session不失效

let service = axios.create({
  baseURL:base,
  timeout: 10000
})

service.interceptors.response.use(res => {
  console.log(res);
  if(res.data == "9999"){
    console.log("失效了哈");
    MessageBox.confirm('用户已失效，请重新登录', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(() => {
      location.reload()
      // store.dispatch('resetUserInfo').then(() => {
      //   location.reload()
      // })
    })
    return Promise.reject()
  }
  const code = res.data.code || 200;
  const message = res.data.msg || errorCode[code] || errorCode["default"];
  if(code != 200){
    Message({
      type: "error",
      message: message
    })
    return Promise.reject(new Error(message))
  }else {
    return res.data;
  }
  },
  error => {


    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export const postRequest = (url, params) => {
  return service({
    method: "post",
    url: `${url}`,
    data: params,
    // transformRequest: [
    //   function(data) {
    //     // Do whatever you want to transform the data
    //     let ret = "";
    //     for (let it in data) {
    //       ret +=
    //         encodeURIComponent(it) + "=" + encodeURIComponent(data[it]) + "&";
    //     }
    //     return ret;
    //   }
    // ],
    headers: {
      "Content-Type": "application/json"
    }
  });
};
export const uploadFileRequest = (url, params) => {
  return service({
    method: "post",
    url: `${url}`,
    data: params,
    headers: {
      "Content-Type": "multipart/form-data"
    }
  });
};
export const putRequest = (url, params) => {
  return service({
    method: "put",
    url: `${url}`,
    data: params,
    // transformRequest: [
    //   function(data) {
    //     let ret = "";
    //     for (let it in data) {
    //       ret +=
    //         encodeURIComponent(it) + "=" + encodeURIComponent(data[it]) + "&";
    //     }
    //     return ret;
    //   }
    // ],
    headers: {
      "Content-Type": "application/json"
    }
  });
};
export const deleteRequest = url => {
  return service({
    method: "delete",
    url: `${url}`
  });
};
export const getRequest = (url, params) => {
  return service({
    method: "get",
    params: params,
    transformRequest: [
      function(data) {
        let ret = "";
        for (let it in data) {
          ret +=
            encodeURIComponent(it) + "=" + encodeURIComponent(data[it]) + "&";
        }
        return ret;
      }
    ],
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    url: `${url}`
  });
};

export const dateToString = () => {
  let date = new Date();
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  month = month > 9 ? month : ('0' + month);
  day = day > 9 ? day : ('0' + day);
  const dateTime = year + "-" + month + "-" + day + " ";
  return dateTime;
}
export default service;
