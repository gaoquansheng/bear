package com.bear.bearspringboot.service;

import com.bear.bearspringboot.entity.RespBean;
import com.bear.bearspringboot.entity.User;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface WebService {

    public List<User> findAll();
    public User findByUserId(int userId);
    public RespBean save(User user);
    public RespBean update(User user);
    public RespBean deleteByUserId(int userId);
}
