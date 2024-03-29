package com.bear.bearspringboot.config;

import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
//解决跨域访问session和cookie失效问题
@WebFilter(urlPatterns = "/*", filterName = "CORSFilter")
public class CORSFilter implements Filter {


    @Override
    public void init(FilterConfig filterConfig) throws ServletException {

    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        HttpServletRequest req = (HttpServletRequest) request;
        HttpServletResponse resp = (HttpServletResponse) response;
        String origin = req.getHeader("Origin");
        if(origin == null) {
            origin = req.getHeader("Referer");
        }
        resp.setHeader("Access-Control-Allow-Origin", origin);//这里不能写*，*代表接受所有域名访问，如写*则下面一行代码无效。谨记
        resp.setHeader("Access-Control-Allow-Credentials", "true");//true代表允许携带cookie
        //下面这两个也很关键啊
    
        resp.setHeader("Access-Control-Allow-Methods", "GET, HEAD, POST, PUT, DELETE, OPTIONS, PATCH");
        resp.setHeader("Access-Control-Allow-Headers", "Content-Type,Access-Token");
//        resp.setHeader("Access-Control-Expose-Headers", "*");
        chain.doFilter(request,response);
    }

    @Override
    public void destroy() {

    }
}
