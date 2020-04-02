package com.bear.bearspringboot.dao;

import com.bear.bearspringboot.entity.User;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
@Mapper
public interface WebMapper {

    public List<User> findAll();
    public User findByUserId(int userId);
    public int save(User user);
    public int update(User user);
    public int deleteByUserId(int userId);
}
