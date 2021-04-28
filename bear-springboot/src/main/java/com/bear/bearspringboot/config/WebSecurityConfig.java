package com.bear.bearspringboot.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * @author bear
 * @date 2021-04-23 15:15
 */
@Configuration
public class WebSecurityConfig implements WebMvcConfigurer {

    //拦截器使用的类没有被spring管理,所以这里使用了new来创建对象，没有被spring管理的对象是无法自动注入的
    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(new PermissionInterceptor())
                .addPathPatterns("/**")
                .excludePathPatterns("/web/login");
    }
}
