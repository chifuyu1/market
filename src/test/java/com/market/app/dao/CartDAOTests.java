package com.market.app.dao;

import com.market.app.web.dto.CartRequestDto;
import lombok.extern.slf4j.Slf4j;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

@Slf4j
@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest
public class CartDAOTests {
    @Autowired
    private CartDAO dao;

    @Test
    public void 찜_목록_조회_테스트(){
        Integer memberId = 1;
        dao.findCartsByMemberId(memberId);
    }
    @Test
    public void 찜_등록_테스트(){
        Integer productDetailId = 1;
        Integer memberId = 1;
        int cartAmount = 3;
        CartRequestDto requestDto = CartRequestDto.builder()
                .memberId(memberId)
                .productDetailId(productDetailId)
                .cartAmount(cartAmount)
                .build();

        dao.insertCart(requestDto);
    }
    @Test
    public void 찜_삭제_테스트(){
        Integer cartId = 1;
        dao.deleteCartByCartId(cartId);
    }
}