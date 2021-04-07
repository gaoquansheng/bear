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
    private String userTel;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Target target = (Target) o;

        if (targetId != null ? !targetId.equals(target.targetId) : target.targetId != null) return false;
        if (targetName != null ? !targetName.equals(target.targetName) : target.targetName != null) return false;
        if (enabled != null ? !enabled.equals(target.enabled) : target.enabled != null) return false;
        if (minScore != null ? !minScore.equals(target.minScore) : target.minScore != null) return false;
        if (maxScore != null ? !maxScore.equals(target.maxScore) : target.maxScore != null) return false;
        if (description != null ? !description.equals(target.description) : target.description != null) return false;
        if (planId != null ? !planId.equals(target.planId) : target.planId != null) return false;
        if (targetType != null ? !targetType.equals(target.targetType) : target.targetType != null) return false;
        if (options != null ? !options.equals(target.options) : target.options != null) return false;
        return userTel != null ? userTel.equals(target.userTel) : target.userTel == null;
    }

    @Override
    public int hashCode() {
        int result = targetId != null ? targetId.hashCode() : 0;
        result = 31 * result + (targetName != null ? targetName.hashCode() : 0);
        result = 31 * result + (enabled != null ? enabled.hashCode() : 0);
        result = 31 * result + (minScore != null ? minScore.hashCode() : 0);
        result = 31 * result + (maxScore != null ? maxScore.hashCode() : 0);
        result = 31 * result + (description != null ? description.hashCode() : 0);
        result = 31 * result + (planId != null ? planId.hashCode() : 0);
        result = 31 * result + (targetType != null ? targetType.hashCode() : 0);
        result = 31 * result + (options != null ? options.hashCode() : 0);
        result = 31 * result + (userTel != null ? userTel.hashCode() : 0);
        return result;
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

    public String getUserTel() {
        return userTel;
    }

    public void setUserTel(String userTel) {
        this.userTel = userTel;
    }

    public Target() {
    }

    public Target(Integer targetId, String targetName, Boolean enabled, Integer minScore, Integer maxScore, String description, Integer planId, String targetType, String options, String userTel) {
        this.targetId = targetId;
        this.targetName = targetName;
        this.enabled = enabled;
        this.minScore = minScore;
        this.maxScore = maxScore;
        this.description = description;
        this.planId = planId;
        this.targetType = targetType;
        this.options = options;
        this.userTel = userTel;
    }
}
