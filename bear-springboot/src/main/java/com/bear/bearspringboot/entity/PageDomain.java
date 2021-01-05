package com.bear.bearspringboot.entity;

/**
 * @author bear
 * @date 2020-12-30 13:57
 */
public class PageDomain {

    private Integer pageNum;
    private Integer pageSize;

    public PageDomain() {
    }

    public PageDomain(Integer pageNum, Integer pageSize) {
        this.pageNum = pageNum;
        this.pageSize = pageSize;
    }

    public Integer getPageNum() {
        return pageNum;
    }

    public void setPageNum(Integer pageNum) {
        this.pageNum = pageNum;
    }

    public Integer getPageSize() {
        return pageSize;
    }

    public void setPageSize(Integer pageSize) {
        this.pageSize = pageSize;
    }
}
