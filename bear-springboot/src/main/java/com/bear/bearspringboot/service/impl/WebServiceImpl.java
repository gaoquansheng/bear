package com.bear.bearspringboot.service.impl;

import com.bear.bearspringboot.dao.AppMapper;
import com.bear.bearspringboot.dao.WebMapper;
import com.bear.bearspringboot.entity.RespBean;
import com.bear.bearspringboot.entity.User;
import com.bear.bearspringboot.service.WebService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WebServiceImpl implements WebService {
    @Autowired
    WebMapper webMapper;
    @Autowired
    AppMapper appMapper;

    @Override
    public List<User> findAll() {

        return webMapper.findAll();
    }
    @Override
    public User findByUserId(int userId) {

        return webMapper.findByUserId(userId);
    }
    @Override
    public RespBean save(User user) {
        if (user.getIsAdmin() == 1){
            //管理员用户注册
            //判断用户名是否已存在
            if (webMapper.isOldUserName(user) == 1){
                return new RespBean("用户名已存在",400);
            }else{
                if (webMapper.save(user) == 1){
                    return new RespBean("新增用户成功",200);
                }else{
                    return new RespBean("新增用户失败",400);
                }
            }
        }else{
            //普通用户注册
            if (webMapper.isOldUserName(user) == 1){
                return new RespBean("用户名已存在",400);
            }else{
                if (webMapper.isOldUserTel(user) == 1){
                    return new RespBean("手机号已存在",400);
                }else{
                    if (webMapper.save(user) == 1){
                        return new RespBean("新增用户成功",200);
                    }else{
                        return new RespBean("新增用户失败",400);
                    }
                }
            }
        }

    }

    @Override
    public RespBean update(User user) {
        if (webMapper.isOldUserName(user) == 1){
            return new RespBean("用户名已存在",400);
        }else if (webMapper.isOldUserTel(user) == 1){
            return new RespBean("手机号已存在",400);
        }else{
            if (webMapper.update(user) == 1){
                return new RespBean("修改用户信息成功",200);
            }else{
                return new RespBean("修改用户信息失败",400);
            }
        }
    }

    @Override
    public RespBean deleteByUserId(int userId) {
        int line = webMapper.deleteByUserId(userId);
        if (line == 1){
            return new RespBean("删除用户成功",200);
        }else{
            return new RespBean("删除用户失败",400);
        }
    }

    @Override
    public RespBean login(User user) {

        int line = webMapper.login(user);
        if (line == 1){
            return new RespBean("登录成功",200);
        }else{
            return new RespBean("账号或密码错误",400);
        }
    }

    @Override
    public void batchDeleteUsers(List<Integer> userList) {
        webMapper.batchDeleteUsers(userList);
    }
}
