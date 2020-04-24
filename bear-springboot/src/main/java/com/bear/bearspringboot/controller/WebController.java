package com.bear.bearspringboot.controller;


import com.bear.bearspringboot.entity.RespBean;
import com.bear.bearspringboot.entity.User;
import com.bear.bearspringboot.entity.Video;
import com.bear.bearspringboot.service.WebService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

@RestController
@RequestMapping("/web")
@CrossOrigin
public class WebController {

    @Autowired
    WebService webService;

    @GetMapping("/users")
    public Map<String,Object> findAll(HttpServletRequest request){
        String limit= request.getParameter("limit");
        String offset = request.getParameter("offset");
        int total = webService.countUsers();
        List<User> users = webService.findAll(Integer.parseInt(limit), Integer.parseInt(offset));
        Map<String,Object> map = new HashMap<>();
        map.put("users",users);
        map.put("total",total);
        return map;
    }
    @GetMapping("/users/{userTel}")
    public User findByUserTel(@PathVariable("userTel") String userTel){
        return webService.findByUserTel(userTel);

    }
    @PostMapping("/users")
    public RespBean save(@RequestBody User user){
        return webService.save(user);
    }

    @PutMapping("/users")
    public RespBean update(@RequestBody User user,@RequestParam("oldUserTel") String oldUserTel){
        System.out.println(oldUserTel);
        System.out.println(user);
        return webService.update(user,oldUserTel);
    }

    @DeleteMapping("/users/{userTel}")
    public RespBean deleteByUserTel(@PathVariable("userTel") String userTel){
        return webService.deleteByUserTel(userTel);
    }
    //通过主键(手机号)来批量删除用户
    @RequestMapping("/deleteUserList")
    public void batchDeleteUsers(@RequestParam("userTels") String userTels){
        System.out.println(userTels);
        String[] split = userTels.split(",");
        List<String> userTelList = new LinkedList<>();
        for (String i : split){
            userTelList.add(i);
        }
        webService.batchDeleteUsers(userTelList);

    }
    @PostMapping("/login")
    public RespBean login(@RequestBody User user){
        return webService.login(user);
    }

    @GetMapping("/videos")
    public List<Video> findAllVideos(@RequestParam("flag") String flag,@RequestParam(value = "title",required = false) String title,@RequestParam(value = "timeRange",required = false) String dates){
        System.out.println(title);
        //这里封装一个video对象吧
        Video video = new Video();
        video.setFlag(Integer.parseInt(flag));
        if (title != null){
            video.setTitle(title);
        }
        System.out.println(dates);
        if (dates != null && !dates.isEmpty()){
            try {
                Date start = new SimpleDateFormat("yyyy-MM-dd").parse(dates.split(",")[0]);
                Date end = new SimpleDateFormat("yyyy-MM-dd").parse(dates.split(",")[1]);
                video.setStartTime(start);
                video.setEndTime(end);
            } catch (ParseException e) {
                e.printStackTrace();
            }
        }
        return webService.findAllVideos(video);
    }
}
