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
    private String userTel;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Plan plan = (Plan) o;

        if (planId != null ? !planId.equals(plan.planId) : plan.planId != null) return false;
        if (planName != null ? !planName.equals(plan.planName) : plan.planName != null) return false;
        if (startTime != null ? !startTime.equals(plan.startTime) : plan.startTime != null) return false;
        if (endTime != null ? !endTime.equals(plan.endTime) : plan.endTime != null) return false;
        return userTel != null ? userTel.equals(plan.userTel) : plan.userTel == null;
    }

    @Override
    public int hashCode() {
        int result = planId != null ? planId.hashCode() : 0;
        result = 31 * result + (planName != null ? planName.hashCode() : 0);
        result = 31 * result + (startTime != null ? startTime.hashCode() : 0);
        result = 31 * result + (endTime != null ? endTime.hashCode() : 0);
        result = 31 * result + (userTel != null ? userTel.hashCode() : 0);
        return result;
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

    public String getUserTel() {
        return userTel;
    }

    public void setUserTel(String userTel) {
        this.userTel = userTel;
    }

    public Plan() {
    }

    public Plan(Integer planId, String planName, Date startTime, Date endTime, String userTel) {
        this.planId = planId;
        this.planName = planName;
        this.startTime = startTime;
        this.endTime = endTime;
        this.userTel = userTel;
    }
}
