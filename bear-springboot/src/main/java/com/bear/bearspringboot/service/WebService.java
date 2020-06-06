package com.bear.bearspringboot.service;

import com.bear.bearspringboot.entity.RespBean;
import com.bear.bearspringboot.entity.User;
import com.bear.bearspringboot.entity.Video;
import org.springframework.stereotype.Service;

import java.util.List;


public interface WebService {

    public List<User> findAll(int limit,int offset);
    public int countUsers();
    public User findByUserTel(String userTel);
    public RespBean save(User user);
    public RespBean update(User user,String oldUserTel);
    public RespBean deleteByUserTel(String userTel);
    public RespBean login(User user);
    public void batchDeleteUsers(List<String> userTelList);
    public List<Video> findAllVideos(Video video);
    public RespBean addTitleById(String[] ids,String title);
    public List<Video> findLatestVideos(Video video);
    public List<Video> getLiveVideos(Video video);
}
