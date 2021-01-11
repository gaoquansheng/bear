package com.bear.bearspringboot.service.impl;

import com.bear.bearspringboot.mapper.NginxMapper;
import com.bear.bearspringboot.entity.Video;
import com.bear.bearspringboot.service.NginxService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NginxServiceImpl implements NginxService {
    @Autowired
    NginxMapper nginxMapper;
    @Override
    public void startLive(Video video) {
        int line = nginxMapper.startLive(video);
        if (line == 1){
            System.out.println("插入成功");
        }else {
            System.out.println("插入失败");
        }
    }

    @Override
    public void recordDone(Video video) {
        if (nginxMapper.recordDone(video) == 1){
            System.out.println("修改成功");
        }else {
            System.out.println("修改失败");
        }
    }

    @Override
    public List<Video> getVideosByPlanId(int planId) {
        return nginxMapper.getVideosByPlanId(planId);
    }
}
