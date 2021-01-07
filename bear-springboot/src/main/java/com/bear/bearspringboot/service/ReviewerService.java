package com.bear.bearspringboot.service;

import com.bear.bearspringboot.base.AjaxResult;
import com.bear.bearspringboot.entity.Plan;
import com.bear.bearspringboot.entity.Reviewer;

import java.util.List;

public interface ReviewerService {
    List<Reviewer> getReviewersByPlanId(Reviewer reviewer);

    AjaxResult addReviewers(Reviewer reviewer);

    int deleteReviewerById(int id);

    List<Reviewer> getPlansByUserTel(String userTel);
}
