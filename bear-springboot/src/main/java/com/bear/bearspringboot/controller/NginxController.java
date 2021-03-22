package com.bear.bearspringboot.controller;


import com.bear.bearspringboot.base.BaseController;
import com.bear.bearspringboot.base.TableData;
import com.bear.bearspringboot.config.GraduationConfig;
import com.bear.bearspringboot.entity.Plan;
import com.bear.bearspringboot.entity.Video;
import com.bear.bearspringboot.service.NginxService;
import com.bear.bearspringboot.service.WebService;
import com.bear.bearspringboot.config.WebSocketServer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.io.InputStream;
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
        String tcurl = request.getParameter("tcurl");
        String nginxIP = tcurl.split(":")[1];
        String userTel = request.getParameter("name");
        String application = request.getParameter("app");
        String url = GraduationConfig.getHlsPre() + ":" + nginxIP + ":" + GraduationConfig.getHlsPort() + "/" + application
                + "/" + userTel + GraduationConfig.getHlsExt();

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
        nginxService.startLive(video);
        webSocketServer.sendLiveVideo(webService.getLiveVideos(video).get(0));
    }

    @RequestMapping("/record")
    public void recordDone(HttpServletRequest request) throws IOException, InterruptedException {
        System.out.println("录制结束");

        //首先使用yamdi给视频添加元数据，返回新的路径
        String path = request.getParameter("path");
        String fileName = metadataToVideo(path);

        //然后组合成录播路径
        String application = request.getParameter("app");
        String tcurl = request.getParameter("tcurl");
        String nginxIP = tcurl.split(":")[1];

        //路径格式为：http://ip:port/application/fileName
        String videoUrl = GraduationConfig.getHlsPre()+":"+nginxIP+":"+GraduationConfig.getHlsPort()+"/"
                +application+"/"+fileName;

        String userTel = request.getParameter("name");
        Date date = new Date();
        Video video = new Video();
        video.setVideoUrl(videoUrl);
        video.setUserTel(userTel);
        video.setEndTime(date);
        video.setFlag(0);

//        Enumeration paramNames = request.getParameterNames();
//        while (paramNames.hasMoreElements()) {
//            String paraName=(String)paramNames.nextElement();
//            System.out.println(paraName+": "+request.getParameter(paraName));
//        }
        nginxService.recordDone(video);
    }

    public static String metadataToVideo(String path) throws IOException, InterruptedException {
        //区分操作系统来进行不同的命令
        String osName = System.getProperty("os.name");
        StringBuilder stringBuffer = new StringBuilder();
        if (osName.equals("Linux")){
            stringBuffer.append("/bin/sh -c yamdi -i ");
        }else {
            stringBuffer.append("cmd /c yamdi -i ");
        }

        stringBuffer.append(path);
        stringBuffer.append(" -o ");
        String newPath = path.split("\\.")[0]+"_."+path.split("\\.")[1];
        stringBuffer.append(newPath);
        System.out.println(stringBuffer.toString());

        Runtime.getRuntime().exec(stringBuffer.toString());
        return newPath.split("/")[newPath.split("/").length - 1];
    }

    @GetMapping("/videos")
    public TableData getVideosByPlanId(Plan plan) {
        startPage();
        List<Video> videos =  nginxService.getVideosByPlanId(plan.getPlanId());
        return getTableData(videos);
    }
}
