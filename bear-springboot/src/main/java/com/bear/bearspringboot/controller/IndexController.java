package com.bear.bearspringboot.controller;

import com.bear.bearspringboot.base.BaseController;
import com.bear.bearspringboot.base.TableData;
import com.bear.bearspringboot.entity.Index;
import com.bear.bearspringboot.entity.Plan;
import com.bear.bearspringboot.entity.RespBean;
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
    public RespBean addIndex(@RequestBody Index index){
        return indexService.addIndex(index);
    }
    @DeleteMapping("/indexes/{indexId}")
    public RespBean deleteIndex(@PathVariable("indexId") int indexId){
        return indexService.deleteIndex(indexId);
    }
    @PutMapping("/indexes")
    public RespBean updateIndex(@RequestBody Index index){
        return indexService.updateIndex(index);
    }
    @GetMapping("/indexes")
    public TableData getIndexes(Index index){
        startPage();
        List<Index> indexes = indexService.getIndexes(index);
        return getTableData(indexes);
    }
    @GetMapping("/indexes/indexId/{indexId}")
    public Index getIndexById(@PathVariable("indexId") int indexId){
        return indexService.getIndexById(indexId);
    }


