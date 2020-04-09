package com.bear.bearspringboot.controller;


import com.bear.bearspringboot.entity.RespBean;
import com.bear.bearspringboot.entity.User;
import com.bear.bearspringboot.service.WebService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;

@RestController
@RequestMapping("/web")
@CrossOrigin
public class WebController {

    @Autowired
    WebService webService;

    @GetMapping("/users")
    public List<User> findAll(){
        return webService.findAll();
    }
    @GetMapping("/users/{userId}")
    public User findByUserId(@PathVariable("userId") int userId){
        return webService.findByUserId(userId);
    }
    @PostMapping("/users")
    public RespBean save(@RequestBody User user){
        return webService.save(user);
    }
    @PutMapping("/users")
    public RespBean update(@RequestBody User user){
        return webService.update(user);
    }
    @DeleteMapping("/users/{userId}")
    public RespBean deleteByUserId(@PathVariable("userId") int userId){
        return webService.deleteByUserId(userId);
    }
    @RequestMapping("/deleteUserList")
    public void batchDeleteUsers(@RequestParam("ids") String ids){
        // TODO: 2020/4/7 批量删除用户 
        System.out.println(ids);
        String[] split = ids.split(",");
        List<Integer> userList = new LinkedList<>();
        for (String i : split){
            userList.add(Integer.parseInt(i));
        }
        webService.batchDeleteUsers(userList);

    }
    @PostMapping("/login")
    public RespBean login(@RequestBody User user){
        System.out.println("请求到了login");
        return webService.login(user);
    }
}
