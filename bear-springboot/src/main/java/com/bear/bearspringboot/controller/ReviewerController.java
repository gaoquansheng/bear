package com.bear.bearspringboot.controller;


import com.bear.bearspringboot.base.BaseController;
import com.bear.bearspringboot.base.TableData;
import com.bear.bearspringboot.entity.Plan;
import com.bear.bearspringboot.entity.Reviewer;
import com.bear.bearspringboot.service.ReviewerService;
import javafx.scene.control.Tab;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/reviewer")
public class ReviewerController extends BaseController {

    @Autowired
    ReviewerService reviewerService;

    @GetMapping("/reviewers")
    public TableData getReviewersByPlanId(Reviewer reviewer){
        startPage();
        List<Reviewer> reviewersByPlanId = reviewerService.getReviewersByPlanId(reviewer);
        return getTableData(reviewersByPlanId);
    }

    @GetMapping("/plans")
    public List<Reviewer> getPlansByUserTel() {
        return reviewerService.getPlansByUserTel("15516392395");
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
