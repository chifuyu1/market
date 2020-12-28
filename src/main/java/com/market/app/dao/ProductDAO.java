package com.market.app.dao;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface ProductDAO {
    String selectNow() throws Exception;
}
