package com.bear.bearspringboot.controller;


import com.bear.bearspringboot.base.BaseController;
import com.bear.bearspringboot.base.TableData;
import com.bear.bearspringboot.entity.Plan;
import com.bear.bearspringboot.entity.Video;
import com.bear.bearspringboot.service.VideoService;
import com.bear.bearspringboot.service.WebService;
import com.bear.bearspringboot.config.WebSocketServer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.*;

@RestController
@RequestMapping("/video")
@CrossOrigin
public class VideoController extends BaseController {

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
        Double lat =Double.parseDouble(request.getParameter("lat"));
        Double lng = Double.parseDouble(request.getParameter("lng"));
        String title = request.getParameter("title");
        String planId = request.getParameter("planId");
        Date startTime = new Date();
        Video video = new Video();
        video.setUserTel(userTel);
        video.setLat(lat);
        video.setLng(lng);
        video.setFlag(1);
        video.setStartTime(startTime);
        video.setUrl(url);
        video.setTitle(title);
        video.setPlanId(Integer.parseInt(planId));
        //通知前端来新的数据了,可以把这个video对象发过去
        //这里可以利用userTel将所有的直播信息查出来
        videoService.startLive(video);
        webSocketServer.sendLiveVideo(webService.getLiveVideos(video).get(0));

    }

    @RequestMapping("/record")
    public void recordDone(HttpServletRequest request){

        String fileName = request.getParameter("path");
        String userTel = request.getParameter("name");
        String tcurl = request.getParameter("tcurl");
        String[] fileUrl = tcurl.split("/");
// TODO: 2021/1/6 这里路径有点问题
        //这里调用yamdi对视频进行添加关键帧
        String newFileName = metadataToVideo(fileName);
        String path = fileUrl[0]+"//"+fileUrl[2]+newFileName;
        Date date = new Date();
        Video video = new Video();
        video.setEndTime(date);
        video.setFlag(0);
        video.setVideoUrl(path);
        video.setUserTel(userTel);
        Enumeration paramNames = request.getParameterNames();
        while (paramNames.hasMoreElements()) {
            String paraName=(String)paramNames.nextElement();
            System.out.println(paraName+": "+request.getParameter(paraName));
        }
        videoService.recordDone(video);
    }

    public static String metadataToVideo(String path){
        //区分操作系统来进行不同的命令
        String osName = System.getProperty("os.name");
        StringBuilder stringBuffer = new StringBuilder();
        if (osName.equals("Linux")){
            stringBuffer.append("/bin/sh -c yamdi -i");
        }else {
            stringBuffer.append("cmd /c yamdi -i ");
        }
        stringBuffer.append(path);
        stringBuffer.append(" -o ");
        String newPath = path.split("\\.")[0]+"_."+path.split("\\.")[1];
        stringBuffer.append(newPath);
        System.out.println(stringBuffer.toString());
        Runtime runtime = Runtime.getRuntime();
        try {
            runtime.exec(stringBuffer.toString());
        } catch (IOException e) {
            e.printStackTrace();
        }
        return newPath;
    }

    @GetMapping("/videos")
    public TableData getVideosByPlanId(Plan plan) {
        startPage();
        List<Video> videos =  videoService.getVideosByPlanId(plan.getPlanId());
        return getTableData(videos);
    }
}
