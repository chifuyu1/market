package com.market.app.web.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.web.multipart.MultipartFile;

@Getter
@Setter
@ToString
public class ProductRequestDto {
    private String productColor;
    private String productGender;
    private String productType;
    private String productName;
    private MultipartFile productImage;
    private String productSize;
    private String productPrice;
    private String productSaleRate;
}