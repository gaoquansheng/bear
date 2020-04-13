package com.bear.bearspringboot.controller;


import com.bear.bearspringboot.entity.RespBean;
import com.bear.bearspringboot.entity.User;
import com.bear.bearspringboot.service.WebService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
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
    @GetMapping("/users/{userId}")
    public User findByUserId(@PathVariable("userId") int userId){
        return webService.findByUserId(userId);

    }
    @PostMapping("/users")
    public RespBean save(@RequestBody User user){
        return webService.save(user);
    }
    @PutMapping("/users")
    public RespBean update(@RequestBody User user){
        return webService.update(user);
    }
    @DeleteMapping("/users/{userId}")
    public RespBean deleteByUserId(@PathVariable("userId") int userId){
        return webService.deleteByUserId(userId);
    }
    @RequestMapping("/deleteUserList")
    public void batchDeleteUsers(@RequestParam("ids") String ids){
        System.out.println(ids);
        String[] split = ids.split(",");
        List<Integer> userList = new LinkedList<>();
        for (String i : split){
            userList.add(Integer.parseInt(i));
        }
        webService.batchDeleteUsers(userList);

    }
    @PostMapping("/login")
    public RespBean login(@RequestBody User user){
        return webService.login(user);
    }
}
