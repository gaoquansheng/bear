package com.bear.bearspringboot.service;

import com.bear.bearspringboot.entity.Attachment;

import java.util.List;

public interface AttachmentService {

    public void addAttachment(Attachment attachment);

    List<Attachment> getAttachmentsByPlanId(int planId);

    void deleteAttachmentById(int attachmentId);

    Attachment getAttachmentById(int attachmentId);
}
