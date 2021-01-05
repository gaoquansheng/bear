package com.bear.bearspringboot.controller;


import com.bear.bearspringboot.base.BaseController;
import com.bear.bearspringboot.base.TableData;
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
public class WebController extends BaseController {

    @Autowired
    WebService webService;
    @Autowired
    HttpServletRequest request;

    @GetMapping("/allUsers")
    public List<User> getAllUsers(){
        return webService.getAllUsers();
    }

    @GetMapping("/users")
    public TableData findAll(){
        startPage();
        List<User> all = webService.findAll();
        return getTableData(all);
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
    public User login(@RequestBody User user){
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
    public RespBean addTitleByIds(@RequestParam("ids") String ids, @RequestParam("title") String title){
        String[] allId = ids.split(",");
        return webService.addTitleById(allId,title);

    }

    @PostMapping("/liveVideos")
    public List<Video> getLiveVideos(@RequestBody(required = false) Video video){
       return webService.getLiveVideos(video);
    }
}
