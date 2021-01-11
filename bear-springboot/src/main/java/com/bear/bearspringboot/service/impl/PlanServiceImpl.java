package com.bear.bearspringboot.service.impl;

import com.bear.bearspringboot.entity.Plan;
import com.bear.bearspringboot.mapper.PlanMapper;
import com.bear.bearspringboot.service.PlanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PlanServiceImpl implements PlanService {

    @Autowired
    PlanMapper planMapper;

    @Override
    public int addPlan(Plan plan) {
        return planMapper.addPlan(plan);
    }

    @Override
    public int deletePlanById(int planId) {
        return planMapper.deletePlanById(planId);
    }

    @Override
    public int updatePlan(Plan plan) {
        return planMapper.updatePlan(plan);
    }

    @Override
    public List<Plan> getPlans() {
        return planMapper.getPlans();
    }

    @Override
    public Plan getPlanById(int planId) {
        return planMapper.getPlanById(planId);
    }

    @Override
    public List<Plan> getOpenPlans() {
        return planMapper.getOpenPlans();
    }
}
