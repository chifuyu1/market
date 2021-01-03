import produce from 'immer';

const product = {
  products: [],
  myProducts: [],
  getProductsLoading: false,
  getProductsDone: false,
  getProductsError: null,
  getMyProductLoading: false,
  getMyProductDone: false,
  getMyProductError: false,
  addProductLoading: false,
  addProductDone: false,
  addProductError: null,
  deleteProductLoading: false,
  deleteProductDone: false,
  deleteProductError: false,
};

export const GET_PRODUCTS_REQUEST = 'PRODUCT/GET_PRODUCTS_REQUEST';
export const GET_PRODUCTS_SUCCESS = 'PRODUCT/GET_PRODUCTS_SUCCESS';
export const GET_PRODUCTS_ERROR = 'PRODUCT/GET_PRODUCTS_ERROR';

export const GET_MY_PRODUCTS_REQUEST = 'PRODUCT/GET_MY_PRODUCTS_REQUEST';
export const GET_MY_PRODUCTS_SUCCESS = 'PRODUCT/GET_MY_PRODUCTS_SUCCESS';
export const GET_MY_PRODUCTS_ERROR = 'PRODUCT/GET_MY_PRODUCTS_ERROR';

export const ADD_PRODUCTS_REQUEST = 'PRODUCT/ADD_PRODUCTS_REQUEST';
export const ADD_PRODUCTS_SUCCESS = 'PRODUCT/ADD_PRODUCTS_SUCCESS';
export const ADD_PRODUCTS_ERROR = 'PRODUCT/ADD_PRODUCTS_ERROR';

export const DELETE_PRODUCTS_REQUEST = 'PRODUCT/DELETE_PRODUCTS_REQUEST';
export const DELETE_PRODUCTS_SUCCESS = 'PRODUCT/DELETE_PRODUCTS_SUCCESS';
export const DELETE_PRODUCTS_ERROR = 'PRODUCT/DELETE_PRODUCTS_ERROR';

export const getProductsRequest = (gender = true, category = 'ALL') => ({
  type: GET_PRODUCTS_REQUEST,
  // gender,
  // category,
});

export const getMyProductsRequest = (gender = true, category = 'ALL') => ({
  type: GET_MY_PRODUCTS_REQUEST,
});

export const addProductsRequest = (data) => ({
  type: ADD_PRODUCTS_REQUEST,
  data,
});

export const deleteProductsRequest = (data) => ({
  type: DELETE_PRODUCTS_REQUEST,
  data,
});

export default function productReducer(state = product, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      // GET
      case GET_PRODUCTS_REQUEST:
        draft.getProductsLoading = true;
        draft.getProductsDone = false;
        break;
      case GET_PRODUCTS_SUCCESS:
        draft.getProductsLoading = false;
        draft.getProductsDone = true;
        draft.products = action.data;
        break;
      case GET_PRODUCTS_ERROR:
        draft.getProductsLoading = false;
        draft.getProductsDone = false;
        draft.getProductsError = action.error;
        break;
      // GET MY PRODUCT
      case GET_PRODUCTS_REQUEST:
        draft.getMyProductsLoading = true;
        draft.getMyProductsDone = false;
        break;
      case GET_PRODUCTS_SUCCESS:
        draft.getMyProductsLoading = false;
        draft.getMyProductsDone = true;
        draft.getMyProducts = action.data;
        break;
      case GET_PRODUCTS_ERROR:
        draft.getMyProductsLoading = false;
        draft.getMyProductsDone = false;
        draft.getMyProductsError = action.error;
        break;
      // ADD
      case ADD_PRODUCTS_REQUEST:
        draft.addProductLoading = true;
        draft.addProductDone = false;
        break;
      case ADD_PRODUCTS_SUCCESS:
        draft.addProductLoading = false;
        draft.addProductDone = true;
        break;
      case ADD_PRODUCTS_ERROR:
        draft.addProductLoading = false;
        draft.addProductDone = false;
        draft.addProductError = action.error;
        break;
      // DELETE
      case DELETE_PRODUCTS_REQUEST:
        draft.deleteProductLoading = true;
        draft.deleteProductDone = false;
        break;
      case DELETE_PRODUCTS_SUCCESS:
        draft.deleteProductLoading = false;
        draft.deleteProductDone = true;
        break;
      case DELETE_PRODUCTS_ERROR:
        draft.deleteProductLoading = false;
        draft.deleteProductDone = false;
        draft.deleteProductError = action.error;
        break;
      default:
        break;
    }
  });
}
