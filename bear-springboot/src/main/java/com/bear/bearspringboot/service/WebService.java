package com.bear.bearspringboot.service;

import com.bear.bearspringboot.entity.User;
import com.bear.bearspringboot.entity.Video;

import java.util.List;


public interface WebService {

    public List<User> findAll();
    public int countUsers();
    public User findByUserTel(String userTel);
    public RespBean save(User user);
    public RespBean update(User user,String oldUserTel);
    public RespBean deleteByUserTel(String userTel);
    public User login(User user);
    public void batchDeleteUsers(List<String> userTelList);
    public List<Video> getRecordVideos(Video video);
    public RespBean addTitleById(String[] ids,String title);
    public List<Video> getLatestVideos(Video video);
    public List<Video> getLiveVideos(Video video);

    List<User> getAllUsers();
}
