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
    public int login(User user);
    public int isOldUserName(User user);
    public int isOldUserTel(User user);
    public int batchDeleteUsers(List<Integer> userList);
}
