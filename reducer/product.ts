import produce, { Draft } from 'immer';

type ProductState = {
  products: any[];
  myProducts: any[];
  getProductsLoading: boolean;
  getProductsDone: boolean;
  getProductsError: any | null;
  getMyProductLoading: boolean;
  getMyProductDone: boolean;
  getMyProductError: any | null;
  addProductLoading: boolean;
  addProductDone: boolean;
  addProductError: any | null;
  deleteProductLoading: boolean;
  deleteProductDone: boolean;
  deleteProductError: any | null;
};

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

export const GET_PRODUCTS_REQUEST = 'PRODUCT/GET_PRODUCTS_REQUEST' as const;
export const GET_PRODUCTS_SUCCESS = 'PRODUCT/GET_PRODUCTS_SUCCESS' as const;
export const GET_PRODUCTS_ERROR = 'PRODUCT/GET_PRODUCTS_ERROR' as const;

export const GET_MY_PRODUCTS_REQUEST = 'PRODUCT/GET_MY_PRODUCTS_REQUEST' as const;
export const GET_MY_PRODUCTS_SUCCESS = 'PRODUCT/GET_MY_PRODUCTS_SUCCESS' as const;
export const GET_MY_PRODUCTS_ERROR = 'PRODUCT/GET_MY_PRODUCTS_ERROR' as const;

export const ADD_PRODUCTS_REQUEST = 'PRODUCT/ADD_PRODUCTS_REQUEST' as const;
export const ADD_PRODUCTS_SUCCESS = 'PRODUCT/ADD_PRODUCTS_SUCCESS' as const;
export const ADD_PRODUCTS_ERROR = 'PRODUCT/ADD_PRODUCTS_ERROR' as const;

export const DELETE_PRODUCTS_REQUEST = 'PRODUCT/DELETE_PRODUCTS_REQUEST' as const;
export const DELETE_PRODUCTS_SUCCESS = 'PRODUCT/DELETE_PRODUCTS_SUCCESS' as const;
export const DELETE_PRODUCTS_ERROR = 'PRODUCT/DELETE_PRODUCTS_ERROR' as const;
// gender: boolean = true, category: string = 'ALL'
export const getProductsRequest = () => ({
  type: GET_PRODUCTS_REQUEST,
  // gender,
  // category,
});

export const getMyProductsRequest = () => ({
  type: GET_MY_PRODUCTS_REQUEST,
});

export const addProductsRequest = (data: any) => ({
  type: ADD_PRODUCTS_REQUEST,
  data,
});

export const deleteProductsRequest = (data: any) => ({
  type: DELETE_PRODUCTS_REQUEST,
  data,
});

type Actions =
  | ReturnType<typeof getMyProductsRequest>
  | ReturnType<typeof addProductsRequest>
  | ReturnType<typeof deleteProductsRequest>;

export default function productReducer(
  state: ProductState = product,
  action: any,
) {
  return produce(state, (draft: Draft<typeof product>) => {
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
        draft.getMyProductLoading = true;
        draft.getMyProductDone = false;
        break;
      case GET_PRODUCTS_SUCCESS:
        draft.getMyProductLoading = false;
        draft.getMyProductDone = true;
        // draft.getMyProduct = action.data;
        break;
      case GET_PRODUCTS_ERROR:
        draft.getMyProductLoading = false;
        draft.getMyProductDone = false;
        draft.getMyProductError = action.error;
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
