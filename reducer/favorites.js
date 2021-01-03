import produce from 'immer';

const favorites = {
  favorites: [],
  favoritesLoading: false,
  favoritesDone: false,
  favoritesError: null,
  addFavoritesLoading: false,
  addFavoritesDone: false,
  addFavoritesError: null,
  deleteFavoritesLoading: false,
  deleteFavoritesDone: false,
  deleteFavoritesError: null,
};

export const GET_FAVORITES_REQUEST = 'FAVORITES/GET_FAVORITES_REQUEST';
export const GET_FAVORITES_SUCCESS = 'FAVORITES/GET_FAVORITES_SUCCESS';
export const GET_FAVORITES_ERROR = 'FAVORITES/GET_FAVORITES_ERROR';

export const ADD_FAVORITES_REQUEST = 'FAVORITES/ADD_FAVORITES_REQUEST';
export const ADD_FAVORITES_SUCCESS = 'FAVORITES/ADD_FAVORITES_SUCCESS';
export const ADD_FAVORITES_ERROR = 'FAVORITES/ADD_FAVORITES_ERROR';

export const DELETE_FAVORITES_REQUEST = 'FAVORITES/DELETE_FAVORITES_REQUEST';
export const DELETE_FAVORITES_SUCCESS = 'FAVORITES/DELETE_FAVORITES_SUCCESS';
export const DELETE_FAVORITES_ERROR = 'FAVORITES/DELETE_FAVORITES_ERROR';

export const getFavoritesRequest = () => ({
  type: GET_FAVORITES_REQUEST,
});

export const addFavoritesRequest = (data) => ({
  type: ADD_FAVORITES_REQUEST,
  data,
});

export const deleteFavoritesRequest = (data) => ({
  type: DELETE_FAVORITES_REQUEST,
  data,
});

export default function favoritesReducer(state = favorites, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      // GET
      case GET_FAVORITES_REQUEST:
        draft.favoritesLoading = true;
        draft.favoritesDone = false;
        break;
      case GET_FAVORITES_SUCCESS:
        draft.favoritesLoading = false;
        draft.favoritesDone = true;
        draft.favorites = action.data;
        break;
      case GET_FAVORITES_ERROR:
        draft.favoritesLoading = false;
        draft.favoritesDone = false;
        draft.favoritesError = action.error;
        break;
      // ADD
      case ADD_FAVORITES_REQUEST:
        draft.addFavoritesLoading = true;
        draft.addFavoritesDone = false;
        break;
      case ADD_FAVORITES_SUCCESS:
        draft.addFavoritesLoading = false;
        draft.addFavoritesDone = true;
        // draft.favorites = action.data;
        break;
      case ADD_FAVORITES_ERROR:
        draft.addFavoritesLoading = false;
        draft.addFavoritesDone = false;
        draft.addFavoritesError = action.error;
        break;
      // DELETE
      case DELETE_FAVORITES_REQUEST:
        draft.deleteFavoritesLoading = true;
        draft.deleteFavoritesDone = false;
        break;
      case DELETE_FAVORITES_SUCCESS:
        draft.deleteFavoritesLoading = false;
        draft.deleteFavoritesDone = true;
        // draft.favorites = action.data;
        break;
      case DELETE_FAVORITES_ERROR:
        draft.deleteFavoritesLoading = false;
        draft.deleteFavoritesDone = false;
        draft.deleteFavoritesError = action.error;
        break;
      default:
        break;
    }
  });
}
