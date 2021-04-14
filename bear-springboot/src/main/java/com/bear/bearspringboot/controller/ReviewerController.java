package com.bear.bearspringboot.controller;


import com.bear.bearspringboot.base.AjaxResult;
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

    @PostMapping("/reviewers")
    public AjaxResult addReviewers(@RequestBody Reviewer reviewer){
        return reviewerService.addReviewers(reviewer);
    }

    @DeleteMapping("/reviewers/{id}")
    public AjaxResult deleteReviewerById(@PathVariable("id") int id){
        return toAjax(reviewerService.deleteReviewerById(id));
    }

    @GetMapping("/reviewers")
    public TableData getReviewersByPlanId(Reviewer reviewer){
        startPage();
        List<Reviewer> reviewersByPlanId = reviewerService.getReviewersByPlanId(reviewer);
        return getTableData(reviewersByPlanId);
    }

    @GetMapping("/plans")
    public List<Reviewer> getPlansByUserTel() {
        return reviewerService.getPlansByUserTel();
    }




}
