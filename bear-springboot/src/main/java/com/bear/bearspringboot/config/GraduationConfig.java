package com.bear.bearspringboot.config;


import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Component
@ConfigurationProperties(prefix = "graduation")
public class GraduationConfig {

    private static String uploadPath;

    public static String getUploadPath() {
        return uploadPath;
    }

    public static void setUploadPath(String uploadPath) {
        GraduationConfig.uploadPath = uploadPath;
    }
}
