package com.bear.bearspringboot.entity;

import com.fasterxml.jackson.annotation.JsonFormat;

import java.util.Date;

public class Plan {

    private Integer planId;
    private String planName;
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss",timezone="GMT+8")
    private Date startTime;
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss",timezone="GMT+8")
    private Date endTime;

    public Plan(Integer planId, String planName, Date startTime, Date endTime) {
        this.planId = planId;
        this.planName = planName;
        this.startTime = startTime;
        this.endTime = endTime;
    }

    public Plan() {
    }

    @Override
    public String toString() {
        return "Plan{" +
                "planId=" + planId +
                ", planName='" + planName + '\'' +
                ", startTime=" + startTime +
                ", endTime=" + endTime +
                '}';
    }

    public Integer getPlanId() {
        return planId;
    }

    public void setPlanId(Integer planId) {
        this.planId = planId;
    }

    public String getPlanName() {
        return planName;
    }

    public void setPlanName(String planName) {
        this.planName = planName;
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
}
