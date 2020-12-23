package com.bear.bearspringboot.config;


import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Component
@ConfigurationProperties(prefix = "graduation")
public class GraduationConfig {

    @Value("")
    private static String path;

    public static String getPath() {
        return path;
    }

    public void setPath(String path) {
        GraduationConfig.path = path;
    }
}
