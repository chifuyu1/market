package com.market.app.service.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@ToString
@Setter
@Getter
public class CouponResponseDto {
    private String couponId;
    private String couponName;
    private String saleType;
    private String saleRate;
    private boolean isUse;
}