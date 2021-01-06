package com.bear.bearspringboot.base;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;

import java.util.List;

/**
 * @author bear
 * @date 2020-12-30 10:45
 */
public class BaseController {

    protected void startPage(){
        PageDomain pageDomain = TableSupport.getPageDomain();
        Integer pageNum = pageDomain.getPageNum();
        Integer pageSize = pageDomain.getPageSize();
        if(pageNum != null && pageSize != null){
            PageHelper.startPage(pageNum,pageSize);
        }
    }

    protected TableData getTableData(List<?> list){
        TableData tableData = new TableData();
        tableData.setCode(HttpStatus.SUCCESS);
        tableData.setMsg("查询成功");
        tableData.setRows(list);
        tableData.setTotal(new PageInfo(list).getTotal());
        return tableData;
        //响应分页数据
    }

}
