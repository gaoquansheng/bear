package com.bear.bearspringboot.service;

import com.bear.bearspringboot.base.AjaxResult;
import com.bear.bearspringboot.entity.User;

import java.util.List;

public interface UserService {

    public int addUser(User user);

    public int deleteByUserTel(String userTel);

    public int batchDeleteUsers(List<String> userTelList);

    public int update(User user);

    public List<User> getUsers(User user);

    public User findByUserTel(String userTel);


}
