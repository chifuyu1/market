package com.market.app.dao;

import com.market.app.service.dto.FavoritesResponseDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface FavoritesDAO {
    /**
     * @param memberId
     * @return
     * @throws Exception
     */
    List<FavoritesResponseDto> findFavoritesByMemberId(Integer memberId) throws Exception;
}