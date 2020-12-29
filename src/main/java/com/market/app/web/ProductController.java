package com.market.app.web;

import com.market.app.service.dto.ProductResponseDto;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

/**
 * 상품 API
 */
@RestController
@RequestMapping("/api/products")
public class ProductController {
    @GetMapping("")
    public ResponseEntity<List<ProductResponseDto>> dummy(){
        List<ProductResponseDto> list = new ArrayList<>();
        list.add(ProductResponseDto.builder()
                    .title("신발 할인입니당~")
                    .price("30,000")
                    .author("스터디맨")
                    .saleRate("30%")
                    .imageUrl("http://img1.tmon.kr/cdn3/deals/2020/03/28/1744647054/1744647054_front_6b59876583.jpg")
                    .build()
        );
        list.add(ProductResponseDto.builder()
                .title("바지 할인입니당~")
                .price("240,000")
                .author("스터디맨")
                .saleRate("20%")
                .imageUrl("http://www.lilyti.com/shopimages/kkuumi/005001000102.jpg?1588060957")
                .build()
        );
        list.add(ProductResponseDto.builder()
                .title("신발 할인입니당~")
                .price("30,000")
                .author("스터디맨")
                .saleRate("30%")
                .imageUrl("http://img1.tmon.kr/cdn3/deals/2020/03/28/1744647054/1744647054_front_6b59876583.jpg")
                .build()
        );
        list.add(ProductResponseDto.builder()
                .title("바지 할인입니당~")
                .price("240,000")
                .author("스터디맨")
                .saleRate("20%")
                .imageUrl("http://www.lilyti.com/shopimages/kkuumi/005001000102.jpg?1588060957")
                .build()
        );
        list.add(ProductResponseDto.builder()
                .title("신발 할인입니당~")
                .price("30,000")
                .author("스터디맨")
                .saleRate("30%")
                .imageUrl("http://img1.tmon.kr/cdn3/deals/2020/03/28/1744647054/1744647054_front_6b59876583.jpg")
                .build()
        );
        list.add(ProductResponseDto.builder()
                .title("바지 할인입니당~")
                .price("240,000")
                .author("스터디맨")
                .saleRate("20%")
                .imageUrl("http://www.lilyti.com/shopimages/kkuumi/005001000102.jpg?1588060957")
                .build()
        );
        return new ResponseEntity<>(list, HttpStatus.OK);
    }
}