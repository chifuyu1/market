package com.market.app.service;

import com.market.app.dao.FavoritesDAO;
import com.market.app.service.dto.FavoritesResponseDto;
import com.market.app.web.dto.FavoritesRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class FavoritesServiceImpl implements FavoritesService {
    private final FavoritesDAO favoritesDAO;

    @Override
    public List<FavoritesResponseDto> findFavorites(Integer memberId) throws Exception {
        return favoritesDAO.findFavoritesByMemberId(memberId);
    }

    @Override
    public Integer deleteFavorites(Integer favoritesId) throws Exception {
        return favoritesDAO.deleteByFavoritesId(favoritesId);
    }

    @Override
    public Integer insertFavorites(FavoritesRequestDto requestDto) throws Exception {
        return favoritesDAO.insertFavorites(requestDto);
    }
}
