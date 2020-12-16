package com.bear.bearspringboot.entity;

import lombok.AllArgsConstructor;
import lombok.Data;


public class RespBean {

    private String msg;
    private Integer statusCode;

    public RespBean(String msg, Integer statusCode) {
        this.msg = msg;
        this.statusCode = statusCode;
    }
    public RespBean(){}

    @Override
    public String toString() {
        return "RespBean{" +
                "msg='" + msg + '\'' +
                ", statusCode=" + statusCode +
                '}';
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    public Integer getStatusCode() {
        return statusCode;
    }

    public void setStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
    }
}
