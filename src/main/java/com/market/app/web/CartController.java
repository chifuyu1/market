package com.market.app.web;

import com.market.app.service.CartService;
import com.market.app.service.dto.CartResponseDto;
import com.market.app.web.dto.CartRequestDto;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/cart")
public class CartController {
    private final CartService service;

    @ApiOperation("장바구니 목록 조회")
    @GetMapping("")
    public ResponseEntity<List<CartResponseDto>> findCartList() throws Exception {
        List<CartResponseDto> cartList = service.findCartList(2);

        return new ResponseEntity<>(cartList, HttpStatus.OK);
    }
    @ApiOperation("장바구니 등록")
    @ApiImplicitParams({
            @ApiImplicitParam(name="productDetailId", value="상품 상세 아이디", dataType = "int"),
            @ApiImplicitParam(name="cartAmount", value="상품 갯수", dataType = "int")
    })
    @PostMapping("")
    public ResponseEntity<String> createCart(@ModelAttribute CartRequestDto requestDto) throws Exception {
        requestDto.setMemberId(2);
        service.insertCart(requestDto);

        return new ResponseEntity<>("SUCCESS", HttpStatus.OK);
    }
    @ApiOperation("장바구니 삭제")
    @ApiImplicitParam(name="cartId", value="장바구니 아이디", dataType = "int", paramType = "path")
    @DeleteMapping("/{cartId}")
    public ResponseEntity<String> deleteCart(@PathVariable Integer cartId) throws Exception {
        service.deleteCart(cartId);

        return new ResponseEntity<>("SUCCESS", HttpStatus.OK);
    }
}