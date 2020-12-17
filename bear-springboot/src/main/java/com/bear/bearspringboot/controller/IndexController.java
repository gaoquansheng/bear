package com.bear.bearspringboot.controller;

import com.bear.bearspringboot.entity.Index;
import com.bear.bearspringboot.entity.Plan;
import com.bear.bearspringboot.entity.RespBean;
import com.bear.bearspringboot.service.IndexService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/index")
public class IndexController {

    @Autowired
    private IndexService indexService;

    @PostMapping("/indexs")
    public RespBean addIndex(@RequestBody Index index){
        return indexService.addIndex(index);
    }
    @DeleteMapping("/indexs/{indexId}")
    public RespBean deleteIndex(@PathVariable("indexId") int indexId){
        return indexService.deleteIndex(indexId);
    }
    @PutMapping("/indexs")
    public RespBean updateIndex(@RequestBody Index index){
        return indexService.updateIndex(index);
    }
    @GetMapping("/indexs/{planId}")
    public List<Index> getIndexs(@PathVariable("planId") int planId){
        return indexService.getIndexs(planId);
    }
}
