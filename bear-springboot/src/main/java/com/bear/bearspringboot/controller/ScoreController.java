package com.bear.bearspringboot.controller;

import com.bear.bearspringboot.base.AjaxResult;
import com.bear.bearspringboot.base.BaseController;
import com.bear.bearspringboot.entity.Score;
import com.bear.bearspringboot.service.ScoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author bear
 * @date 2021-01-07 15:42
 */

@RestController
@RequestMapping("/score")
public class ScoreController extends BaseController {


    @Autowired
    ScoreService scoreService;


    @PostMapping("/scores")
    public AjaxResult addScore(@RequestBody Score score){
        return toAjax(scoreService.addScore(score));
    }
}
