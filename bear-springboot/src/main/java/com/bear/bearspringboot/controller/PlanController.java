package com.bear.bearspringboot.controller;


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
    public RespBean addPlan(@RequestBody Plan plan){
        return planService.addPlan(plan);
    }

    @DeleteMapping("/plans/{planId}")
    public RespBean deletePlanById(@PathVariable("planId") int planId){
        return planService.deletePlanById(planId);
    }

    @PutMapping("/plans")
    public RespBean updatePlan(@RequestBody Plan plan){
        return planService.updatePlan(plan);
    }

    @GetMapping("/plans")
    public TableData getPlans(){
        startPage();
        List<Plan> plans = planService.getPlans();
        return getTableData(plans);
    }

    @GetMapping("/plans/{planId}")
    public Plan getPlanById(@PathVariable("planId") int planId){
        return planService.getPlanById(planId);
    }

    @GetMapping("/openPlans")
    public TableData getOPenPlans(Plan plan, HttpServletRequest request){
        startPage();
        System.out.println(plan);
        List<Plan> openPlans = planService.getOpenPlans();
        return getTableData(openPlans);
    }


}
