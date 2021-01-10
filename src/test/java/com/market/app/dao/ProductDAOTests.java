package com.market.app.dao;

import lombok.extern.slf4j.Slf4j;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

@Slf4j
@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest
public class ProductDAOTests {
    @Autowired
    private ProductDAO productDAO;

    @Test
    public void 현재시간_조회_테스트() throws Exception {
        log.info(productDAO.selectNow());
    }
    @Test
    public void 상품_삭제_테스트() throws Exception {
        log.info(productDAO.deleteProduct(1).toString());
    }
}