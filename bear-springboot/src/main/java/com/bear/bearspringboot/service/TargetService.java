package com.bear.bearspringboot.service;

import com.bear.bearspringboot.entity.Target;

import java.util.List;

public interface TargetService {
    int addTarget(Target target);

    int updateTarget(Target target);

    List<Target> getTargets(Target target);

    int deleteTargetById(int targetId);

    Target getTargetById(int targetId);

}
