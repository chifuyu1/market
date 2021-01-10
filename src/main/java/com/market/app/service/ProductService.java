package com.market.app.service;

public interface ProductService {
    /**
     * 상품 삭제
     * @param productId
     * @return
     * @throws Exception
     */
    Integer deleteProduct(Integer productId) throws Exception;
}