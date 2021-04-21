package com.bear.bearspringboot.service.impl;

import com.bear.bearspringboot.base.AjaxResult;
import com.bear.bearspringboot.base.HttpStatus;
import com.bear.bearspringboot.mapper.AppMapper;
import com.bear.bearspringboot.mapper.WebMapper;
import com.bear.bearspringboot.entity.User;
import com.bear.bearspringboot.entity.Video;
import com.bear.bearspringboot.service.WebService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.util.List;

@Service
public class WebServiceImpl implements WebService {

    @Autowired
    WebMapper webMapper;

    @Autowired
    HttpSession session;

    @Override
    public AjaxResult login(User user) {
        User login = webMapper.login(user);
        if(login != null) {
            session.setAttribute("userTel", user.getUserTel());
            session.setMaxInactiveInterval(120);//秒
            return AjaxResult.success(login);
        }
        return AjaxResult.error("用户名或密码错误");
    }

    @Override
    public List<Video> getRecordVideos(Video video) {
        return webMapper.getRecordVideos(video);
    }

    @Override
    public List<Video> getLatestVideos(Video video) {
        return webMapper.getLatestVideos(video);
    }

    @Override
    public List<Video> getLiveVideos(Video video) {
        return webMapper.getLiveVideos(video);
    }

    @Override
    public void updatePwd(String pwd, String newPwd) {
        String userTel =(String) session.getAttribute("userTel");
        User user = new User();
        user.setUserTel(userTel);
        user.setUserPwd(pwd);
        User login = webMapper.login(user);
        if(login != null){
            webMapper.updatePwd(userTel, newPwd);
        }
    }
}
