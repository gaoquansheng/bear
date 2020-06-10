package com.bear.bearspringboot.service.impl;

import com.bear.bearspringboot.dao.WebSocketMapper;
import com.bear.bearspringboot.entity.Message;
import com.bear.bearspringboot.service.WebSocketService;
import com.bear.bearspringboot.util.WebSocketServer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.websocket.EncodeException;
import java.io.IOException;
import java.util.Date;

@Service
public class WebSocketServiceImpl implements WebSocketService {
    @Autowired
    WebSocketMapper webSocketMapper;
    @Autowired
    WebSocketServer webSocketServer;
    @Override
    public void sendMessage(Message message) {
        message.setSendTime(new Date());
        try {
            webSocketServer.sendMessage(message);
        } catch (Exception e) {
            e.printStackTrace();
        }
        if (webSocketMapper.saveMessage(message) == 1) {
            System.out.println("保存websocket信息成功");
        } else {
            System.out.println("保存websocket信息是吧");
        }
    }
}
