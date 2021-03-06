package com.bear.bearspringboot.service.impl;

import com.bear.bearspringboot.base.AjaxResult;
import com.bear.bearspringboot.entity.Plan;
import com.bear.bearspringboot.entity.Reviewer;
import com.bear.bearspringboot.mapper.ReviewerMapper;
import com.bear.bearspringboot.service.ReviewerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.servlet.http.HttpSession;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;

@Service
public class ReviewerServiceImpl implements ReviewerService {

    @Autowired
    ReviewerMapper reviewerMapper;
    @Autowired
    HttpSession session;

    @Override
    @Transactional
    public AjaxResult addReviewers(Reviewer reviewer) {
        List<Reviewer> reviewers = reviewerMapper.getReviewersByPlanId(reviewer);
        List<String> oldReviewers = new LinkedList<>();
        for (Reviewer item: reviewers){
            oldReviewers.add(item.getUserTel());
        }

        String userTels = reviewer.getUserTel();
        String[] userTel = userTels.split("-");
        ArrayList<String> newReviewers = new ArrayList<>(Arrays.asList(userTel));

        //求出差集,进行人员插入
        newReviewers.removeAll(oldReviewers);
        for (String item : newReviewers){
            reviewerMapper.addReviewers(reviewer.getPlanId(),item);
        }
        return AjaxResult.success();
    }

    @Override
    public int deleteReviewerById(int id) {
        return reviewerMapper.deleteReviewerById(id);
    }

    @Override
    public List<Reviewer> getReviewersByPlanId(Reviewer reviewer) {
        return reviewerMapper.getReviewersByPlanId(reviewer);
    }



    @Override
    public List<Reviewer> getPlansByUserTel() {
        String userTel =(String) session.getAttribute("userTel");
        return reviewerMapper.getPlansByUserTel(userTel);
    }
}
