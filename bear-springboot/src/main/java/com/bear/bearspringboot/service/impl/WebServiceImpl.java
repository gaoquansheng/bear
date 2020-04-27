package com.bear.bearspringboot.service.impl;

import com.bear.bearspringboot.dao.AppMapper;
import com.bear.bearspringboot.dao.WebMapper;
import com.bear.bearspringboot.entity.RespBean;
import com.bear.bearspringboot.entity.User;
import com.bear.bearspringboot.entity.Video;
import com.bear.bearspringboot.service.WebService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;

@Service
public class WebServiceImpl implements WebService {
    @Autowired
    WebMapper webMapper;
    @Autowired
    AppMapper appMapper;

    @Override
    public List<User> findAll(int limit,int offset) {

        return webMapper.findAll(limit,offset);
    }
    @Override
    public int countUsers(){
        return webMapper.countUsers();
    }
    @Override
    public User findByUserTel(String userTel) {

        return webMapper.findByUserTel(userTel);
    }
    @Override
    public RespBean save(User user) {
        if (user.getIsAdmin() == 1){
            //管理员用户注册
            //判断用户名是否已存在
            if (webMapper.save(user) == 1){
                return new RespBean("新增用户成功",200);
            }else{
                return new RespBean("新增用户失败",400);
            }

        }else{
            //普通用户注册
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

    @Override
    public RespBean update(User user,String oldUserTel) {
        //
        if (oldUserTel.equals(user.getUserTel())){
            if (webMapper.update(user,oldUserTel) == 1){
                return new RespBean("修改用户信息成功",200);
            }else{
                return new RespBean("修改用户信息失败",400);
            }
        }else{
            if (webMapper.isOldUserTel(user) == 1){
                return new RespBean("手机号已存在",400);
            }else{
                if (webMapper.update(user,oldUserTel) == 1){
                    return new RespBean("修改用户信息成功",200);
                }else{
                    return new RespBean("修改用户信息失败",400);
                }
            }
        }
    }

    @Override
    public RespBean deleteByUserTel(String userTel) {
        if (webMapper.deleteByUserTel(userTel) == 1){
            return new RespBean("删除用户成功",200);
        }else{
            return new RespBean("删除用户失败",400);
        }
    }

    @Override
    public RespBean login(User user) {
        if (webMapper.login(user) == 1){
            return new RespBean("登录成功",200);
        }else{
            return new RespBean("账号或密码错误",400);
        }
    }

    @Override
    public void batchDeleteUsers(List<String> userTelList) {
        webMapper.batchDeleteUsers(userTelList);
    }

    @Override
    public List<Video> findAllVideos(Video video) {
        //通过返回的所有的手机号,匹配手机号对应的用户名
        return webMapper.findAllVideos(video);

    }

    @Override
    public RespBean addTitleById(String[] ids, String title) {
        webMapper.addTitleById(ids,title);
        return null;
    }

    @Override
    public List<Video> findLatestVideos(Video video) {
        return webMapper.findLatestVideos(video);
    }

    @Override
    public List<Video> getLiveVideos(Video video) {
        return webMapper.getLiveVideos(video);
    }
}
