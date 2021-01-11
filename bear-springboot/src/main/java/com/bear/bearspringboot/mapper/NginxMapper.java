package com.bear.bearspringboot.mapper;

import com.bear.bearspringboot.entity.Video;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;


public interface NginxMapper {

    public int startLive(Video video);
    public int recordDone(Video video);

    List<Video> getVideosByPlanId(int planId);
}
