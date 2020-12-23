package com.bear.bearspringboot.controller;


import com.bear.bearspringboot.config.Constants;
import com.bear.bearspringboot.config.GraduationConfig;
import com.bear.bearspringboot.entity.Attachment;
import com.bear.bearspringboot.service.AttachmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/attachment")
public class AttachmentController {

    @Autowired
    AttachmentService attachmentService;


    @PostMapping("/upload")
    public Attachment upload(MultipartFile file, HttpServletRequest request) throws IOException {
        String filename = file.getOriginalFilename();
        String ext = getExt(filename);
        String newFileName = UUID.randomUUID().toString()+ext;
        File absoluteFile = getAbsoluteFile(newFileName);
        file.transferTo(absoluteFile);
        //这里获取路径可能存在问题
        String path = getPathFileName(newFileName,request);
        //获取虚拟路径
        Attachment attachment = new Attachment();
        attachment.setPath(path);
        attachment.setFileName(filename);
        return attachment;
    }

    @PostMapping("/attachments")
    public void addAttachment(@RequestBody Attachment attachment){
        attachmentService.addAttachment(attachment);
    }

    @DeleteMapping("/attachments/{attachmentId}")
    public void deleteAttachmentById(@PathVariable("attachmentId") int attachmentId){
        attachmentService.deleteAttachmentById(attachmentId);
    }

    @PutMapping("/attachments")
    public void updateAttachment(@RequestBody Attachment attachment){

    }

    @GetMapping("/attachments/{planId}")
    public List<Attachment> getAttachmentsByPlanId(@PathVariable("planId") int planId){
        return attachmentService.getAttachmentsByPlanId(planId);
    }

    @GetMapping("/attachments/attachmentId/{attachmentId}")
    public Attachment getAttachmentById(@PathVariable("attachmentId") int attachmentId){
        return attachmentService.getAttachmentById(attachmentId);
    }

    public String getExt(String fileName){
        if (fileName == null){
            return null;
        }
        int index = fileName.lastIndexOf('.');
        if (index == -1){
            //没有后缀名
            System.out.println(fileName);
            return null;
        }
        return fileName.substring(index);
    }

    public File getAbsoluteFile(String fileName) throws IOException {
        String path = GraduationConfig.getPath();
        File file = new File(path, fileName);
        if (!file.getParentFile().exists()){
            file.getParentFile().mkdirs();
        }
        if (!file.exists()){
            file.createNewFile();
        }
        return file;
    }

    public String getPathFileName(String newFileName,HttpServletRequest request){
        StringBuffer requestURL = request.getRequestURL();
        String requestURI = request.getRequestURI();
        String substring = requestURL.substring(0,requestURL.length() - requestURI.length());
        //这里需要加上端口号
        return substring+Constants.RESOURCE_PREFIX+newFileName;
    }

}
