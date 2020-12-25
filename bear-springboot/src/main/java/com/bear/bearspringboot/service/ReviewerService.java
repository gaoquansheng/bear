package com.bear.bearspringboot.service;

import com.bear.bearspringboot.entity.Reviewer;

import java.util.List;

public interface ReviewerService {
    List<Reviewer> getReviewersByPlanId(int planId);

    void addReviewers(Reviewer reviewer);

    void deleteReviewerById(int id);
}
