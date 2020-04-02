package com.bear.bearspringboot.controller;


import com.bear.bearspringboot.entity.User;
import com.bear.bearspringboot.service.WebService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/web")
public class WebController {

    @Autowired
    WebService webService;

    @GetMapping("/users")
    public List<User> findAll(){
        return webService.findAll();
    }

    @GetMapping("/users/{userId}")
    public User findByUserId(@PathVariable("userId") int userId){
        return webService.findByUserId(userId);
    }
    @PostMapping("/users")
    public void save(@RequestBody User user){
        webService.save(user);
    }
    @PutMapping("/users")
    public void update(@RequestBody User user){
        webService.update(user);
    }
    @DeleteMapping("/users/{userId}")
    public void deleteByUserId(@PathVariable("userId") int userId){
        webService.deleteByUserId(userId);
    }
}
