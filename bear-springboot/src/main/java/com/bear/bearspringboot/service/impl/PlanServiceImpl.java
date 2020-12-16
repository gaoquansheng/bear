package com.bear.bearspringboot.service.impl;

import com.bear.bearspringboot.entity.Plan;
import com.bear.bearspringboot.entity.RespBean;
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
    public RespBean addPlan(Plan plan) {
        planMapper.addPlan(plan);
        return null;
    }

    @Override
    public RespBean deletePlan(int planId) {
        planMapper.deletePlan(planId);
        return null;
    }

    @Override
    public RespBean updatePlan(Plan plan) {
        planMapper.updatePlan(plan);
        return null;
    }

    @Override
    public List<Plan> getPlans() {
        return planMapper.getPlans();
    }
}
