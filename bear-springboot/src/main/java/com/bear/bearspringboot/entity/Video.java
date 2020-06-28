package com.bear.bearspringboot.entity;


import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import java.util.Date;


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

    public Video(String title, String userTel, String url, String lat, String lng, Date startTime, Date endTime, int flag, String videoUrl, int videoId, User user) {
        this.title = title;
        this.userTel = userTel;
        this.url = url;
        this.lat = lat;
        this.lng = lng;
        this.startTime = startTime;
        this.endTime = endTime;
        this.flag = flag;
        this.videoUrl = videoUrl;
        this.videoId = videoId;
        this.user = user;
    }

    @Override
    public String toString() {
        return "Video{" +
                "title='" + title + '\'' +
                ", userTel='" + userTel + '\'' +
                ", url='" + url + '\'' +
                ", lat='" + lat + '\'' +
                ", lng='" + lng + '\'' +
                ", startTime=" + startTime +
                ", endTime=" + endTime +
                ", flag=" + flag +
                ", videoUrl='" + videoUrl + '\'' +
                ", videoId=" + videoId +
                ", user=" + user +
                '}';
    }

    public Video(){}
    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getUserTel() {
        return userTel;
    }

    public void setUserTel(String userTel) {
        this.userTel = userTel;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getLat() {
        return lat;
    }

    public void setLat(String lat) {
        this.lat = lat;
    }

    public String getLng() {
        return lng;
    }

    public void setLng(String lng) {
        this.lng = lng;
    }

    public Date getStartTime() {
        return startTime;
    }

    public void setStartTime(Date startTime) {
        this.startTime = startTime;
    }

    public Date getEndTime() {
        return endTime;
    }

    public void setEndTime(Date endTime) {
        this.endTime = endTime;
    }

    public int getFlag() {
        return flag;
    }

    public void setFlag(int flag) {
        this.flag = flag;
    }

    public String getVideoUrl() {
        return videoUrl;
    }

    public void setVideoUrl(String videoUrl) {
        this.videoUrl = videoUrl;
    }

    public int getVideoId() {
        return videoId;
    }

    public void setVideoId(int videoId) {
        this.videoId = videoId;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
