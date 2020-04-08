package com.bear.bearspringboot.controller;


import com.bear.bearspringboot.entity.Video;
import com.bear.bearspringboot.service.VideoService;
import org.springframework.beans.factory.annotation.Autowired;
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
public class VideoController {
    
    @Autowired
    VideoService videoService;

    @RequestMapping("/publish")
    public void startLive(HttpServletRequest request) {

//        传递&的时候需要用双引号裹起来
        String userName = request.getParameter("name");
        String tcurl = request.getParameter("tcurl");
        String url =tcurl+"/"+userName;
        float lat = Float.parseFloat(request.getParameter("lat"));
        float lng = Float.parseFloat(request.getParameter("lng"));
        Date startTime = new Date();
        Video video = new Video();
        video.setUserName(userName);
        video.setLat(lat);
        video.setLng(lng);
        video.setFlag(1);
        video.setStartTime(startTime);
        video.setUrl(url);
        videoService.startLive(video);
    }

    @RequestMapping("/record_done")
    public void recordDone(HttpServletRequest request){
        String fileName = request.getParameter("path");
        String userName = request.getParameter("name");
//        String tcurl = request.getParameter("tcurl");
////        String fileUrl = tcurl.split("/");
        videoService.recordDone(fileName,userName);
    }

    @GetMapping("/live")
    public List<Video> live(){
        return videoService.live();
    }

    @GetMapping("/record")
    public List<Video> record(){
        return videoService.record();
    }
}
