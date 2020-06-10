package com.bear.bearspringboot.service;

import com.bear.bearspringboot.entity.Message;

public interface WebSocketService {

    public void sendMessage(Message message);
}
