package com.bear.bearspringboot.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.PrintWriter;

/**
 * @author bear
 * @date 2021-04-23 15:13
 */
public class PermissionInterceptor implements HandlerInterceptor {

//    @Autowired
//    private HttpSession session;//这里无法自动注入
//    @Bean
//    public HttpSession getSession(){
//
//    }

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        HttpSession session = request.getSession();
        String userTel = (String) session.getAttribute("userTel");
        System.out.println(userTel);
        System.out.println("==========");
        //options请求放行
        if (request.getMethod().equals("OPTIONS")) {
            return true;
        }
        if(userTel == null){
            response.setCharacterEncoding("UTF-8");
            response.setContentType("application/json;charset=utf-8");
            PrintWriter writer = response.getWriter();
            writer.write("9999");
            return false;
        }
        return true;
    }

    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {

    }

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {

    }
}
