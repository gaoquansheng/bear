package com.bear.bearspringboot.mapper;

import com.bear.bearspringboot.entity.Reviewer;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface ReviewerMapper {
    public List<Reviewer> getReviewersByPlanId(int planId);
}
