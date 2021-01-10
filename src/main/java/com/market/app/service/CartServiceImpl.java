package com.market.app.service;

import com.market.app.dao.CartDAO;
import com.market.app.service.dto.CartResponseDto;
import com.market.app.web.dto.CartRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CartServiceImpl implements CartService {
    private final CartDAO cartDAO;
    @Override
    public Integer insertCart(CartRequestDto requestDto) throws Exception {
        return cartDAO.insertCart(requestDto);
    }

    @Override
    public List<CartResponseDto> findCartList(Integer memberId) throws Exception {
        return cartDAO.findCartsByMemberId(memberId);
    }

    @Override
    public Integer deleteCart(Integer cartId) throws Exception {
        return cartDAO.deleteCartByCartId(cartId);
    }
}