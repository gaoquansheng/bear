package com.bear.bearspringboot;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Arrays;

@SpringBootTest
class BearSpringbootApplicationTests {

    public static void main(String[] args) {
        String property = System.getProperty("os.name");
        System.out.println(property);
        StringBuffer buffer = new StringBuffer();
        buffer.append("cmd /k");
        buffer.append(" yamdi -i \\vod\\bear.flv");
        buffer.append(" -o \\vod\\bear1.flv");

        Runtime runtime = Runtime.getRuntime();
        try {
            runtime.exec(buffer.toString());
        }catch (Exception e){
            e.printStackTrace();
        }
    }

}
