package com.bear.bearspringboot.dao;

import com.bear.bearspringboot.entity.Video;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface VideoMapper {

    public int startLive(Video video);
    public int recordDone(String fileName,String userName);
    public List<Video> live();
    public List<Video> record();
}
