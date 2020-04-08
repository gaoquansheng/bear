package com.bear.bearspringboot.service;

import com.bear.bearspringboot.entity.Video;

import java.util.List;

public interface VideoService {

    public void startLive(Video video);
    public void recordDone(String fileName,String userName);
    public List<Video> live();
    public List<Video> record();
}
