package com.bear.bearspringboot.service.impl;

import com.bear.bearspringboot.entity.Index;
import com.bear.bearspringboot.entity.Plan;
import com.bear.bearspringboot.entity.RespBean;
import com.bear.bearspringboot.mapper.IndexMapper;
import com.bear.bearspringboot.service.IndexService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class IndexServiceImpl implements IndexService {

    @Autowired
    private IndexMapper indexMapper;

    @Override
    public RespBean addIndex(Index index) {
        int lines = indexMapper.addIndex(index);
        return null;
    }

    @Override
    public RespBean updateIndex(Index index) {

       indexMapper.updateIndex(index);
       return null;
    }

    @Override
    public List<Index> getIndexes(int planId) {
        return indexMapper.getIndexes(planId);
    }

    @Override
    public RespBean deleteIndex(int indexId) {
        indexMapper.deleteIndex(indexId);
        return null;
    }

    @Override
    public Index getIndexById(int indexId) {
        return indexMapper.getIndexById(indexId);
    }
}
