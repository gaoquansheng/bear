package com.bear.bearspringboot.controller;


import com.bear.bearspringboot.base.AjaxResult;
import com.bear.bearspringboot.base.BaseController;
import com.bear.bearspringboot.entity.User;
import com.bear.bearspringboot.entity.Video;
import com.bear.bearspringboot.service.AppService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/app")
@CrossOrigin
public class AppController extends BaseController {


    @Autowired
    AppService appService;

    @PostMapping("/register")
    public AjaxResult register(@RequestBody User user){
        return appService.register(user);
    }

    @PostMapping("/login")
    public User login(@RequestBody User user){
        //1.接收到app的手机号和密码
        return appService.login(user);
    }
    @GetMapping("/liveHistory/{userTel}")
    public List<Video> liveHistory(@PathVariable String userTel){
        return appService.liveHistory(userTel);
    }
    @PutMapping("/update")
    public AjaxResult updateUserNameByUserTel(@RequestBody User user){
        return toAjax(appService.updateUserNameByUserTel(user));
    }
}
