package com.bear.bearspringboot.service.impl;

import com.bear.bearspringboot.base.AjaxResult;
import com.bear.bearspringboot.mapper.AppMapper;
import com.bear.bearspringboot.entity.User;
import com.bear.bearspringboot.entity.Video;
import com.bear.bearspringboot.service.AppService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AppServiceImpl implements AppService {

    @Autowired
    AppMapper appMapper;

    @Override
    public AjaxResult register(User user) {
        if(appMapper.isOldUserTel(user.getUserTel()) == 1){
            return new AjaxResult(500,"手机号已注册");
        }else {
            if (appMapper.register(user) == 1){
                return new AjaxResult(200,"注册成功");
            }else {
                return new AjaxResult(500,"注册失败");
            }
        }

    }

    @Override
    public User login(User user) {
        return appMapper.login(user);
    }

    @Override
    public int updateUserNameByUserTel(User user) {
        return appMapper.updateUserNameByUserTel(user);
    }

    @Override
    public List<Video> liveHistory(String userTel) {
        return appMapper.liveHistory(userTel);
    }
}
