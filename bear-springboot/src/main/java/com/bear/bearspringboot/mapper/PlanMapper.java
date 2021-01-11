package com.bear.bearspringboot.mapper;

import com.bear.bearspringboot.entity.Plan;

import java.util.List;


public interface PlanMapper {

    int addPlan(Plan plan);

    int deletePlanById(int planId);

    int updatePlan(Plan plan);

    List<Plan> getPlans();

    Plan getPlanById(int planId);

    List<Plan> getOpenPlans();
}
