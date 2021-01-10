package com.market.app.dao;

import com.market.app.service.dto.FavoritesResponseDto;
import com.market.app.web.dto.FavoritesRequestDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * 찜 DAO
 */
@Mapper
public interface FavoritesDAO {
    /**
     * 찜 상품 목록 조회
     * @param memberId 회원 아이디
     * @return 상품 목록
     * @throws Exception
     */
    List<FavoritesResponseDto> findFavoritesByMemberId(Integer memberId) throws Exception;

    /**
     * 찜 삭제
     * @param favoritesId 찜 아이디
     * @return 처리 row count
     * @throws Exception
     */
    Integer deleteByFavoritesId(Integer favoritesId) throws Exception;

    /**
     * 찜 등록
     * @param requestDto 찜 요청 dto
     * @return 처리 row count
     * @throws Exception
     */
    Integer insertFavorites(FavoritesRequestDto requestDto) throws Exception;
}