package com.market.app.web;

import com.market.app.service.CouponService;
import com.market.app.service.dto.CouponResponseDto;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/coupon")
public class CouponController {
    private final CouponService service;

    @ApiOperation("쿠폰 목록 조회")
    @GetMapping("")
    public ResponseEntity<List<CouponResponseDto>> getCouponList() throws Exception {
        List<CouponResponseDto> couponList = service.findMyCouponByMemberId(2);

        return new ResponseEntity<>(couponList, HttpStatus.OK);
    }
}