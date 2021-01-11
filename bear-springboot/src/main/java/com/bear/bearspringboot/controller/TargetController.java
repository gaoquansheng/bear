package com.bear.bearspringboot.controller;

import com.bear.bearspringboot.base.AjaxResult;
import com.bear.bearspringboot.base.BaseController;
import com.bear.bearspringboot.base.TableData;
import com.bear.bearspringboot.entity.Target;
import com.bear.bearspringboot.service.TargetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/target")
public class TargetController extends BaseController {

    @Autowired
    private TargetService targetService;

    @PostMapping("/targets")
    public AjaxResult addTarget(@RequestBody Target target) {
        return toAjax(targetService.addTarget(target));
    }

    @DeleteMapping("/targets/{targetId}")
    public AjaxResult deleteTargetById(@PathVariable("targetId") int targetId) {
        return toAjax(targetService.deleteTargetById(targetId));
    }

    @PutMapping("/targets")
    public AjaxResult updateTarget(@RequestBody Target target) {
        return toAjax(targetService.updateTarget(target));
    }

    @GetMapping("/targets")
    public TableData getTargets(Target target) {
        startPage();
        List<Target> targets = targetService.getTargets(target);
        return getTableData(targets);
    }

    @GetMapping("/targets/{indexId}")
    public AjaxResult getTargetById(@PathVariable("indexId") int indexId) {
        return AjaxResult.success(targetService.getTargetById(indexId));
    }
}

