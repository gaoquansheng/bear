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
    public User login(User user) {
        return webMapper.login(user);
    }

    @Override
    public List<Video> getRecordVideos(Video video) {
        //通过返回的所有的手机号,匹配手机号对应的用户名

        return webMapper.getRecordVideos(video);

    }

    @Override
    public AjaxResult addTitleById(String[] ids, String title) {
        if(webMapper.addTitleById(ids,title) == ids.length){
            return new AjaxResult(HttpStatus.SUCCESS,"添加成功");
        }else{
            return new AjaxResult(HttpStatus.ERROR,"添加失败");
        }

    }
    @Override
    public List<Video> getLatestVideos(Video video) {
        return webMapper.getLatestVideos(video);
    }

    @Override
    public List<Video> getLiveVideos(Video video) {
        return webMapper.getLiveVideos(video);
    }


}
