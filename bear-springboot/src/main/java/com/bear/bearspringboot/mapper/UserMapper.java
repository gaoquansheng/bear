package com.bear.bearspringboot.mapper;

import com.bear.bearspringboot.base.AjaxResult;
import com.bear.bearspringboot.entity.User;

import java.util.List;

public interface UserMapper {

    public int addUser(User user);

    public List<User> getUsers(User user);

    public int batchDeleteUsers(List<String> userTelList);
    public int isOldUserTel(User user);

    List<User> getAllUsers();
    public int countUsers();
    public User findByUserTel(String userTel);
    public int update(User user,String oldUserTel);
    public int deleteByUserTel(String userTel);
}
