package com.bear.bearspringboot;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.server.ConfigurableWebServerFactory;
import org.springframework.boot.web.server.ErrorPage;
import org.springframework.boot.web.server.WebServerFactoryCustomizer;
import org.springframework.boot.web.servlet.ServletComponentScan;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;

import java.io.FileInputStream;
import java.io.InputStream;
import java.io.Reader;
import java.io.Writer;
import java.util.ArrayDeque;
import java.util.Objects;

@SpringBootApplication
@MapperScan("com.bear.bearspringboot.mapper")
@ServletComponentScan
public class BearSpringbootApplication {

    public static void main(String[] args) {
        SpringApplication.run(BearSpringbootApplication.class, args);
    }

    //解决vue项目刷新页面之后显示Whitelabel Error Page的问题
    @Bean
    public WebServerFactoryCustomizer<ConfigurableWebServerFactory> webServerFactoryCustomizer(){
        return factory -> {
            ErrorPage error404Page = new ErrorPage(HttpStatus.NOT_FOUND, "/index.html");
            factory.addErrorPages(error404Page);
        };
    }

}
