package com.bear.bearspringboot.service;


import com.bear.bearspringboot.entity.RespBean;
import com.bear.bearspringboot.entity.User;
import com.bear.bearspringboot.entity.Video;
import org.springframework.stereotype.Service;

import java.util.List;


public interface AppService {

    public RespBean register(User user);

    public User login(User user);

    public RespBean updateUserNameByUserTel(User user);

    public List<Video> liveHistory(String userTel);
}
