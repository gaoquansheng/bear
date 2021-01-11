package com.bear.bearspringboot.service.impl;

import com.bear.bearspringboot.entity.Score;
import com.bear.bearspringboot.mapper.ScoreMapper;
import com.bear.bearspringboot.service.ScoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.Date;
import java.util.List;

/**
 * @author bear
 * @date 2021-01-07 15:47
 */
@Service
public class ScoreServiceImpl implements ScoreService {

    @Autowired
    ScoreMapper scoreMapper;

    @Autowired
    HttpSession session;

    @Override
    public List<Score> getScores(Score score) {

        String userTel = (String) session.getAttribute("userTel");
        score.setUserTel(userTel);
        return scoreMapper.getScores(score);
    }

    @Override
    public int addScore(Score score) {
        //设置时间和评估人员
        String userTel = (String) session.getAttribute("userTel");
        score.setUserTel(userTel);
        score.setReviewTime(new Date());
        return scoreMapper.addScore(score);
    }

    @Override
    public int updateScore(Score score) {
        String userTel = (String) session.getAttribute("userTel");
        score.setUserTel(userTel);
        score.setReviewTime(new Date());
        return scoreMapper.updateScore(score);
    }
}
