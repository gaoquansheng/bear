package com.bear.bearspringboot.entity;

import lombok.Data;

import java.util.Date;

@Data
public class Video {

    //直播间标题
    private String title;
    private String userTel;
    private String url;
    private String lat;
    private String lng;
    private Date startTime;
    private Date endTime;
    private int flag;
    private String videoUrl;
    private int videoId;
    private User user;
}
