package com.bear.bearspringboot.util;

import com.alibaba.fastjson.JSON;
import com.bear.bearspringboot.entity.Message;

import javax.websocket.EncodeException;
import javax.websocket.Encoder;
import javax.websocket.EndpointConfig;
import java.util.Date;

//websocket编码器
public class WebSocketEncoder implements Encoder.Text<Message>{
    @Override
    public String encode(Message message) throws EncodeException {
        return JSON.toJSONString(message);
    }

    @Override
    public void init(EndpointConfig endpointConfig) {
        System.out.println("编码器初始化了");
    }

    @Override
    public void destroy() {
        System.out.println("编码器销毁了");

    }
}
