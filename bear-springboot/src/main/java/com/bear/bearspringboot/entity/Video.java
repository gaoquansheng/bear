package com.bear.bearspringboot.entity;


import com.fasterxml.jackson.annotation.JsonFormat;
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
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss",timezone="GMT+8")
    private Date startTime;
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss",timezone="GMT+8")
    private Date endTime;
    private int flag;
    private String videoUrl;
    private int videoId;
    private User user;
}
