package com.bear.bearspringboot.entity;

public class PlanScore {

    private Integer scoreId;
    private Integer planId;
    private Integer indexId;
    private String result;
    private Integer judgeId;

    public PlanScore(Integer scoreId, Integer planId, Integer indexId, String result, Integer judgeId) {
        this.scoreId = scoreId;
        this.planId = planId;
        this.indexId = indexId;
        this.result = result;
        this.judgeId = judgeId;
    }

    public PlanScore() {
    }

    @Override
    public String toString() {
        return "PlanScore{" +
                "scoreId=" + scoreId +
                ", planId=" + planId +
                ", indexId=" + indexId +
                ", result='" + result + '\'' +
                ", judgeId=" + judgeId +
                '}';
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

    public String getResult() {
        return result;
    }

    public void setResult(String result) {
        this.result = result;
    }

    public Integer getJudgeId() {
        return judgeId;
    }

    public void setJudgeId(Integer judgeId) {
        this.judgeId = judgeId;
    }
}
