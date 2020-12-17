package com.bear.bearspringboot.mapper;

import com.bear.bearspringboot.entity.Plan;
import com.bear.bearspringboot.entity.RespBean;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface PlanMapper {

    public int addPlan(Plan plan);
    public int deletePlanById(int planId);
    public int updatePlan(Plan plan);
    public List<Plan> getPlans();
    Plan getPlanById(int planId);
}
