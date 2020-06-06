package com.bear.bearspringboot.controller;

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
@RequestMapping("/websocket")
public class WebSocketController {

    @Autowired
    WebSocketServer webSocketServer;

    @RequestMapping("/test/{userTel}")
    public void test(@PathVariable String userTel){
        try {
            webSocketServer.sendMessage("halo world",userTel);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

}

