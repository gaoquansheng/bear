package com.bear.bearspringboot;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("com.bear.bearspringboot.dao")
public class BearSpringbootApplication {

    public static void main(String[] args) {
        SpringApplication.run(BearSpringbootApplication.class, args);
    }

}
