package com.bear.bearspringboot.controller;


import com.bear.bearspringboot.base.AjaxResult;
import com.bear.bearspringboot.base.BaseController;
import com.bear.bearspringboot.base.TableData;
import com.bear.bearspringboot.entity.User;
import com.bear.bearspringboot.entity.Video;
import com.bear.bearspringboot.service.WebService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.*;

@RestController
@RequestMapping("/web")
@CrossOrigin
public class WebController extends BaseController {

    @Autowired
    WebService webService;


    @PostMapping("/login")
    public AjaxResult login(@RequestBody User user){
        return webService.login(user);
    }

    @PostMapping("/liveVideos")
    public List<Video> getLiveVideos(@RequestBody(required = false) Video video){
       return webService.getLiveVideos(video);
    }

    @PostMapping("/videos")
    public List<Video> getRecordVideos(@RequestBody Video video){
        return webService.getRecordVideos(video);
    }

    @PostMapping("/latestVideos")
    public List<Video> getLatestVideos(@RequestBody Video video){
        return webService.getLatestVideos(video);
    }

    @GetMapping("/updatePwd/{pwd}/{newPwd}")
    public void updatePwd(@PathVariable("pwd") String pwd, @PathVariable("newPwd") String newPwd){
        webService.updatePwd(pwd, newPwd);
    }
}
