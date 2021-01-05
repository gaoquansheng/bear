package com.bear.bearspringboot.base;

import com.bear.bearspringboot.entity.PageDomain;
import com.bear.bearspringboot.util.ServletUtils;

/**
 * @author bear
 * @date 2020-12-30 13:59
 */
public class TableSupport {

    /**
     * 当前记录起始索引
     */
    public static final String PAGE_NUM = "pageNum";

    /**
     * 每页显示记录数
     */
    public static final String PAGE_SIZE = "pageSize";


    public static PageDomain getPageDomain()
    {
        PageDomain pageDomain = new PageDomain();
        String pageNum = ServletUtils.getParameter(PAGE_NUM);
        String pageSize = ServletUtils.getParameter(PAGE_SIZE);
        if (pageNum != null && pageSize != null){
            pageDomain.setPageNum(Integer.parseInt(ServletUtils.getParameter(PAGE_NUM)));
            pageDomain.setPageSize(Integer.parseInt(ServletUtils.getParameter(PAGE_SIZE)));
        }
        return pageDomain;
    }
}
