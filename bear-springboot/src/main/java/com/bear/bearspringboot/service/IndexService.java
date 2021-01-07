package com.bear.bearspringboot.service;

import com.bear.bearspringboot.entity.Index;

import java.util.List;

public interface IndexService {
    int addIndex(Index index);

    int updateIndex(Index index);

    List<Index> getIndexes( Index index);

    int deleteIndex(int indexId);

    Index getIndexById(int indexId);

}
