package com.bear.bearspringboot.entity;


import lombok.Builder;
import lombok.Data;
import org.springframework.beans.factory.annotation.Value;


public class User {

    private String userName;
    //频道名默认使用userTel
    private String userTel;
    private String userPwd;
    private Integer isAdmin;

    public User(String userName, String userTel, String userPwd, Integer isAdmin) {
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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        User user = (User) o;

        if (userName != null ? !userName.equals(user.userName) : user.userName != null) return false;
        if (userTel != null ? !userTel.equals(user.userTel) : user.userTel != null) return false;
        if (userPwd != null ? !userPwd.equals(user.userPwd) : user.userPwd != null) return false;
        return isAdmin != null ? isAdmin.equals(user.isAdmin) : user.isAdmin == null;
    }

    @Override
    public int hashCode() {
        int result = userName != null ? userName.hashCode() : 0;
        result = 31 * result + (userTel != null ? userTel.hashCode() : 0);
        result = 31 * result + (userPwd != null ? userPwd.hashCode() : 0);
        result = 31 * result + (isAdmin != null ? isAdmin.hashCode() : 0);
        return result;
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

    public Integer getIsAdmin() {
        return isAdmin;
    }

    public void setIsAdmin(Integer isAdmin) {
        this.isAdmin = isAdmin;
    }
}
