package com.bear.bearspringboot.entity;

public class Annex {

    private Integer annexId;
    private String path;
    private String fileName;
    private Integer planId;

    public Annex(Integer annexId, String path, String fileName, Integer planId) {
        this.annexId = annexId;
        this.path = path;
        this.fileName = fileName;
        this.planId = planId;
    }

    public Annex() {
    }

    @Override
    public String toString() {
        return "Annex{" +
                "annexId=" + annexId +
                ", path='" + path + '\'' +
                ", fileName='" + fileName + '\'' +
                ", planId=" + planId +
                '}';
    }

    public Integer getAnnexId() {
        return annexId;
    }

    public void setAnnexId(Integer annexId) {
        this.annexId = annexId;
    }

    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path = path;
    }

    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    public Integer getPlanId() {
        return planId;
    }

    public void setPlanId(Integer planId) {
        this.planId = planId;
    }
}
