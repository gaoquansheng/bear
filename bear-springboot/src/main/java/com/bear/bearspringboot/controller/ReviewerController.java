package com.bear.bearspringboot.controller;


import com.bear.bearspringboot.entity.Reviewer;
import com.bear.bearspringboot.service.ReviewerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/reviewer")
public class ReviewerController {

    @Autowired
    ReviewerService reviewerService;

    @GetMapping("/reviewers/{planId}")
    public List<Reviewer> getReviewersByPlanId(@PathVariable("planId") int planId){
        return reviewerService.getReviewersByPlanId(planId);
    }
}
