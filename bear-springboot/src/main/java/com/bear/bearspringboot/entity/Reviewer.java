package com.bear.bearspringboot.entity;

public class Reviewer {

    private Integer id;
    private Integer planId;
    private String userTel;

    public Reviewer(Integer id, Integer planId, String userTel) {
        this.id = id;
        this.planId = planId;
        this.userTel = userTel;
    }

    public Reviewer() {
    }

    @Override
    public String toString() {
        return "Reviewer{" +
                "id=" + id +
                ", planId=" + planId +
                ", userTel='" + userTel + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Reviewer reviewer = (Reviewer) o;

        if (id != null ? !id.equals(reviewer.id) : reviewer.id != null) return false;
        if (planId != null ? !planId.equals(reviewer.planId) : reviewer.planId != null) return false;
        return userTel != null ? userTel.equals(reviewer.userTel) : reviewer.userTel == null;
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (planId != null ? planId.hashCode() : 0);
        result = 31 * result + (userTel != null ? userTel.hashCode() : 0);
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
}
