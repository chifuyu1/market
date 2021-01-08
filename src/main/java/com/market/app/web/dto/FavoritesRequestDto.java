package com.market.app.web.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * 찜 요청 Dto
 */
@Getter
@Setter
@ToString
public class FavoritesRequestDto {
    Integer favoritesId;
    Integer memberId;
    Integer productId;

    @Builder
    public FavoritesRequestDto(Integer favoritesId, Integer memberId, Integer productId){
        this.favoritesId = favoritesId;
        this.memberId = memberId;
        this.productId = productId;
    }
}