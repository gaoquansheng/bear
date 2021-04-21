package com.bear.bearspringboot.service;

import com.bear.bearspringboot.base.AjaxResult;
import com.bear.bearspringboot.entity.User;
import com.bear.bearspringboot.entity.Video;

import java.util.List;


public interface WebService {


    public AjaxResult login(User user);

    public List<Video> getRecordVideos(Video video);

    public List<Video> getLatestVideos(Video video);

    public List<Video> getLiveVideos(Video video);

    void updatePwd(String pwd, String newPwd);
}
