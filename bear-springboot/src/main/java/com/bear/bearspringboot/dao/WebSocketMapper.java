package com.bear.bearspringboot.dao;

import com.bear.bearspringboot.entity.Message;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface WebSocketMapper {
    public int saveMessage(Message message);
}
