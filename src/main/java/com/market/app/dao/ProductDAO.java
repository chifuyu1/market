package com.market.app.dao;

import com.market.app.web.dto.ProductRequestDto;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface ProductDAO {
    String selectNow() throws Exception;

    /**
     * 상품 삭제
     * @param productId 상품 아이디
     * @return 삭제 row count
     * @throws Exception
     */
    Integer deleteProduct(Integer productId) throws Exception;

    /**
     * 상품 등록
     * @param requestDto
     * @return
     * @throws Exception
     */
    Integer insertProduct(ProductRequestDto requestDto) throws Exception;

    /**
     * 상품 상세 등록
     * @param requestDto
     * @return
     * @throws Exception
     */
    Integer insertProductDetail(ProductRequestDto requestDto) throws Exception;
}