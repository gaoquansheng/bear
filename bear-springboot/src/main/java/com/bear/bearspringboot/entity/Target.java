package com.bear.bearspringboot.entity;

import java.util.Objects;

public class Target {

    private Integer targetId;
    private String targetName;
    private Boolean enabled;
    private Integer minScore;
    private Integer maxScore;
    private String description;
    private Integer planId;
    private String targetType;
    private String options;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Target target = (Target) o;
        return Objects.equals(targetId, target.targetId) &&
                Objects.equals(targetName, target.targetName) &&
                Objects.equals(enabled, target.enabled) &&
                Objects.equals(minScore, target.minScore) &&
                Objects.equals(maxScore, target.maxScore) &&
                Objects.equals(description, target.description) &&
                Objects.equals(planId, target.planId) &&
                Objects.equals(targetType, target.targetType) &&
                Objects.equals(options, target.options);
    }

    @Override
    public int hashCode() {
        return Objects.hash(targetId, targetName, enabled, minScore, maxScore, description, planId, targetType, options);
    }

    @Override
    public String toString() {
        return "Target{" +
                "targetId=" + targetId +
                ", targetName='" + targetName + '\'' +
                ", enabled=" + enabled +
                ", minScore=" + minScore +
                ", maxScore=" + maxScore +
                ", description='" + description + '\'' +
                ", planId=" + planId +
                ", targetType='" + targetType + '\'' +
                ", options='" + options + '\'' +
                '}';
    }

    public Target() {
    }

    public Target(Integer targetId, String targetName, Boolean enabled, Integer minScore, Integer maxScore, String description, Integer planId, String targetType, String options) {
        this.targetId = targetId;
        this.targetName = targetName;
        this.enabled = enabled;
        this.minScore = minScore;
        this.maxScore = maxScore;
        this.description = description;
        this.planId = planId;
        this.targetType = targetType;
        this.options = options;
    }

    public Integer getTargetId() {
        return targetId;
    }

    public void setTargetId(Integer targetId) {
        this.targetId = targetId;
    }

    public String getTargetName() {
        return targetName;
    }

    public void setTargetName(String targetName) {
        this.targetName = targetName;
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

    public String getTargetType() {
        return targetType;
    }

    public void setTargetType(String targetType) {
        this.targetType = targetType;
    }

    public String getOptions() {
        return options;
    }

    public void setOptions(String options) {
        this.options = options;
    }
}
