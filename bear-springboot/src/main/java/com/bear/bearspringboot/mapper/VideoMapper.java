package com.bear.bearspringboot.mapper;

import com.bear.bearspringboot.entity.Video;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface VideoMapper {

    public int startLive(Video video);
    public int recordDone(Video video);

}
