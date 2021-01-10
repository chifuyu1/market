package com.market.app.web;

import com.market.app.service.FavoritesService;
import com.market.app.service.dto.FavoritesResponseDto;
import com.market.app.web.dto.FavoritesRequestDto;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/favorites")
public class FavoritesController {
    private final FavoritesService service;

    @ApiOperation("찜 목록 조회")
    @GetMapping("")
    public ResponseEntity<List<FavoritesResponseDto>> getFavorites() throws Exception {
        List<FavoritesResponseDto> favoritesList = service.findFavorites(2);

        return new ResponseEntity<>(favoritesList, HttpStatus.OK);
    }
    @ApiOperation("찜 등록")
    @ApiImplicitParams({
            @ApiImplicitParam(name="favoritesId", value="찜 아이디", dataType = "int"),
            @ApiImplicitParam(name="productId", value="상품 아이디", dataType = "int")
    })
    @PostMapping("")
    public ResponseEntity<String> createFavorites(@ModelAttribute FavoritesRequestDto requestDto) throws Exception {
        service.insertFavorites(requestDto);

        return new ResponseEntity<>("SUCCESS!", HttpStatus.OK);
    }
    @ApiOperation("찜 삭제")
    @ApiImplicitParam(name="favoritesId", value="찜 아이디", dataType = "int", paramType = "path")
    @DeleteMapping("/{favoritesId}")
    public ResponseEntity<String> deleteFavorites(@PathVariable Integer favoritesId) throws Exception {
        service.deleteFavorites(favoritesId);
        return new ResponseEntity<>("SUCCESS!", HttpStatus.OK);
    }
}