package com.bear.bearspringboot.service;

import com.bear.bearspringboot.entity.Attachment;

import java.util.List;

public interface AttachmentService {

    public int addAttachment(Attachment attachment);

    List<Attachment> getAttachments(Attachment attachment);

    int deleteAttachmentById(int attachmentId);

    Attachment getAttachmentById(int attachmentId);
}
