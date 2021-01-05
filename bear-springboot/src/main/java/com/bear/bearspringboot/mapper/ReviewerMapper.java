package com.bear.bearspringboot.mapper;

import com.bear.bearspringboot.entity.Plan;
import com.bear.bearspringboot.entity.Reviewer;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;


public interface ReviewerMapper {
    List<Reviewer> getReviewersByPlanId(Reviewer reviewer);

    void addReviewers(Integer planId, String userTel);

    void deleteReviewerById(int id);

    List<Reviewer> getPlansByUserTel(String userTel);
}
