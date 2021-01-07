package com.bear.bearspringboot.mapper;

import com.bear.bearspringboot.entity.User;
import com.bear.bearspringboot.entity.Video;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

public interface WebMapper {


    public User login(User user);
    public List<Video> getRecordVideos(Video video);
    public int addTitleById(String[] ids, String title);
    public List<Video> getLatestVideos(Video video);
    public List<Video> getLiveVideos(Video video);

}
