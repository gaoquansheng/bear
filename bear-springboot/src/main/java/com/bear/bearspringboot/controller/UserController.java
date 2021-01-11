package com.bear.bearspringboot.controller;

import com.bear.bearspringboot.base.AjaxResult;
import com.bear.bearspringboot.base.BaseController;
import com.bear.bearspringboot.base.TableData;
import com.bear.bearspringboot.entity.User;
import com.bear.bearspringboot.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;

/**
 * @author bear
 * @date 2021-01-07 16:15
 */
@RestController
@RequestMapping("/user")
public class UserController extends BaseController {

    @Autowired
    UserService userService;

    @PostMapping("/users")
    public AjaxResult addUser(@RequestBody User user){
        return toAjax(userService.addUser(user));
    }

    @DeleteMapping("/users/{userTel}")
    public AjaxResult deleteByUserTel(@PathVariable("userTel") String userTel){
        return toAjax(userService.deleteByUserTel(userTel));
    }

    @RequestMapping("/deleteUserList")
    public AjaxResult batchDeleteUsers(@RequestParam("userTels") String userTels){
        return toAjax(userService.batchDeleteUsers(Arrays.asList(userTels.split(","))));
    }

    @PutMapping("/users")
    public AjaxResult update(@RequestBody User user){
        return toAjax(userService.update(user));
    }

    @GetMapping("/users")
    public TableData getUsers(User user){
        startPage();
        return getTableData(userService.getUsers(user));
    }

    @GetMapping("/users/{userTel}")
    public AjaxResult findByUserTel(@PathVariable("userTel") String userTel){
        return AjaxResult.success(userService.findByUserTel(userTel));
    }





}
