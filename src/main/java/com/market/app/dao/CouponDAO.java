package com.market.app.dao;


import com.market.app.service.dto.CouponResponseDto;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface CouponDAO {
    /**
     * 보유 쿠폰 목록 조회
     * @param memberId 회원 아이디
     * @return 보유 쿠폰 목록
     * @throws Exception SQLException 예상됨.
     */
    List<CouponResponseDto> findMyCouponByMemberId(Integer memberId) throws Exception;
}