package com.bear.bearspringboot.controller;


import com.bear.bearspringboot.entity.Plan;
import com.bear.bearspringboot.entity.RespBean;
import com.bear.bearspringboot.service.PlanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/plan")
@CrossOrigin
public class PlanController {

    @Autowired
    PlanService planService;

    @PostMapping("/plans")
    public RespBean addPlan(@RequestBody Plan plan){
        return planService.addPlan(plan);
    }
    @DeleteMapping("/plans/{planId}")
    public RespBean deletePlan(@PathVariable("planId") int planId){
        return planService.deletePlan(planId);
    }
    @PutMapping("/plans")
    public RespBean updatePlan(@RequestBody Plan plan){
        return planService.updatePlan(plan);
    }
    @GetMapping("/plans")
    public List<Plan> getPlans(){
        return planService.getPlans();
    }

}
