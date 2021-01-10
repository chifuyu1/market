package com.market.app.service;

import com.market.app.service.dto.CartResponseDto;
import com.market.app.web.dto.CartRequestDto;

import java.util.List;

public interface CartService {
    /**
     * 장바구니 등록
     * @param requestDto
     * @return
     * @throws Exception
     */
    Integer insertCart(CartRequestDto requestDto) throws Exception;

    /**
     * 장바구니 목록 조회
     * @param memberId
     * @return
     * @throws Exception
     */
    List<CartResponseDto> findCartList(Integer memberId) throws Exception;

    /**
     * 장바구니 삭제
     * @param cartId
     * @return
     * @throws Exception
     */
    Integer deleteCart(Integer cartId) throws Exception;
}