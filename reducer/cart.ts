import produce, { Draft } from 'immer';

type CartState = {
  cart: any[];
  selectedList: any[];
  getCartLoading: boolean;
  getCartDone: boolean;
  getCartError: null | any;
  addCartLoading: boolean;
  addCartDone: boolean;
  addCartError: null | any;
  deleteCartLoading: boolean;
  deleteCartDone: boolean;
  deleteCartError: null | any;
};

const cart: CartState = {
  cart: [],
  selectedList: [],
  getCartLoading: false,
  getCartDone: false,
  getCartError: null,
  addCartLoading: false,
  addCartDone: false,
  addCartError: null,
  deleteCartLoading: false,
  deleteCartDone: false,
  deleteCartError: null,
};

export const GET_CART_REQUEST = 'CART/GET_CART_REQUEST' as const;
export const GET_CART_SUCCESS = 'CART/GET_CART_SUCCESS' as const;
export const GET_CART_ERROR = 'CART/GET_CART_ERROR' as const;

export const ADD_CART_REQUEST = 'CART/ADD_CART_REQUEST' as const;
export const ADD_CART_SUCCESS = 'CART/ADD_CART_SUCCESS' as const;
export const ADD_CART_ERROR = 'CART/ADD_CART_ERROR' as const;

export const DELETE_CART_REQUEST = 'CART/DELETE_CART_REQUEST' as const;
export const DELETE_CART_SUCCESS = 'CART/DELETE_CART_SUCCESS' as const;
export const DELETE_CART_ERROR = 'CART/DELETE_CART_ERROR' as const;

export const ADD_SELECTED_LIST = 'CART/ADD_SELECTED_LIST' as const;
export const DELETE_SELECTED_LIST = 'CART/DELETE_SELECTED_LIST' as const;
export const ADD_ALL_SELECTED_LIST = 'CART/ADD_ALL_SELECTED_LIST' as const;
export const DELETE_ALL_SELECTED_LIST = 'CART/DELETE_ALL_SELECTED_LIST' as const;

export const getCartRequest = () => ({
  type: GET_CART_REQUEST,
});

export const addCartRequest = (data: any) => ({
  type: ADD_CART_REQUEST,
  data,
});

export const deleteCartRequest = (data: any) => ({
  type: DELETE_CART_REQUEST,
  data,
});

export const addSelectedList = (id: number = 0) => ({
  type: ADD_SELECTED_LIST,
  id,
});

export const addAllSelectedList = (array: any) => ({
  type: ADD_ALL_SELECTED_LIST,
  array,
});

export const deleteSelectedList = (id: number = 0) => ({
  type: DELETE_SELECTED_LIST,
  id,
});

export const deleteAllSelectedList = () => ({
  type: DELETE_ALL_SELECTED_LIST,
});

export default function cartReducer(state: CartState = cart, action: any) {
  return produce(state, (draft: Draft<CartState>) => {
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
      case ADD_SELECTED_LIST:
        draft.selectedList = draft.selectedList.concat(action.id).sort();
        break;
      case DELETE_SELECTED_LIST:
        draft.selectedList = draft.selectedList.filter(
          (element) => element !== action.id,
        );
        break;
      case ADD_ALL_SELECTED_LIST:
        draft.selectedList = action.array;
        break;
      case DELETE_ALL_SELECTED_LIST:
        draft.selectedList = draft.cart.filter((element) => element === -1);
        break;
      default:
        break;
    }
  });
}
