package com.market.app.dao;

import com.market.app.web.dto.FavoritesRequestDto;
import lombok.extern.slf4j.Slf4j;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

@Slf4j
@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest
public class FavoritesDAOTests {
    @Autowired
    private FavoritesDAO dao;

    @Test
    public void 찜_목록_조회_테스트() throws Exception {
        dao.findFavoritesByMemberId(2);
    }
    @Test
    public void 찜_등록_테스트() throws Exception {
        FavoritesRequestDto requestDto = FavoritesRequestDto.builder()
                .favoritesId(1)
                .memberId(1)
                .productId(1)
                .build();

        dao.insertFavorites(requestDto);
    }
    @Test
    public void 찜_삭제_테스트() throws Exception {
        FavoritesRequestDto requestDto = FavoritesRequestDto.builder()
                .favoritesId(1)
                .memberId(1)
                .build();

        dao.deleteByFavoritesId(1);
    }
}