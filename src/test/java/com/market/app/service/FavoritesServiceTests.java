package com.market.app.service;

import com.market.app.web.dto.FavoritesRequestDto;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest
public class FavoritesServiceTests {
    @Autowired
    private FavoritesService favoritesService;

    @Test
    public void 찜_목록_조회_테스트() throws Exception{
        favoritesService.findFavorites(2);
    }
    @Test
    public void 찜_등록_테스트() throws Exception{
    }
    @Test
    public void 찜_삭제_테스트() throws Exception{

    }
}