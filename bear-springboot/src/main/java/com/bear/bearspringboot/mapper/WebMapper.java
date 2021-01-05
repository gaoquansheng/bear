package com.bear.bearspringboot.mapper;

import com.bear.bearspringboot.entity.User;
import com.bear.bearspringboot.entity.Video;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

public interface WebMapper {

    public List<User> findAll();
    public int countUsers();
    public User findByUserTel(String userTel);
    public int save(User user);
    public int update(User user, String oldUserTel);
    public int deleteByUserTel(String userTel);
    public User login(User user);
    public int isOldUserTel(User user);
    public int batchDeleteUsers(List<String> userTelList);
    public List<Video> getRecordVideos(Video video);
    public int addTitleById(String[] ids, String title);
    public List<Video> getLatestVideos(Video video);
    public List<Video> getLiveVideos(Video video);

    List<User> getAllUsers();
}
