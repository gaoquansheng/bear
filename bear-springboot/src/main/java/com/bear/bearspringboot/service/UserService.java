package com.bear.bearspringboot.service;

import com.bear.bearspringboot.base.AjaxResult;
import com.bear.bearspringboot.entity.User;

import java.util.List;

public interface UserService {

    public AjaxResult addUser(User user);

    public List<User> getUsers(User user);


    public int batchDeleteUsers(List<String> userTelList);

    List<User> getAllUsers();
    public int countUsers();
    public User findByUserTel(String userTel);
    public AjaxResult update(User user,String oldUserTel);
    public AjaxResult deleteByUserTel(String userTel);
}
