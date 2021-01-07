package com.bear.bearspringboot.controller;

import com.bear.bearspringboot.base.AjaxResult;
import com.bear.bearspringboot.base.BaseController;
import com.bear.bearspringboot.base.TableData;
import com.bear.bearspringboot.entity.Index;
import com.bear.bearspringboot.service.IndexService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/index")
public class IndexController extends BaseController {

    @Autowired
    private IndexService indexService;

    @PostMapping("/indexes")
    public AjaxResult addIndex(@RequestBody Index index) {
        return toAjax(indexService.addIndex(index));
    }

    @DeleteMapping("/indexes/{indexId}")
    public AjaxResult deleteIndex(@PathVariable("indexId") int indexId) {
        return toAjax(indexService.deleteIndex(indexId));
    }

    @PutMapping("/indexes")
    public AjaxResult updateIndex(@RequestBody Index index) {
        return toAjax(indexService.updateIndex(index));
    }

    @GetMapping("/indexes")
    public TableData getIndexes(Index index) {
        startPage();
        List<Index> indexes = indexService.getIndexes(index);
        return getTableData(indexes);
    }

    @GetMapping("/indexes/indexId/{indexId}")
    public Index getIndexById(@PathVariable("indexId") int indexId) {
        return indexService.getIndexById(indexId);
    }
}

