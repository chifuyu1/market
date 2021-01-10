package com.market.app.web;

import com.market.app.service.CartService;
import com.market.app.service.dto.CartResponseDto;
import com.market.app.web.dto.CartRequestDto;
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

    @GetMapping("")
    public ResponseEntity<List<CartResponseDto>> findCartList() throws Exception {
        List<CartResponseDto> cartList = service.findCartList(2);

        return new ResponseEntity<>(cartList, HttpStatus.OK);
    }
    @PostMapping("")
    public ResponseEntity<String> createCart(@ModelAttribute CartRequestDto requestDto) throws Exception {
        service.insertCart(requestDto);

        return new ResponseEntity<>("SUCCESS", HttpStatus.OK);
    }
    @DeleteMapping("/{cartId}")
    public ResponseEntity<String> deleteCart(@PathVariable Integer cartId) throws Exception {
        service.deleteCart(cartId);

        return new ResponseEntity<>("SUCCESS", HttpStatus.OK);
    }
}