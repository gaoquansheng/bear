import request from "@/utils/api"

export function login(data){
  return request({
    url: "/web/login",
    method: "post",
    data
  })
}