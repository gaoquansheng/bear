package com.bear.bearspringboot.base;

/**
 * @author bear
 * @date 2020-12-31 09:50
 */
public class HttpStatus {

    /**
     * 操作成功
     */
    public static final int SUCCESS = 200;


    /**
     * 资源已被移除
     */
    public static final int MOVED_PERM = 301;

    /**
     * 重定向
     */
    public static final int SEE_OTHER = 303;

    /**
     * 资源没有被修改
     */
    public static final int NOT_MODIFIED = 304;

    /**
     * 参数列表错误（缺少，格式不匹配）
     */
    public static final int BAD_REQUEST = 400;

    /**
     * 资源，服务未找到
     */
    public static final int NOT_FOUND = 404;

    /**
     * 不允许的http方法
     */
    public static final int BAD_METHOD = 405;


    /**
     * 系统内部错误
     */
    public static final int ERROR = 500;


}
