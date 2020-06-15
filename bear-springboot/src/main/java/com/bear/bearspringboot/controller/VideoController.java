package com.bear.bearspringboot.controller;


import com.bear.bearspringboot.entity.Video;
import com.bear.bearspringboot.service.VideoService;
import com.bear.bearspringboot.service.WebService;
import com.bear.bearspringboot.util.WebSocketServer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.Arrays;
import java.util.Date;
import java.util.Enumeration;
import java.util.List;

@RestController
@RequestMapping("/video")
@CrossOrigin
public class VideoController {
    
    @Autowired
    VideoService videoService;
    @Autowired
    WebSocketServer webSocketServer;
    @Autowired
    WebService webService;

    @RequestMapping("/publish")
    public void startLive(HttpServletRequest request) throws Exception{
//        传递&的时候需要用双引号裹起来
        String userTel = request.getParameter("name");
        String tcurl = request.getParameter("tcurl");
        String url =tcurl+"/"+userTel;
        String lat = request.getParameter("lat");
        String lng = request.getParameter("lng");
        Date startTime = new Date();
        Video video = new Video();
        video.setUserTel(userTel);
        video.setLat(lat);
        video.setLng(lng);
        video.setFlag(1);
        video.setStartTime(startTime);
        video.setUrl(url);
        //通知前端来新的数据了,可以把这个video对象发过去
        //这里可以利用userTel将所有的直播信息查出来
        videoService.startLive(video);
//        webSocketServer.sendLiveVideo(webService.getLiveVideos(video).get(0));

    }

    @RequestMapping("/record")
    public void recordDone(HttpServletRequest request){
        System.out.println("结束了");
        String fileName = request.getParameter("path");
        String userTel = request.getParameter("name");
        String tcurl = request.getParameter("tcurl");
        String[] fileUrl = tcurl.split("/");
        String path = fileUrl[0]+"//"+fileUrl[2]+fileName;
        System.out.println(path);
        Date date = new Date();
        Video video = new Video();
        video.setEndTime(date);
        video.setFlag(0);
        video.setVideoUrl(path);
        video.setUserTel(userTel);
        videoService.recordDone(video);
    }

}
