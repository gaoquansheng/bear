package com.bear.bearspringboot.entity;

import com.fasterxml.jackson.annotation.JsonFormat;


import java.util.Date;

public class Message {

    private String sendUserTel;
    private String sendUserName;
    private String message;
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss",timezone="GMT+8")
    private Date sendTime;
    private String userTels;

    public Message() {
    }

    public Message(String sendUserTel, String sendUserName, String message, Date sendTime, String userTels) {
        this.sendUserTel = sendUserTel;
        this.sendUserName = sendUserName;
        this.message = message;
        this.sendTime = sendTime;
        this.userTels = userTels;
    }

    @Override
    public String toString() {
        return "Message{" +
                "sendUserTel='" + sendUserTel + '\'' +
                ", sendUserName='" + sendUserName + '\'' +
                ", message='" + message + '\'' +
                ", sendTime=" + sendTime +
                ", userTels='" + userTels + '\'' +
                '}';
    }

    public String getSendUserTel() {
        return sendUserTel;
    }

    public void setSendUserTel(String sendUserTel) {
        this.sendUserTel = sendUserTel;
    }

    public String getSendUserName() {
        return sendUserName;
    }

    public void setSendUserName(String sendUserName) {
        this.sendUserName = sendUserName;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Date getSendTime() {
        return sendTime;
    }

    public void setSendTime(Date sendTime) {
        this.sendTime = sendTime;
    }

    public String getUserTels() {
        return userTels;
    }

    public void setUserTels(String userTels) {
        this.userTels = userTels;
    }
}
