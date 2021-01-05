package com.bear.bearspringboot.entity.vo;

/**
 * @author bear
 * @date 2021-01-05 14:35
 */
public class ReviewerVo {

    private Integer id;
    private Integer planId;
    private String userTel;
    private String planName;

    public ReviewerVo() {
    }

    public ReviewerVo(Integer id, Integer planId, String userTel, String planName) {
        this.id = id;
        this.planId = planId;
        this.userTel = userTel;
        this.planName = planName;
    }

    @Override
    public String toString() {
        return "ReviewerVo{" +
                "id=" + id +
                ", planId=" + planId +
                ", userTel='" + userTel + '\'' +
                ", planName='" + planName + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        ReviewerVo that = (ReviewerVo) o;

        if (id != null ? !id.equals(that.id) : that.id != null) return false;
        if (planId != null ? !planId.equals(that.planId) : that.planId != null) return false;
        if (userTel != null ? !userTel.equals(that.userTel) : that.userTel != null) return false;
        return planName != null ? planName.equals(that.planName) : that.planName == null;
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (planId != null ? planId.hashCode() : 0);
        result = 31 * result + (userTel != null ? userTel.hashCode() : 0);
        result = 31 * result + (planName != null ? planName.hashCode() : 0);
        return result;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getPlanId() {
        return planId;
    }

    public void setPlanId(Integer planId) {
        this.planId = planId;
    }

    public String getUserTel() {
        return userTel;
    }

    public void setUserTel(String userTel) {
        this.userTel = userTel;
    }

    public String getPlanName() {
        return planName;
    }

    public void setPlanName(String planName) {
        this.planName = planName;
    }
}
