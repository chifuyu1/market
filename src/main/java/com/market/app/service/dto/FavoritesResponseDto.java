package com.market.app.service.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class FavoritesResponseDto {
    private String productId;
    private String productName;
    private String productSaleRate;
    private String productColor;
    private String productGender;
    private String productImage;
    private Integer productSize;
}