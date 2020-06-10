package com.bear.bearspringboot.util;

import com.alibaba.fastjson.JSON;
import com.bear.bearspringboot.entity.Message;
import com.bear.bearspringboot.entity.Video;

import javax.websocket.DecodeException;
import javax.websocket.Decoder;
import javax.websocket.EndpointConfig;

public class WebSocketDecoder implements Decoder.Text<Message> {
    @Override
    public Message decode(String s) throws DecodeException {
        System.out.println("过来解码了");
        System.out.println(s);
        return JSON.parseObject(s,Message.class);
    }

    @Override
    public boolean willDecode(String s) {
        return (s != null);
    }

    @Override
    public void init(EndpointConfig endpointConfig) {
        System.out.println("解码器初始化了");
    }

    @Override
    public void destroy() {
        System.out.println("解码器销毁了");
    }
}
