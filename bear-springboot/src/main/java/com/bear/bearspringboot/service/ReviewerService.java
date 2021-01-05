package com.bear.bearspringboot.service;

import com.bear.bearspringboot.entity.Plan;
import com.bear.bearspringboot.entity.Reviewer;

import java.util.List;

public interface ReviewerService {
    List<Reviewer> getReviewersByPlanId(Reviewer reviewer);

    void addReviewers(Reviewer reviewer);

    void deleteReviewerById(int id);

    List<Reviewer> getPlansByUserTel(String userTel);
}
