package com.bear.bearspringboot.entity;

public class Index {

    private Integer indexId;
    private String indexName;
    private Boolean enabled;
    private Integer minScore;
    private Integer maxScore;
    private String description;
    private Integer planId;

    public Index(Integer indexId, String indexName, Boolean enabled, Integer minScore, Integer maxScore, String description, Integer planId) {
        this.indexId = indexId;
        this.indexName = indexName;
        this.enabled = enabled;
        this.minScore = minScore;
        this.maxScore = maxScore;
        this.description = description;
        this.planId = planId;
    }

    public Index() {
    }

    @Override
    public String toString() {
        return "Index{" +
                "indexId=" + indexId +
                ", indexName='" + indexName + '\'' +
                ", enabled=" + enabled +
                ", minScore=" + minScore +
                ", maxScore=" + maxScore +
                ", description='" + description + '\'' +
                ", planId=" + planId +
                '}';
    }

    public Integer getIndexId() {
        return indexId;
    }

    public void setIndexId(Integer indexId) {
        this.indexId = indexId;
    }

    public String getIndexName() {
        return indexName;
    }

    public void setIndexName(String indexName) {
        this.indexName = indexName;
    }

    public Boolean getEnabled() {
        return enabled;
    }

    public void setEnabled(Boolean enabled) {
        this.enabled = enabled;
    }

    public Integer getMinScore() {
        return minScore;
    }

    public void setMinScore(Integer minScore) {
        this.minScore = minScore;
    }

    public Integer getMaxScore() {
        return maxScore;
    }

    public void setMaxScore(Integer maxScore) {
        this.maxScore = maxScore;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Integer getPlanId() {
        return planId;
    }

    public void setPlanId(Integer planId) {
        this.planId = planId;
    }
}
