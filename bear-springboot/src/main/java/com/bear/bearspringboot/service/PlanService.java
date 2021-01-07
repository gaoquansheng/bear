package com.bear.bearspringboot.service;

import com.bear.bearspringboot.entity.Plan;

import java.util.List;

public interface PlanService {

    public int addPlan(Plan plan);
    public int deletePlanById(int planId);
    public int updatePlan(Plan plan);
    public List<Plan> getPlans();
    Plan getPlanById(int planId);
    List<Plan> getOpenPlans();
}
