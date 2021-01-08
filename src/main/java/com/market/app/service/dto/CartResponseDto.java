package com.market.app.service.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class CartResponseDto {
    private Integer cartId;
    private Integer productDetailId;
    private String productImage;
    private String productThumbnail;
    private Integer productSize;
    private String productColor;
    private String productGender;

    @Builder
    public CartResponseDto(
            Integer cartId,
            Integer productDetailId,
            String productImage,
            String productThumbnail,
            Integer productSize,
            String productColor,
            String productGender
    ){
        this.cartId = cartId;
        this.productDetailId = productDetailId;
        this.productImage = productImage;
        this.productThumbnail = productThumbnail;
        this.productSize = productSize;
        this.productColor = productColor;
        this.productGender = productGender;
    }
}