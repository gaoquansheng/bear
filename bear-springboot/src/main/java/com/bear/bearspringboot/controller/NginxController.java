package com.bear.bearspringboot.controller;


import com.bear.bearspringboot.base.BaseController;
import com.bear.bearspringboot.base.TableData;
import com.bear.bearspringboot.entity.Plan;
import com.bear.bearspringboot.entity.Video;
import com.bear.bearspringboot.service.NginxService;
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
public class NginxController extends BaseController {

    @Autowired
    NginxService nginxService;
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
        System.out.println(video);
        nginxService.startLive(video);
        webSocketServer.sendLiveVideo(webService.getLiveVideos(video).get(0));

    }

    @RequestMapping("/record")
    public void recordDone(HttpServletRequest request){
        System.out.println("录制结束");
        String fileName = request.getParameter("path");
        String userTel = request.getParameter("name");
        String tcurl = request.getParameter("tcurl");
        String[] fileUrl = tcurl.split("/");
// TODO: 2021/1/6 这里路径有点问题
        //这里调用yamdi对视频进行添加关键帧
//        rtmp://192.168.1.17:1935C:/record/15516392388-1610349362_.flv
        //这里应该是rtmp://192.168.1.17:1935/vod/15516392388-1610349362_.flv
        String newPath = metadataToVideo(fileName);
        String[] split = newPath.split("/");
        String newFileName = split[split.length - 1];
        String path = fileUrl[0]+"//"+fileUrl[2]+"/vod/"+newFileName;
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
        nginxService.recordDone(video);
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
            Process exec = runtime.exec(stringBuffer.toString());

            System.out.println(exec.exitValue());
        } catch (IOException e) {
            e.printStackTrace();
        }
        return newPath;
    }

    @GetMapping("/videos")
    public TableData getVideosByPlanId(Plan plan) {
        startPage();
        List<Video> videos =  nginxService.getVideosByPlanId(plan.getPlanId());
        return getTableData(videos);
    }
}
