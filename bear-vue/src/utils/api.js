import axios from "axios";
import errorCode from "./errorCode"
import { Message } from 'element-ui';

let base = "http://localhost:8080";
// let base = "http://39.102.80.119:8080";

axios.defaults.withCredentials = true; //设置跨域访问cookie和session不失效

let service = axios.create({
  baseURL:base,
  timeout: 10000
})

service.interceptors.response.use(res => {
  console.log(res);
  const code = res.data.code || 200;
  const message = errorCode[code] || res.data.msg || errorCode["default"];
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
    console.log('err' + error)
    // this.$message({
    //   message: error.message,
    //   type: 'error',
    //   duration: 5 * 1000
    // })
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
