package com.bear.bearspringboot.mapper;

import com.bear.bearspringboot.entity.Index;
import com.bear.bearspringboot.entity.Plan;
import com.bear.bearspringboot.entity.RespBean;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
public interface IndexMapper {

    int addIndex(Index index);

    int updateIndex(Index index);

    List<Index> getIndexes(Index index);

    int deleteIndex(int indexId);

    Index getIndexById(int indexId);

}
