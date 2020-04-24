package com.bear.bearspringboot.service.impl;

import com.bear.bearspringboot.dao.AppMapper;
import com.bear.bearspringboot.entity.RespBean;
import com.bear.bearspringboot.entity.User;
import com.bear.bearspringboot.service.AppService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AppServiceImpl implements AppService {

    @Autowired
    AppMapper appMapper;

    @Override
    public RespBean register(User user) {
        if(appMapper.isOldUserTel(user.getUserTel()) == 1){
            return new RespBean("手机号已注册",400);
        }else {
            if (appMapper.register(user) == 1){
                return new RespBean("注册成功",200);
            }else {
                return new RespBean("注册失败",400);
            }
        }

    }

    @Override
    public User login(User user) {
        return appMapper.login(user);
    }

    @Override
    public RespBean updateUserNameByUserTel(User user) {
        if (appMapper.updateUserNameByUserTel(user) == 1){
            return new RespBean("修改成功",200);
        }else{
            return new RespBean("修改失败",400);
        }
    }
}
