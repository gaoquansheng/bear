package com.bear.bearspringboot.base;

import java.util.HashMap;

/**
 * @author bear
 * @date 2020-12-30 10:46
 */
public class AjaxResult  extends HashMap<String,Object> {
    //状态码
    private static final String CODE_TAG = "code";
    //返回内容
    private static final String MSG_TAG = "msg";
    //数据对象
    private static final String DATA_TAG = "data";

    //初始化一个空对象,表示一个空消息
    public AjaxResult() {

    }

    public AjaxResult(int code, String msg){
        super.put(CODE_TAG, code);
        super.put(MSG_TAG, msg);
    }

    public AjaxResult(int code, String msg, Object data){
        super.put(CODE_TAG, code);
        super.put(MSG_TAG, msg);
        if (!(data == null)){
            super.put(DATA_TAG,data);
        }
    }
    //四个成功
    public static AjaxResult success(){
        return success("操作成功");
    }
    public static AjaxResult success(String msg){
        return success(msg,null);
    }
    public static AjaxResult success(Object data){
        return success("操作成功", data);
    }
    public static AjaxResult success(String msg, Object data){
        return new AjaxResult(HttpStatus.SUCCESS, msg, data);
    }
    //四个失败
    public static AjaxResult error(){
        return error("操作失败");
    }
    public static AjaxResult error(String msg){
        return error(msg, null);
    }
    public static AjaxResult error(String msg, Object data){
        return new AjaxResult(HttpStatus.ERROR, msg, data);
    }
    public static AjaxResult error(int code, String msg){
        return new AjaxResult(code, msg, null);
    }
}
