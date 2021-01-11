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

    @Override
    public User login(User user) {
        return webMapper.login(user);
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


}
