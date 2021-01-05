package com.bear.bearspringboot.service.impl;

import com.bear.bearspringboot.entity.Attachment;
import com.bear.bearspringboot.mapper.AttachmentMapper;
import com.bear.bearspringboot.service.AttachmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AttachmentImpl implements AttachmentService {

    @Autowired
    AttachmentMapper attachmentMapper;

    @Override
    public void addAttachment(Attachment attachment) {
        attachmentMapper.addAttachment(attachment);
    }

    @Override
    public List<Attachment> getAttachments(Attachment attachment) {
        return attachmentMapper.getAttachments(attachment);
    }


    @Override
    public void deleteAttachmentById(int attachmentId) {
        attachmentMapper.deleteAttachmentById(attachmentId);
    }

    @Override
    public Attachment getAttachmentById(int attachmentId) {
        return attachmentMapper.getAttachmentById(attachmentId);
    }
}
