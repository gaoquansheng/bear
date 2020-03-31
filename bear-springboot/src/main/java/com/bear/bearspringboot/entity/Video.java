package com.bear.bearspringboot.entity;

import lombok.Data;

import java.util.Date;

@Data
public class Video {

    //直播间标题
    private String title;
    private String applicationName;
    private float lat;
    private float lng;
    private Date startTime;
}
