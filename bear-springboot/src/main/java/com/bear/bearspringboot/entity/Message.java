package com.bear.bearspringboot.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import java.util.Date;
@Data
public class Message {

    private String sendUserTel;
    private String message;
    private String receivedUserTel;
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss",timezone="GMT+8")
    private Date sendTime;
}
