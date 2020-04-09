package com.bear.bearspringboot.service.impl;

import com.bear.bearspringboot.dao.VideoMapper;
import com.bear.bearspringboot.entity.Video;
import com.bear.bearspringboot.service.VideoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VideoServiceImpl implements VideoService {
    @Autowired
    VideoMapper videoMapper;
    @Override
    public void startLive(Video video) {
        int line = videoMapper.startLive(video);
        if (line == 1){
            System.out.println("插入成功");
        }else {
            System.out.println("插入失败");
        }
    }

    @Override
    public void recordDone(String fileName,String userName) {
        int line = videoMapper.recordDone(fileName,userName);
        if (line == 1){
            System.out.println("修改成功");
        }else {
            System.out.println("修改失败");
        }
    }

    @Override
    public List<Video> live() {
        return videoMapper.live();
    }

    @Override
    public List<Video> record() {
        return videoMapper.record();
    }
}