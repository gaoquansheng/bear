package com.bear.bearspringboot.mapper;

import com.bear.bearspringboot.entity.User;
import com.bear.bearspringboot.entity.Video;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

public interface AppMapper {

    public int isOldUserTel(String userTel);
    public int register(User user);
    public User login(User user);
    public int updateUserNameByUserTel(User user);
    public List<Video> liveHistory(String userTel);

}
