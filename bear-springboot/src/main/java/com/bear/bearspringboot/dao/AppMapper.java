package com.bear.bearspringboot.dao;

import com.bear.bearspringboot.entity.User;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface AppMapper {

    public int isOldUserName(String userName);
    public int isOldUserTel(String userTel);
    public int register(User user);

    public User login(User user);

    public int updateUserNameById(User user);

}
