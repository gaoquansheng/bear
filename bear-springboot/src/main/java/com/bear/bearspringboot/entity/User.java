package com.bear.bearspringboot.entity;


import lombok.Builder;
import lombok.Data;
import org.springframework.beans.factory.annotation.Value;

@Data
public class User {

    private String userName;
    //频道名默认使用userTel
    private String userTel;
    private String userPwd;
    private int isAdmin;
//    频道名
//    private int userId;

}
