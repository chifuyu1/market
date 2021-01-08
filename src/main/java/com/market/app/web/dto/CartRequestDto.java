package com.market.app.web.dto;

import com.market.app.service.dto.CartResponseDto;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString
public class CartRequestDto {
    private Integer cartId;
    private Integer memberId;
    private Integer productDetailId;
    private int cartAmount;

    @Builder
    public CartRequestDto(Integer cartId, Integer memberId, Integer productDetailId, int cartAmount){
        this.cartId = cartId;
        this.memberId = memberId;
        this.productDetailId = productDetailId;
        this.cartAmount = cartAmount;
    }
}