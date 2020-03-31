package com.bear.bearspringboot.service.impl;

import com.bear.bearspringboot.entity.RespBean;
import com.bear.bearspringboot.entity.User;
import com.bear.bearspringboot.service.LoginService;

public class LoginServiceImpl implements LoginService {
    @Override
    public RespBean login(User user) {
        //1.判断当前手机号是否存在，
        //2.存在判断密码是否正确
        //3.不存在直接注册
        return null;
    }
}
