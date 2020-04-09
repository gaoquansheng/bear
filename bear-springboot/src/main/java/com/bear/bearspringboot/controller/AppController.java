package com.bear.bearspringboot.controller;


import com.bear.bearspringboot.entity.RespBean;
import com.bear.bearspringboot.entity.User;
import com.bear.bearspringboot.service.AppService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/app")
@CrossOrigin
public class AppController {


    @Autowired
    AppService appService;

    @PostMapping("/register")
    public RespBean register(@RequestBody User user){
        return appService.register(user);
    }

    @PostMapping("/login")
    public User login(@RequestBody User user){
        //1.接收到app的手机号和密码
        return appService.login(user);
    }

    @PutMapping("/update")
    public RespBean updateUserNameById(@RequestBody User user){
        return appService.updateUserNameById(user);
    }
}
