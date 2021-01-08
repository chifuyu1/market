package com.market.app.dao;

import com.market.app.service.dto.CartResponseDto;
import com.market.app.web.dto.CartRequestDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface CartDAO {
    /**
     * 장바구니 등록
     * @param requestDto 등록할 장바구니 정보
     * @return 처리 row count
     */
    Integer insertCart(CartRequestDto requestDto);

    /**
     * 장바구니 목록 조회
     * @param memberId 회원 아이디
     * @return 장바구니 목록
     */
    List<CartResponseDto> findCartsByMemberId(Integer memberId);

    /**
     * 등록된 장바구니 삭제
     * @param requestDto cartId and memberId
     * @return 처리 row count
     */
    Integer deleteCartByCartIdAndMemberId(CartRequestDto requestDto);
}