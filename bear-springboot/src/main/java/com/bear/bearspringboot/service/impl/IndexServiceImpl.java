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
        return indexMapper.addIndex(index);
    }

    @Override
    public RespBean updateIndex(Index index) {
        return indexMapper.updateIndex(index);
    }

    @Override
    public List<Index> getIndexs(int planId) {
        return indexMapper.getIndexs(planId);
    }

    @Override
    public RespBean deleteIndex(int indexId) {
        return indexMapper.deleteIndex(indexId);
    }
}
