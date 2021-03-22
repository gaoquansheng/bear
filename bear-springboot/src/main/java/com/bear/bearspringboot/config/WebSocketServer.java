package com.bear.bearspringboot.config;

import java.io.IOException;
import java.util.concurrent.ConcurrentHashMap;
import javax.websocket.*;
import javax.websocket.server.PathParam;
import javax.websocket.server.ServerEndpoint;

import com.bear.bearspringboot.entity.Message;
import com.bear.bearspringboot.entity.User;
import com.bear.bearspringboot.entity.Video;
import com.bear.bearspringboot.service.UserService;
import com.bear.bearspringboot.service.impl.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;



@ServerEndpoint(value = "/webSocketServer/{userTel}",encoders = {WebSocketEncoder.class, VideoEncoder.class},decoders = {WebSocketDecoder.class})
@Component
public class WebSocketServer {

    /**静态变量，用来记录当前在线连接数。应该把它设计成线程安全的。*/
    private static int onlineCount = 0;
    /**concurrent包的线程安全Set，用来存放每个客户端对应的MyWebSocket对象。*/
    private static ConcurrentHashMap<String,WebSocketServer> webSocketMap = new ConcurrentHashMap<>();
    /**与某个客户端的连接会话，需要通过它来给客户端发送数据*/
    private Session session;
    /**接收userTel*/
    private String userTel="";

    private static UserService userService;

    @Autowired
    public void setUserService(UserService userService){
        WebSocketServer.userService = userService;
    }

    /**
     * 连接建立成功调用的方法*/
    @OnOpen
    public void onOpen(Session session,@PathParam("userTel") String userTel) {
        this.session = session;
        this.userTel=userTel;
        if(webSocketMap.containsKey(userTel)){
            webSocketMap.remove(userTel);
            webSocketMap.put(userTel,this);
            //加入set中
        }else{
            webSocketMap.put(userTel,this);
            //加入set中
            addOnlineCount();
            //在线数加1
        }

//        log.info("用户连接:"+userTel+",当前在线人数为:" + getOnlineCount());
        System.out.println("用户连接:"+userTel+",当前在线人数为:" + getOnlineCount());

//        try {
//            sendMessage("连接成功");
//        } catch (IOException e) {
//            System.out.println("用户:"+userTel+",网络异常!!!!!!");
//        }
    }
    /**
     * 连接关闭调用的方法
     */
    @OnClose
    public void onClose() {
        if(webSocketMap.containsKey(userTel)){
            webSocketMap.remove(userTel);
            //从set中删除
            subOnlineCount();
        }
        System.out.println("用户退出:"+userTel+",当前在线人数为:" + getOnlineCount());
    }

    @OnError
    public void onError(Session session, Throwable error) {
        System.out.println("用户错误:"+this.userTel+",原因:"+error.getMessage());
        error.printStackTrace();
    }

    @OnMessage
    public void onMessage(Session session,Message message)throws Exception {
        System.out.println("接收到用户发来的消息:报文:"+message);
        User user = userService.findByUserTel(message.getSendUserTel());
        System.out.println(user);
        message.setSendUserName(user.getUserName());
        //这里接受消息,然后发送
        for (String userTel:message.getUserTels().split(",")){
            if(webSocketMap.containsKey(userTel)){
                webSocketMap.get(userTel).session.getBasicRemote().sendObject(message);
            }else{
                System.out.println("未连接");
            }
        }
    }

    //将新添加的直播信息发送给管理员用户
    public void sendLiveVideo(Video video){
        for(String key: webSocketMap.keySet()){
            try {
                //这里给全部的人发送的直播信息，应该要判断一下才行。
                webSocketMap.get(key).session.getBasicRemote().sendObject(video);
            } catch (IOException e) {
                e.printStackTrace();
            } catch (EncodeException e) {
                e.printStackTrace();
            }
        }
    }

    public static synchronized int getOnlineCount() {
        return onlineCount;
    }

    public static synchronized void addOnlineCount() {
        WebSocketServer.onlineCount++;
    }

    public static synchronized void subOnlineCount() {
        WebSocketServer.onlineCount--;
    }
}
