package com.bear.bearspringboot.service;

import com.bear.bearspringboot.entity.RespBean;
import com.bear.bearspringboot.entity.User;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface WebService {

    public List<User> findAll(int limit,int offset);
    public int countUsers();
    public User findByUserId(int userId);
    public RespBean save(User user);
    public RespBean update(User user);
    public RespBean deleteByUserId(int userId);
    public RespBean login(User user);
    public void batchDeleteUsers(List<Integer> userList);
}
