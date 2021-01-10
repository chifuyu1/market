package com.market.app.service;

import com.market.app.dao.CouponDAO;
import com.market.app.service.dto.CouponResponseDto;
import lombok.RequiredArgsConstructor;

import java.util.List;

@RequiredArgsConstructor
public class CouponServiceImpl implements CouponService{
    private final CouponDAO dao;
    @Override
    public List<CouponResponseDto> findMyCouponByMemberId(Integer memberId) throws Exception {
        return dao.findMyCouponByMemberId(memberId);
    }
}
