package com.market.app.service;

import com.market.app.service.dto.FavoritesResponseDto;
import com.market.app.web.dto.FavoritesRequestDto;

import java.util.List;

public interface FavoritesService {
    /**
     * 찜 목록 조회
     * @param memberId
     * @return
     * @throws Exception
     */
    List<FavoritesResponseDto> findFavorites(Integer memberId) throws Exception;

    /**
     * 찜 삭제
     * @param favoritesId
     * @return
     * @throws Exception
     */
    Integer deleteFavorites(Integer favoritesId) throws Exception;

    /**
     * 찜 등록
     * @param requestDto
     * @return
     * @throws Exception
     */
    Integer insertFavorites(FavoritesRequestDto requestDto) throws Exception;
}