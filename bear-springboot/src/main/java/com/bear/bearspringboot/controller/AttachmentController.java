package com.bear.bearspringboot.controller;


import com.bear.bearspringboot.entity.Attachment;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/attachment")
public class AttachmentController {

    @PostMapping("/upload")
    public void upload(MultipartFile multipartFile){

    }

    @PostMapping("/attachments")
    public void addAttachment(@RequestBody Attachment attachment){

    }

    @DeleteMapping("/attachments/{attachmentId}")
    public void deleteAttachmentById(@PathVariable("attachmentId") int attachmentId){

    }

    @PutMapping("/attachments")
    public void updateAttachment(@RequestBody Attachment attachment){

    }

    @GetMapping("/attachments")
    public void getAttachments(){

    }
}
