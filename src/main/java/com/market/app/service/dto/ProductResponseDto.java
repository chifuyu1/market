package com.market.app.service.dto;

import lombok.*;

/**
 * 상품 정보 반환용 dto
 */
@Getter
@Setter
@ToString
@NoArgsConstructor
public class ProductResponseDto {
    private String title;
    private String price;
    private String saleRate;
    private String author;
    private String imageUrl;

    @Builder
    public ProductResponseDto(String title, String price, String saleRate, String author, String imageUrl){
        this.title = title;
        this.price = price;
        this.saleRate = saleRate;
        this.author = author;
        this.imageUrl = imageUrl;
    }
}