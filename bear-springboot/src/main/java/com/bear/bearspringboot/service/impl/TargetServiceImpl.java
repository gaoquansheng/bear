package com.bear.bearspringboot.service.impl;

import com.bear.bearspringboot.entity.Target;
import com.bear.bearspringboot.mapper.TargetMapper;
import com.bear.bearspringboot.service.TargetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpSession;
import java.util.List;

@Service
public class TargetServiceImpl implements TargetService {

    @Autowired
    TargetMapper targetMapper;

    @Autowired
    HttpSession session;

    @Override
    public int addTarget(Target target) {
        String userTel =(String) session.getAttribute("userTel");
        target.setUserTel(userTel);
        return targetMapper.addTarget(target);

    }

    @Override
    public int updateTarget(Target target) {
       return targetMapper.updateTarget(target);
    }

    @Override
    public List<Target> getTargets(Target target) {
        return targetMapper.getTargets(target);
    }

    @Override
    public int deleteTargetById(int indexId) {
        return targetMapper.deleteTargetById(indexId);
    }

    @Override
    public Target getTargetById(int indexId) {
        return targetMapper.getTargetById(indexId);
    }


}
