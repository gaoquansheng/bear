package com.bear.bearspringboot.service;

import com.bear.bearspringboot.entity.Index;
import com.bear.bearspringboot.entity.Plan;
import com.bear.bearspringboot.entity.RespBean;

import java.util.List;

public interface IndexService {
    RespBean addIndex(Index index);

    RespBean updateIndex(Index index);

    List<Index> getIndexes( int planId);

    RespBean deleteIndex(int indexId);

    Index getIndexById(int indexId);
}
