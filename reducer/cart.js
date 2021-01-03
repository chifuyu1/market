import produce from 'immer';

const cart = {
  cart: [],
  getCartLoading: false,
  getCartDone: false,
  getCartError: null,
  addCartLoading: false,
  addCartDone: false,
  addCartError: null,
  deleteCartLoading: false,
  deleteCartDone: false,
  deleteCartError: false,
};

export const GET_CART_REQUEST = 'CART/GET_CART_REQUEST';
export const GET_CART_SUCCESS = 'CART/GET_CART_SUCCESS';
export const GET_CART_ERROR = 'CART/GET_CART_ERROR';

export const ADD_CART_REQUEST = 'CART/ADD_CART_REQUEST';
export const ADD_CART_SUCCESS = 'CART/ADD_CART_SUCCESS';
export const ADD_CART_ERROR = 'CART/ADD_CART_ERROR';

export const DELETE_CART_REQUEST = 'CART/DELETE_CART_REQUEST';
export const DELETE_CART_SUCCESS = 'CART/DELETE_CART_SUCCESS';
export const DELETE_CART_ERROR = 'CART/DELETE_CART_ERROR';

export const getCartRequest = () => ({
  type: GET_CART_REQUEST,
});

export const addCartRequest = (data) => ({
  type: ADD_CART_REQUEST,
  data,
});

export default function cartReducer(state = cart, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      // GET
      case GET_CART_REQUEST:
        draft.getCartLoading = true;
        draft.getCartDone = false;
        break;
      case GET_CART_SUCCESS:
        draft.getCartLoading = false;
        draft.getCartDone = true;
        draft.cart = action.data;
        break;
      case GET_CART_ERROR:
        draft.getCartLoading = false;
        draft.getCartDone = false;
        draft.getCartError = action.error;
        break;
      // ADD
      case ADD_CART_REQUEST:
        draft.addCartLoading = true;
        draft.addCartDone = false;
        break;
      case ADD_CART_SUCCESS:
        draft.addCartLoading = false;
        draft.addCartDone = true;
        break;
      case ADD_CART_ERROR:
        draft.addCartLoading = false;
        draft.addCartDone = false;
        draft.addCartError = action.error;
        break;
      // DELETE
      case DELETE_CART_REQUEST:
        draft.deleteCartLoading = true;
        draft.deleteCartDone = false;
        break;
      case DELETE_CART_SUCCESS:
        draft.deleteCartLoading = false;
        draft.deleteCartDone = true;
        break;
      case DELETE_CART_ERROR:
        draft.deleteCartLoading = false;
        draft.deleteCartDone = false;
        draft.deleteCartError = action.error;
        break;
      default:
        break;
    }
  });
}
