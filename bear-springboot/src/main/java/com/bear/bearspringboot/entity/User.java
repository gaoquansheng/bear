package com.bear.bearspringboot.entity;


import lombok.Builder;
import lombok.Data;
import org.springframework.beans.factory.annotation.Value;


public class User {

    private String userName;
    //频道名默认使用userTel
    private String userTel;
    private String userPwd;
    private int isAdmin;

    public User(String userName, String userTel, String userPwd, int isAdmin) {
        this.userName = userName;
        this.userTel = userTel;
        this.userPwd = userPwd;
        this.isAdmin = isAdmin;
    }
    public User(){
    };
    @Override
    public String toString() {
        return "User{" +
                "userName='" + userName + '\'' +
                ", userTel='" + userTel + '\'' +
                ", userPwd='" + userPwd + '\'' +
                ", isAdmin=" + isAdmin +
                '}';
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getUserTel() {
        return userTel;
    }

    public void setUserTel(String userTel) {
        this.userTel = userTel;
    }

    public String getUserPwd() {
        return userPwd;
    }

    public void setUserPwd(String userPwd) {
        this.userPwd = userPwd;
    }

    public int getIsAdmin() {
        return isAdmin;
    }

    public void setIsAdmin(int isAdmin) {
        this.isAdmin = isAdmin;
    }
}
