package com.bear.bearspringboot.service.impl;

import com.bear.bearspringboot.entity.Attachment;
import com.bear.bearspringboot.mapper.AttachmentMapper;
import com.bear.bearspringboot.service.AttachmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpSession;
import java.util.List;

@Service
public class AttachmentImpl implements AttachmentService {

    @Autowired
    AttachmentMapper attachmentMapper;

    @Autowired
    HttpSession session;

    @Override
    public int addAttachment(Attachment attachment) {
        String userTel =(String) session.getAttribute("userTel");
        attachment.setUserTel(userTel);
        return attachmentMapper.addAttachment(attachment);
    }

    @Override
    public List<Attachment> getAttachments(Attachment attachment) {
        return attachmentMapper.getAttachments(attachment);
    }

    @Override
    public int deleteAttachmentById(int attachmentId) {
        return attachmentMapper.deleteAttachmentById(attachmentId);
    }

    @Override
    public Attachment getAttachmentById(int attachmentId) {
        return attachmentMapper.getAttachmentById(attachmentId);
    }
}
