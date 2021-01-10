package com.market.app.service;

import com.market.app.dao.ProductDAO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class ProductServiceImpl implements ProductService{
    private final ProductDAO productDAO;
    @Override
    public Integer deleteProduct(Integer productId) throws Exception {
        return productDAO.deleteProduct(productId);
    }
}
