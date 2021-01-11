package com.bear.bearspringboot.mapper;

import com.bear.bearspringboot.entity.Target;

import java.util.List;
public interface TargetMapper {

    int addTarget(Target target);

    int updateTarget(Target target);

    List<Target> getTargets(Target target);

    int deleteTargetById(int targetId);

    Target getTargetById(int targetId);

}
