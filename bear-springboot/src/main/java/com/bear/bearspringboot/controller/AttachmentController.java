package com.bear.bearspringboot.controller;


import com.bear.bearspringboot.entity.Attachment;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/attachment")
public class AttachmentController {

    @PostMapping("/upload")
    public void upload(MultipartFile file){
        System.out.println(file.getOriginalFilename());
        //接收文件存储返回文件名
        //首先获得文件的后缀名
        
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
