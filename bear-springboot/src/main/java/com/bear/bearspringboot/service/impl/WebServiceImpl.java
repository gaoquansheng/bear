package com.bear.bearspringboot.service.impl;

import com.bear.bearspringboot.mapper.AppMapper;
import com.bear.bearspringboot.mapper.WebMapper;
import com.bear.bearspringboot.entity.RespBean;
import com.bear.bearspringboot.entity.User;
import com.bear.bearspringboot.entity.Video;
import com.bear.bearspringboot.service.WebService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;

@Service
public class WebServiceImpl implements WebService {
    @Autowired
    WebMapper webMapper;
    @Autowired
    AppMapper appMapper;
    @Autowired
    HttpServletRequest request;
    @Autowired
    HttpServletResponse response;

    @Override
    public List<User> findAll() {

        return webMapper.findAll();
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
    public User login(User user) {
        return webMapper.login(user);
    }

    @Override
    public void batchDeleteUsers(List<String> userTelList) {
        webMapper.batchDeleteUsers(userTelList);
    }

    @Override
    public List<Video> getRecordVideos(Video video) {
        //通过返回的所有的手机号,匹配手机号对应的用户名

        return webMapper.getRecordVideos(video);

    }

    @Override
    public RespBean addTitleById(String[] ids, String title) {
        if(webMapper.addTitleById(ids,title) == ids.length){
            return new RespBean("添加成功",200);
        }else{
            return new RespBean("添加失败",400);
        }

    }
    @Override
    public List<Video> getLatestVideos(Video video) {
        return webMapper.getLatestVideos(video);
    }

    @Override
    public List<Video> getLiveVideos(Video video) {
        System.out.println(video.toString());
        return webMapper.getLiveVideos(video);
    }

    @Override
    public List<User> getAllUsers() {
        return webMapper.getAllUsers();
    }
}
