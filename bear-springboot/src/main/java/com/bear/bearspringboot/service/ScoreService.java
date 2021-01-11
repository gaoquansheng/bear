package com.bear.bearspringboot.service;

import com.bear.bearspringboot.entity.Score;

import java.util.List;

public interface ScoreService {

    int addScore(Score score);

    int updateScore(Score score);

    List<Score> getScores(Score score);


}
