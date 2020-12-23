import produce from 'immer';

const product = {
  products: [],
  productsLoading: false,
  productsDone: false,
  productsError: null,
};

export const GET_PRODUCTS_REQUEST = `PRODUCT/GET_PRODUCTS_REQUEST`;
export const GET_PRODUCTS_SUCCESS = `PRODUCT/GET_PRODUCTS_SUCCESS`;
export const GET_PRODUCTS_ERROR = `PRODUCT/GET_PRODUCTS_ERROR`;

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
      default:
        break;
    }
  });
}
