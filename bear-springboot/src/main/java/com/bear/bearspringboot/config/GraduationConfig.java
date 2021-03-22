package com.bear.bearspringboot.config;


import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;
//配置文件的实体类,通过set进行注入的,方法不能为static
@Component
@ConfigurationProperties(prefix = "graduation")
public class GraduationConfig {

    private static String path;
    private static String hlsExt;
    private static String hlsPre;
    private static String hlsPort;

    public static String getHlsPre() {
        return hlsPre;
    }

    public void setHlsPre(String hlsPre) {
        GraduationConfig.hlsPre = hlsPre;
    }

    public static String getHlsPort() {
        return hlsPort;
    }

    public void setHlsPort(String hlsPort) {
        GraduationConfig.hlsPort = hlsPort;
    }

    public static String getHlsExt() {
        return hlsExt;
    }

    public void setHlsExt(String hlsExt) {
        GraduationConfig.hlsExt = hlsExt;
    }

    public static String getPath() {
        return path;
    }

    public void setPath(String path) {
        GraduationConfig.path = path;
    }
}
