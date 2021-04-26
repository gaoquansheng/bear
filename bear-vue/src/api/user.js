import request from "@/utils/api"

export function login(data){
  return request({
    url: "/login",
    method: "post",
    data
  })
}