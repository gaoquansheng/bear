package com.bear.bearspringboot.entity;

public class Attachment {

    private Integer attachmentId;
    private String path;
    private String fileName;
    private Integer planId;

    public Attachment(Integer attachmentId, String path, String fileName, Integer planId) {
        this.attachmentId = attachmentId;
        this.path = path;
        this.fileName = fileName;
        this.planId = planId;
    }

    public Attachment() {
    }

    @Override
    public String toString() {
        return "Attachment{" +
                "attachmentId=" + attachmentId +
                ", path='" + path + '\'' +
                ", fileName='" + fileName + '\'' +
                ", planId=" + planId +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Attachment that = (Attachment) o;

        if (attachmentId != null ? !attachmentId.equals(that.attachmentId) : that.attachmentId != null) return false;
        if (path != null ? !path.equals(that.path) : that.path != null) return false;
        if (fileName != null ? !fileName.equals(that.fileName) : that.fileName != null) return false;
        return planId != null ? planId.equals(that.planId) : that.planId == null;
    }

    @Override
    public int hashCode() {
        int result = attachmentId != null ? attachmentId.hashCode() : 0;
        result = 31 * result + (path != null ? path.hashCode() : 0);
        result = 31 * result + (fileName != null ? fileName.hashCode() : 0);
        result = 31 * result + (planId != null ? planId.hashCode() : 0);
        return result;
    }

    public Integer getAttachmentId() {
        return attachmentId;
    }

    public void setAttachmentId(Integer attachmentId) {
        this.attachmentId = attachmentId;
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
