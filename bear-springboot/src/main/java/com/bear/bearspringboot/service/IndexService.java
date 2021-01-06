package com.bear.bearspringboot.service;

import com.bear.bearspringboot.entity.Index;

import java.util.List;

public interface IndexService {
    RespBean addIndex(Index index);

    RespBean updateIndex(Index index);

    List<Index> getIndexes( Index index);

    RespBean deleteIndex(int indexId);

    Index getIndexById(int indexId);

}
