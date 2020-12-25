package com.bear.bearspringboot;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.LinkedList;

@SpringBootTest
class BearSpringbootApplicationTests {

    public static void main(String[] args) {

        ArrayList<String> objects1 = new ArrayList<>();
        LinkedList<String> objects2 = new LinkedList<>();
        objects1.add("1");
        objects1.add("2");
        objects1.add("3");

        objects2.add("1");
        objects2.add("12");
        objects2.add("3");

        objects1.removeAll(objects2);
        System.out.println(objects1);
        System.out.println(objects2);
    }

}
