package com.bear.bearspringboot.mapper;

import com.bear.bearspringboot.entity.Index;
import com.bear.bearspringboot.entity.Plan;
import com.bear.bearspringboot.entity.RespBean;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
@Mapper
public interface IndexMapper {

    RespBean addIndex(Index index);

    RespBean updateIndex(Index index);

    List<Index> getIndexs(int planId);

    RespBean deleteIndex(int indexId);
}
