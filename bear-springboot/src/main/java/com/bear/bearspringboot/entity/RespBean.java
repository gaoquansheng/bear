package com.bear.bearspringboot.entity;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class RespBean {

    private String msg;
    private int statusCode;
}
