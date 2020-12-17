package com.bear.bearspringboot.entity;

public class Index {

    private Integer indexId;
    private String indexName;
    private Boolean enabled;
    private Integer minScore;
    private Integer maxScore;
    private String description;
    private Integer planId;
    private String indexType;
    private String options;

    public Index(Integer indexId, String indexName, Boolean enabled, Integer minScore, Integer maxScore, String description, Integer planId, String indexType, String options) {
        this.indexId = indexId;
        this.indexName = indexName;
        this.enabled = enabled;
        this.minScore = minScore;
        this.maxScore = maxScore;
        this.description = description;
        this.planId = planId;
        this.indexType = indexType;
        this.options = options;
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
                ", indexType='" + indexType + '\'' +
                ", options='" + options + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Index index = (Index) o;

        if (indexId != null ? !indexId.equals(index.indexId) : index.indexId != null) return false;
        if (indexName != null ? !indexName.equals(index.indexName) : index.indexName != null) return false;
        if (enabled != null ? !enabled.equals(index.enabled) : index.enabled != null) return false;
        if (minScore != null ? !minScore.equals(index.minScore) : index.minScore != null) return false;
        if (maxScore != null ? !maxScore.equals(index.maxScore) : index.maxScore != null) return false;
        if (description != null ? !description.equals(index.description) : index.description != null) return false;
        if (planId != null ? !planId.equals(index.planId) : index.planId != null) return false;
        if (indexType != null ? !indexType.equals(index.indexType) : index.indexType != null) return false;
        return options != null ? options.equals(index.options) : index.options == null;
    }

    @Override
    public int hashCode() {
        int result = indexId != null ? indexId.hashCode() : 0;
        result = 31 * result + (indexName != null ? indexName.hashCode() : 0);
        result = 31 * result + (enabled != null ? enabled.hashCode() : 0);
        result = 31 * result + (minScore != null ? minScore.hashCode() : 0);
        result = 31 * result + (maxScore != null ? maxScore.hashCode() : 0);
        result = 31 * result + (description != null ? description.hashCode() : 0);
        result = 31 * result + (planId != null ? planId.hashCode() : 0);
        result = 31 * result + (indexType != null ? indexType.hashCode() : 0);
        result = 31 * result + (options != null ? options.hashCode() : 0);
        return result;
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

    public String getIndexType() {
        return indexType;
    }

    public void setIndexType(String indexType) {
        this.indexType = indexType;
    }

    public String getOptions() {
        return options;
    }

    public void setOptions(String options) {
        this.options = options;
    }
}
