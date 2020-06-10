package com.bear.bearspringboot.controller;

import com.alibaba.fastjson.JSONObject;
import com.bear.bearspringboot.entity.Message;
import com.bear.bearspringboot.service.WebSocketService;
import com.bear.bearspringboot.util.WebSocketServer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.io.IOException;

/**
 * WebSocketController
 * @author zhengkai.blog.csdn.net
 */
@CrossOrigin
@RestController
@RequestMapping("/webSocket")
public class WebSocketController {


    @Autowired
    WebSocketService webSocketService;

    //这里是管理员给普通用户发信息
    @PostMapping("/sendMessage")
    public void sendMessageByUserTel(@RequestBody Message message){
        webSocketService.sendMessage(message);
    }

}

