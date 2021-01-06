package com.bear.bearspringboot.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

//文件虚拟url映射为真实的url//
@Configuration
public class FileMappingConfig implements WebMvcConfigurer {

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler(Constants.RESOURCE_PREFIX+"**")
                .addResourceLocations("file:"+GraduationConfig.getPath()+"/");
    }
}
