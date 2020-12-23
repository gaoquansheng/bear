package com.bear.bearspringboot.service.impl;

import com.bear.bearspringboot.entity.Reviewer;
import com.bear.bearspringboot.mapper.ReviewerMapper;
import com.bear.bearspringboot.service.ReviewerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReviewerServiceImpl implements ReviewerService {

    @Autowired
    ReviewerMapper reviewerMapper;

    @Override
    public List<Reviewer> getReviewersByPlanId(int planId) {
        return reviewerMapper.getReviewersByPlanId(planId);
    }
}
