package com.bear.bearspringboot.entity;

import lombok.AllArgsConstructor;
import lombok.Data;


public class RespBean {

    private String msg;
    private int statusCode;

    public RespBean(String msg, int statusCode) {
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

    public int getStatusCode() {
        return statusCode;
    }

    public void setStatusCode(int statusCode) {
        this.statusCode = statusCode;
    }
}
