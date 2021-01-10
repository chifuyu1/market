package com.market.app.web;

import com.market.app.service.CouponService;
import com.market.app.service.dto.CouponResponseDto;
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
    @GetMapping("")
    public ResponseEntity<List<CouponResponseDto>> getCouponList() throws Exception {
        List<CouponResponseDto> couponList = service.findMyCouponByMemberId(2);

        return new ResponseEntity<>(couponList, HttpStatus.OK);
    }
}