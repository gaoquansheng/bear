package com.bear.bearspringboot.service.impl;

import com.bear.bearspringboot.base.AjaxResult;
import com.bear.bearspringboot.base.HttpStatus;
import com.bear.bearspringboot.entity.User;
import com.bear.bearspringboot.mapper.UserMapper;
import com.bear.bearspringboot.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author bear
 * @date 2021-01-07 16:17
 */
@Service
public class UserServiceImpl implements UserService {

    @Autowired
    UserMapper userMapper;

    @Override
    public AjaxResult addUser(User user) {
        //这里需要判断是否已经注册过了
        //判断新增的手机号和原来的手机号是否一样就行了;
        List<User> users = userMapper.getUsers(user);
        if (users.size() > 0){
            return new AjaxResult(500,"手机号已经被注册");
        }
        return new AjaxResult(200,"添加成功");
    }

    @Override
    public List<User> getUsers(User user) {
        return userMapper.getUsers(user);
    }
    @Override
    public int countUsers(){
        return userMapper.countUsers();
    }
    @Override
    public User findByUserTel(String userTel) {

        return userMapper.findByUserTel(userTel);
    }


    @Override
    public AjaxResult update(User user,String oldUserTel) {
        //
        if (oldUserTel.equals(user.getUserTel())){
            if (userMapper.update(user,oldUserTel) == 1){
                return new AjaxResult(HttpStatus.SUCCESS,"修改用户信息成功");
            }else{
                return new AjaxResult(HttpStatus.ERROR,"修改用户信息失败");
            }
        }else{
            if (userMapper.isOldUserTel(user) == 1){
                return new AjaxResult(HttpStatus.ERROR,"手机号已存在");
            }else{
                if (userMapper.update(user,oldUserTel) == 1){
                    return new AjaxResult(HttpStatus.SUCCESS,"修改用户信息成功");
                }else{
                    return new AjaxResult(HttpStatus.ERROR,"修改用户信息失败");
                }
            }
        }
    }

    @Override
    public AjaxResult deleteByUserTel(String userTel) {
        if (userMapper.deleteByUserTel(userTel) == 1){
            return new AjaxResult(HttpStatus.SUCCESS,"删除用户成功");
        }else{
            return new AjaxResult(HttpStatus.ERROR,"删除用户失败");
        }
    }
    @Override
    public int batchDeleteUsers(List<String> userTelList) {
        return userMapper.batchDeleteUsers(userTelList);
    }

    @Override
    public List<User> getAllUsers() {
        return userMapper.getAllUsers();
    }
}
