package com.bear.bearspringboot.service;

import com.bear.bearspringboot.entity.Plan;

import java.util.List;

public interface PlanService {

    public RespBean addPlan(Plan plan);
    public RespBean deletePlanById(int planId);
    public RespBean updatePlan(Plan plan);
    public List<Plan> getPlans();
    Plan getPlanById(int planId);

    List<Plan> getOpenPlans();
}
