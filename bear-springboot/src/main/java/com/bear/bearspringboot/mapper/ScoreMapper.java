package com.bear.bearspringboot.mapper;

import com.bear.bearspringboot.entity.Score;

import java.util.List;

public interface ScoreMapper {

    public int addScore(Score score);

    List<Score> getScores(Score score);

    int updateScore(Score score);
}
