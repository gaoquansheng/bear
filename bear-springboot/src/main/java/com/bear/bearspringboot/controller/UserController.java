package com.bear.bearspringboot.controller;

import com.bear.bearspringboot.base.AjaxResult;
import com.bear.bearspringboot.base.BaseController;
import com.bear.bearspringboot.base.TableData;
import com.bear.bearspringboot.entity.User;
import com.bear.bearspringboot.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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
        return userService.addUser(user);
    }

    @GetMapping("/users")
    public TableData getUsers(User user){
        startPage();
        return getTableData(userService.getUsers(user));
    }

    @GetMapping("/allUsers")
    public List<User> getAllUsers(){
        return userService.getAllUsers();
    }


    @GetMapping("/users/{userTel}")
    public AjaxResult findByUserTel(@PathVariable("userTel") String userTel){
        return AjaxResult.success(userService.findByUserTel(userTel));

    }

    @PutMapping("/users")
    public AjaxResult update(@RequestBody User user,@RequestParam("oldUserTel") String oldUserTel){
        return userService.update(user,oldUserTel);
    }
    @DeleteMapping("/users/{userTel}")
    public AjaxResult deleteByUserTel(@PathVariable("userTel") String userTel){
        return userService.deleteByUserTel(userTel);
    }

    //通过主键(手机号)来批量删除用户
    @RequestMapping("/deleteUserList")
    public AjaxResult batchDeleteUsers(@RequestParam("userTels") String userTels){
        System.out.println(userTels);
        String[] split = userTels.split(",");
        List<String> userTelList = new LinkedList<>();
        for (String i : split){
            userTelList.add(i);
        }
        return toAjax(userService.batchDeleteUsers(userTelList));
    }
}
