package com.bear.bearspringboot.service.impl;

import com.bear.bearspringboot.base.AjaxResult;
import com.bear.bearspringboot.base.HttpStatus;
import com.bear.bearspringboot.entity.User;
import com.bear.bearspringboot.mapper.UserMapper;
import com.bear.bearspringboot.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author bear
 * @date 2021-01-07 16:17
 */
@Service
public class UserServiceImpl implements UserService {

    @Autowired
    UserMapper userMapper;

    @Override
    public int addUser(User user) {
        List<User> users = userMapper.getUsers(user);
        if (users.size() > 0){
            return 0;
        }
        user.setUserPwd("123456");
        return userMapper.addUser(user);
    }

    @Override
    public int deleteByUserTel(String userTel) {
        return userMapper.deleteByUserTel(userTel);
    }

    @Override
    public int batchDeleteUsers(List<String> userTelList) {
        return userMapper.batchDeleteUsers(userTelList);
    }

    @Override
    public int update(User user) {
        return userMapper.update(user);
    }

    @Override
    public List<User> getUsers(User user) {
        return userMapper.getUsers(user);
    }

    @Override
    public User findByUserTel(String userTel) {

        return userMapper.findByUserTel(userTel);
    }



}
