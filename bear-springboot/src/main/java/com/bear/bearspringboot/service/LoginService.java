package com.bear.bearspringboot.service;


import com.bear.bearspringboot.entity.RespBean;
import com.bear.bearspringboot.entity.User;
import org.springframework.stereotype.Service;

@Service
public interface LoginService {

    public RespBean login(User user);
}
