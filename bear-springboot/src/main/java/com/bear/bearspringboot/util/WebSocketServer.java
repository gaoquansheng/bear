package com.bear.bearspringboot.util;

import java.io.IOException;
import java.util.concurrent.ConcurrentHashMap;
import javax.websocket.*;
import javax.websocket.server.PathParam;
import javax.websocket.server.ServerEndpoint;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.bear.bearspringboot.entity.Message;
import com.bear.bearspringboot.entity.Video;
import org.springframework.stereotype.Component;



@ServerEndpoint(value = "/imserver/{userTel}",encoders = {WebSocketEncoder.class},decoders = {WebSocketDecoder.class})
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
    /**
     * 收到客户端消息后调用的方法
     *
     * @param message 客户端发送过来的消息*/
    @OnMessage
    public void onMessage(Session session,Message message)throws Exception {
        System.out.println("接收到用户发来的消息:报文:"+message);
        //这里接受消息,然后发送
        for (String userTel:message.getReceivedUserTel().split(",")){
            webSocketMap.get(userTel).session.getBasicRemote().sendObject(message);
        }
        //可以群发消息
        //消息保存到数据库、redis
//        if(StringUtils.isNotBlank(message)){
//            try {
//                //解析发送的报文
//                JSONObject jsonObject = JSON.parseObject(message);
//                //追加发送人(防止串改)
//                jsonObject.put("fromuserTel",this.userTel);
//                String touserTel=jsonObject.getString("touserTel");
//                //传送给对应touserTel用户的websocket
//                if(StringUtils.isNotBlank(touserTel)&&webSocketMap.containsKey(touserTel)){
//                    webSocketMap.get(touserTel).sendMessage(jsonObject.toJSONString());
//                }else{
//                    System.out.println("请求的userTel:"+touserTel+"不在该服务器上");
//                    //否则不在这个服务器上，发送到mysql或者redis
//                }
//            }catch (Exception e){
//                e.printStackTrace();
//            }
//        }
    }


    //将新添加的直播信息发送给管理员用户
    public void sendLiveVideo(Video video){
        // TODO: 2020/6/8 这里对所有的管理员用户发送video信息;
        for(String key: webSocketMap.keySet()){

            //判断
        }
    }

    /**
     * 对已经连接WebSocket的所有用户发送消息
     */
//    public void sendMessage(Object message) throws IOException {
////        System.out.println(this.session);
//        //
//        for(String key: webSocketMap.keySet()){
//            webSocketMap.get(key).session.getBasicRemote().sendText(JSON.toJSONString(message));
//        }
////        this.session.getBasicRemote().sendText(message);
//    }

    /**
     * 对特定的一个用户发送消息
     * */
    public  void sendMessage(Message message) throws IOException, EncodeException {
        //首先判断是发送给多人的还是特定的一个人的
        //这里是发送给所有人
//        if (message.getReceivedUserTel().equals("all")){
//            for(String key: webSocketMap.keySet()){
//                webSocketMap.get(key).session.getBasicRemote().sendObject(message);
//            }
//            //这里是发送给其他人
//        }else {
            for (String userTel:message.getReceivedUserTel().split(",")){
                webSocketMap.get(userTel).session.getBasicRemote().sendObject(message);
            }
//        }

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