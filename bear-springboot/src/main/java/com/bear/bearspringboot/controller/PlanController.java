package com.bear.bearspringboot.controller;


import com.bear.bearspringboot.base.AjaxResult;
import com.bear.bearspringboot.base.BaseController;
import com.bear.bearspringboot.base.TableData;
import com.bear.bearspringboot.entity.Plan;
import com.bear.bearspringboot.service.PlanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RestController
@RequestMapping("/plan")
public class PlanController extends BaseController {

    @Autowired
    PlanService planService;

    @PostMapping("/plans")
    public AjaxResult addPlan(@RequestBody Plan plan){
        return toAjax(planService.addPlan(plan));
    }

    @DeleteMapping("/plans/{planId}")
    public AjaxResult deletePlanById(@PathVariable("planId") int planId){
        return toAjax(planService.deletePlanById(planId));
    }

    @PutMapping("/plans")
    public AjaxResult updatePlan(@RequestBody Plan plan){
        return toAjax(planService.updatePlan(plan));
    }

    @GetMapping("/plans")
    public TableData getPlans(){
        startPage();
        List<Plan> plans = planService.getPlans();
        return getTableData(plans);
    }

    @GetMapping("/plans/{planId}")
    public AjaxResult getPlanById(@PathVariable("planId") int planId){
        return AjaxResult.success(planService.getPlanById(planId));
    }

    @GetMapping("/openPlans")
    public TableData getOPenPlans(Plan plan, HttpServletRequest request){
        startPage();
        System.out.println(plan);
        List<Plan> openPlans = planService.getOpenPlans();
        return getTableData(openPlans);
    }


}
