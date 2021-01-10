package com.market.app.web;

import com.market.app.service.ProductService;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/product")
public class ProductController {
    private final ProductService productService;

    @ApiOperation("상품 삭제")
    @ApiImplicitParam(name="productId", value="상품 아이디", dataType="int", paramType="path")
    @GetMapping("/{productId}")
    public ResponseEntity<String> deleteProduct(@PathVariable Integer productId) throws Exception {
        productService.deleteProduct(productId);

        return new ResponseEntity<>("SUCCESS", HttpStatus.OK);
    }
    @ApiOperation("상품 등록")
    @ApiImplicitParams({
            @ApiImplicitParam(name="productColor"),
            @ApiImplicitParam(name="productGender"),
            @ApiImplicitParam(name="productType"),
            @ApiImplicitParam(name="productName"),
            @ApiImplicitParam(name="productImage"),
            @ApiImplicitParam(name="productSize"),
            @ApiImplicitParam(name="productPrice"),
            @ApiImplicitParam(name="productSaleRate")
    })
    public void createProduct() throws Exception {

    }
}