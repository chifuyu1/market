import produce from 'immer';

const product = {
  products: [],
  productsLoading: false,
  productsDone: false,
  productsError: null,
  options: {
    size: ``,
    quantity: ``,
    color: ``,
  },
};

export const GET_PRODUCTS_REQUEST = `PRODUCT/GET_PRODUCTS_REQUEST`;
export const GET_PRODUCTS_SUCCESS = `PRODUCT/GET_PRODUCTS_SUCCESS`;
export const GET_PRODUCTS_ERROR = `PRODUCT/GET_PRODUCTS_ERROR`;

export const SET_OPTION_COLOR = `PRODUCT/SET_OPTION_COLOR`;
export const SET_OPTION_SIZE = `PRODUCT/SET_OPTION_SIZE`;
export const SET_OPTION_QUANTITY = `PRODUCT/SET_OPTION_QUANTITY`;

export const getProductsRequest = () => ({
  type: GET_PRODUCTS_REQUEST,
});

export default function productReducer(state = product, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case GET_PRODUCTS_REQUEST:
        draft.productsLoading = true;
        draft.productsDone = false;
        break;
      case GET_PRODUCTS_SUCCESS:
        draft.productsLoading = false;
        draft.productsDone = true;
        draft.products = action.data;
        break;
      case GET_PRODUCTS_ERROR:
        draft.productsLoading = false;
        draft.productsDone = false;
        draft.productsError = action.error;
        break;
      case SET_OPTION_COLOR:
        draft.options.color = action.data;
        break;
      case SET_OPTION_SIZE:
        draft.options.size = action.data;
        break;
      case SET_OPTION_QUANTITY:
        draft.options.quantity = action.data;
        break;
      default:
        break;
    }
  });
}
