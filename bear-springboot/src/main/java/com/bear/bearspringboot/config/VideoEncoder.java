package com.bear.bearspringboot.config;

import com.alibaba.fastjson.JSON;
import com.bear.bearspringboot.entity.Message;
import com.bear.bearspringboot.entity.Video;

import javax.websocket.EncodeException;
import javax.websocket.Encoder;
import javax.websocket.EndpointConfig;
import java.util.Date;

//websocket编码器
public class VideoEncoder implements Encoder.Text<Video>{


    @Override
    public String encode(Video video) throws EncodeException {
        return JSON.toJSONString(video);
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
