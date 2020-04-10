package com.bear.bearspringboot.entity;

import lombok.Data;

import java.util.Date;

@Data
public class Video {

    //直播间标题
    private String title;
    private String userName;
    private String url;
    private float lat;
    private float lng;
    private Date startTime;
    private int flag;
    private String fileName;
}
