package com.bear.bearspringboot.entity;


import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import java.util.Date;


public class Video {

    //直播间标题
    private String title;
    private String userTel;
    private String url;
    private Double lat;
    private Double lng;
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss",timezone="GMT+8")
    private Date startTime;
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss",timezone="GMT+8")
    private Date endTime;
    private Integer flag;
    private String videoUrl;
    private Integer videoId;
    private User user;
    private Integer planId;

    public Video(String title, String userTel, String url, Double lat, Double lng, Date startTime, Date endTime, Integer flag, String videoUrl, Integer videoId, User user, Integer planId) {
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
        this.planId = planId;
    }

    public Video() {
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
                ", planId=" + planId +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Video video = (Video) o;

        if (title != null ? !title.equals(video.title) : video.title != null) return false;
        if (userTel != null ? !userTel.equals(video.userTel) : video.userTel != null) return false;
        if (url != null ? !url.equals(video.url) : video.url != null) return false;
        if (lat != null ? !lat.equals(video.lat) : video.lat != null) return false;
        if (lng != null ? !lng.equals(video.lng) : video.lng != null) return false;
        if (startTime != null ? !startTime.equals(video.startTime) : video.startTime != null) return false;
        if (endTime != null ? !endTime.equals(video.endTime) : video.endTime != null) return false;
        if (flag != null ? !flag.equals(video.flag) : video.flag != null) return false;
        if (videoUrl != null ? !videoUrl.equals(video.videoUrl) : video.videoUrl != null) return false;
        if (videoId != null ? !videoId.equals(video.videoId) : video.videoId != null) return false;
        if (user != null ? !user.equals(video.user) : video.user != null) return false;
        return planId != null ? planId.equals(video.planId) : video.planId == null;
    }

    @Override
    public int hashCode() {
        int result = title != null ? title.hashCode() : 0;
        result = 31 * result + (userTel != null ? userTel.hashCode() : 0);
        result = 31 * result + (url != null ? url.hashCode() : 0);
        result = 31 * result + (lat != null ? lat.hashCode() : 0);
        result = 31 * result + (lng != null ? lng.hashCode() : 0);
        result = 31 * result + (startTime != null ? startTime.hashCode() : 0);
        result = 31 * result + (endTime != null ? endTime.hashCode() : 0);
        result = 31 * result + (flag != null ? flag.hashCode() : 0);
        result = 31 * result + (videoUrl != null ? videoUrl.hashCode() : 0);
        result = 31 * result + (videoId != null ? videoId.hashCode() : 0);
        result = 31 * result + (user != null ? user.hashCode() : 0);
        result = 31 * result + (planId != null ? planId.hashCode() : 0);
        return result;
    }

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

    public Double getLat() {
        return lat;
    }

    public void setLat(Double lat) {
        this.lat = lat;
    }

    public Double getLng() {
        return lng;
    }

    public void setLng(Double lng) {
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

    public Integer getFlag() {
        return flag;
    }

    public void setFlag(Integer flag) {
        this.flag = flag;
    }

    public String getVideoUrl() {
        return videoUrl;
    }

    public void setVideoUrl(String videoUrl) {
        this.videoUrl = videoUrl;
    }

    public Integer getVideoId() {
        return videoId;
    }

    public void setVideoId(Integer videoId) {
        this.videoId = videoId;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Integer getPlanId() {
        return planId;
    }

    public void setPlanId(Integer planId) {
        this.planId = planId;
    }
}
