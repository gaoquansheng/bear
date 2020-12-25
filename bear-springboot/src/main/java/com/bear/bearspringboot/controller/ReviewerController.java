package com.bear.bearspringboot.controller;


import com.bear.bearspringboot.entity.Reviewer;
import com.bear.bearspringboot.service.ReviewerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping("/reviewers")
    public void addReviewers(@RequestBody Reviewer reviewer){
        reviewerService.addReviewers(reviewer);
    }

    @DeleteMapping("/reviewers/{id}")
    public void deleteReviewerById(@PathVariable("id") int id){
        reviewerService.deleteReviewerById(id);
    }
}
