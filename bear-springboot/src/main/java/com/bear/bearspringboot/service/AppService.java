package com.bear.bearspringboot.service;


import com.bear.bearspringboot.entity.RespBean;
import com.bear.bearspringboot.entity.User;
import org.springframework.stereotype.Service;

@Service
public interface AppService {

    public RespBean register(User user);

    public User login(User user);

    public RespBean updateUserNameById(User user);
}
