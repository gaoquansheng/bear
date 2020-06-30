import axios from "axios";

let base = "http://localhost:8080";
// let base = "http://"

axios.defaults.withCredentials = true; //设置跨域访问cookie和session不失效
export const postRequest = (url, params) => {
  return axios({
    method: "post",
    url: `${base}${url}`,
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
  return axios({
    method: "post",
    url: `${base}${url}`,
    data: params,
    headers: {
      "Content-Type": "multipart/form-data"
    }
  });
};
export const putRequest = (url, params) => {
  return axios({
    method: "put",
    url: `${base}${url}`,
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
  return axios({
    method: "delete",
    url: `${base}${url}`
  });
};
export const getRequest = (url, params) => {
  return axios({
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
    url: `${base}${url}`
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
