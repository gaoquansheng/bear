package com.bear.bearspringboot.dao;

import com.bear.bearspringboot.entity.RespBean;
import com.bear.bearspringboot.entity.User;
import com.bear.bearspringboot.entity.Video;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.HashMap;
import java.util.List;
@Mapper
public interface WebMapper {

    public List<User> findAll(int limit,int offset);
    public int countUsers();
    public User findByUserTel(String userTel);
    public int save(User user);
    public int update(User user, String oldUserTel);
    public int deleteByUserTel(String userTel);
    public int login(User user);
    public int isOldUserTel(User user);
    public int batchDeleteUsers(List<String> userTelList);
    public List<Video> findAllVideos(Video video);
    public int addTitleById(String[] ids, String title);
    public List<Video> findLatestVideos(Video video);
    public List<Video> getLiveVideos(Video video);
}
