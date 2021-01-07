package com.bear.bearspringboot.service.impl;

import com.bear.bearspringboot.entity.Index;
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
    public int addIndex(Index index) {
        return indexMapper.addIndex(index);

    }

    @Override
    public int updateIndex(Index index) {
       return indexMapper.updateIndex(index);
    }

    @Override
    public List<Index> getIndexes(Index index) {
        return indexMapper.getIndexes(index);
    }

    @Override
    public int deleteIndex(int indexId) {
        return indexMapper.deleteIndex(indexId);
    }

    @Override
    public Index getIndexById(int indexId) {
        return indexMapper.getIndexById(indexId);
    }


}
