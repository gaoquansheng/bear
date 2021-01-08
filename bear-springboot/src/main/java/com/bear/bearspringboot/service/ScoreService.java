package com.bear.bearspringboot.service;

import com.bear.bearspringboot.entity.Score;

import java.util.List;

public interface ScoreService {

    public int addScore(Score score);

    List<Score> getScores(Score score);

    int updateScore(Score score);
}
