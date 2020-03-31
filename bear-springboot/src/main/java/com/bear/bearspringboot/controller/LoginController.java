package com.bear.bearspringboot.controller;


import com.bear.bearspringboot.entity.RespBean;
import com.bear.bearspringboot.entity.User;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {

    @PostMapping("/login")
    public String login(@RequestBody User user){

        //1.接收到app的手机号和密码
        System.out.println(user.toString());
        return "";
    }

    @PostMapping("/update")
    public RespBean updateUserName(@RequestBody User user){
        System.out.println(user.toString());
        return new RespBean("OK",200);
    }
}
