package com.bear.bearspringboot.entity;

import java.util.Date;

public class Score {

    private Integer scoreId;
    private Integer planId;
    private Integer indexId;
    private String score;
    private String userTel;
    private Date reviewTime;

    public Score(Integer scoreId, Integer planId, Integer indexId, String score, String userTel, Date reviewTime) {
        this.scoreId = scoreId;
        this.planId = planId;
        this.indexId = indexId;
        this.score = score;
        this.userTel = userTel;
        this.reviewTime = reviewTime;
    }

    public Score() {
    }

    @Override
    public String toString() {
        return "Score{" +
                "scoreId=" + scoreId +
                ", planId=" + planId +
                ", indexId=" + indexId +
                ", score='" + score + '\'' +
                ", userTel='" + userTel + '\'' +
                ", time=" + reviewTime +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Score score1 = (Score) o;

        if (scoreId != null ? !scoreId.equals(score1.scoreId) : score1.scoreId != null) return false;
        if (planId != null ? !planId.equals(score1.planId) : score1.planId != null) return false;
        if (indexId != null ? !indexId.equals(score1.indexId) : score1.indexId != null) return false;
        if (score != null ? !score.equals(score1.score) : score1.score != null) return false;
        if (userTel != null ? !userTel.equals(score1.userTel) : score1.userTel != null) return false;
        return reviewTime != null ? reviewTime.equals(score1.reviewTime) : score1.reviewTime == null;
    }

    @Override
    public int hashCode() {
        int result = scoreId != null ? scoreId.hashCode() : 0;
        result = 31 * result + (planId != null ? planId.hashCode() : 0);
        result = 31 * result + (indexId != null ? indexId.hashCode() : 0);
        result = 31 * result + (score != null ? score.hashCode() : 0);
        result = 31 * result + (userTel != null ? userTel.hashCode() : 0);
        result = 31 * result + (reviewTime != null ? reviewTime.hashCode() : 0);
        return result;
    }

    public Integer getScoreId() {
        return scoreId;
    }

    public void setScoreId(Integer scoreId) {
        this.scoreId = scoreId;
    }

    public Integer getPlanId() {
        return planId;
    }

    public void setPlanId(Integer planId) {
        this.planId = planId;
    }

    public Integer getIndexId() {
        return indexId;
    }

    public void setIndexId(Integer indexId) {
        this.indexId = indexId;
    }

    public String getScore() {
        return score;
    }

    public void setScore(String score) {
        this.score = score;
    }

    public String getUserTel() {
        return userTel;
    }

    public void setUserTel(String userTel) {
        this.userTel = userTel;
    }

    public Date getReviewTime() {
        return reviewTime;
    }

    public void setReviewTime(Date reviewTime) {
        this.reviewTime = reviewTime;
    }
}
