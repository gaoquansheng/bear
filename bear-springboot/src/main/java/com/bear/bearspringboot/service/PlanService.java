package com.bear.bearspringboot.service;

import com.bear.bearspringboot.entity.Plan;
import com.bear.bearspringboot.entity.RespBean;

import java.util.List;

public interface PlanService {

    public RespBean addPlan(Plan plan);
    public RespBean deletePlan(int planId);
    public RespBean updatePlan(Plan plan);
    public List<Plan> getPlans();
}
