package com.bear.bearspringboot.mapper;

import com.bear.bearspringboot.entity.Attachment;

import java.util.List;

public interface AttachmentMapper {

    int addAttachment(Attachment attachment);

    List<Attachment> getAttachments(Attachment attachment);

    int deleteAttachmentById(int attachmentId);

    Attachment getAttachmentById(int attachmentId);
}
