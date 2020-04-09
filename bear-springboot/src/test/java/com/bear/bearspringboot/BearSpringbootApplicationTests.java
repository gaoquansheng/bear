package com.bear.bearspringboot;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Arrays;

@SpringBootTest
class BearSpringbootApplicationTests {

    public static void main(String[] args) {
        String test = "rtmp://localhost:1935/live";
        String[] split = test.split("/");
        System.out.println(Arrays.toString(split));
        System.out.println(split[0]+"//"+split[2]);
    }

}
