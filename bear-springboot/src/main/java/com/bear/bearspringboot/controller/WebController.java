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
    @Autowired
    HttpServletRequest request;

    @PostMapping("/login")
    public User login(@RequestBody User user, HttpServletRequest request){
        HttpSession session = request.getSession();
        session.setAttribute("userTel", user.getUserTel());
        return webService.login(user);
    }

    //这里为历史录播,返回title不为空的数据
    @PostMapping("/videos")
    public List<Video> getRecordVideos(@RequestBody Video video){
        //这里直接传递日期字符串
        return webService.getRecordVideos(video);
    }

    //这里为最新录播,返回title为空的数据
    @PostMapping("/latestVideos")
    public List<Video> getLatestVideos(@RequestBody Video video){
        //这里将日期进行处理
        return webService.getLatestVideos(video);
    }
    //根据传递过来的Id修改标题
    @GetMapping("/addTitle")
    public AjaxResult addTitleByIds(@RequestParam("ids") String ids, @RequestParam("title") String title){
        String[] allId = ids.split(",");
        return webService.addTitleById(allId,title);

    }

    @PostMapping("/liveVideos")
    public List<Video> getLiveVideos(@RequestBody(required = false) Video video){
       return webService.getLiveVideos(video);
    }
}
