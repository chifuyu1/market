package com.market.app.service;

import com.market.app.service.dto.CouponResponseDto;

import java.util.List;

public interface CouponService {
    List<CouponResponseDto> findMyCouponByMemberId(Integer memberId) throws Exception;
}
