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
public class CouponDAOTests {
    @Autowired
    private CouponDAO dao;

    @Test
    public void 회원_쿠폰조회_테스트() throws Exception {
        log.info(dao.findMyCouponByMemberId(1).toString());
    }
}