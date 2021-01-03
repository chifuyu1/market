import produce from 'immer';

const order = {
  orderList: [],
  getOrderLoading: false,
  getOrderDone: false,
  getOrderError: null,
  addOrderLoading: false,
  addOrderDone: false,
  addOrderError: null,
};

export const GET_ORDER_REQUEST = 'ORDER/GET_ORDER_REQUEST';
export const GET_ORDER_SUCCESS = 'ORDER/GET_ORDER_SUCCESS';
export const GET_ORDER_ERROR = 'ORDER/GET_ORDER_ERROR';

export const ADD_ORDER_REQUEST = 'ORDER/ADD_ORDER_REQUEST';
export const ADD_ORDER_SUCCESS = 'ORDER/ADD_ORDER_SUCCESS';
export const ADD_ORDER_ERROR = 'ORDER/ADD_ORDER_ERROR';

export const getOrderRequest = () => ({
  type: GET_ORDER_REQUEST,
});

export default function orderReducer(state = order, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case GET_ORDER_REQUEST:
        draft.getOrderLoading = true;
        draft.getOrderDone = false;
        break;
      case GET_ORDER_SUCCESS:
        draft.getOrderLoading = false;
        draft.getOrderDone = true;
        draft.orderList = action.data;
        break;
      case GET_ORDER_ERROR:
        draft.getOrderLoading = false;
        draft.getOrderDone = false;
        draft.orderError = action.error;
        break;
      case ADD_ORDER_REQUEST:
        draft.addOrderLoading = true;
        draft.addOrderDone = false;
        break;
      case ADD_ORDER_SUCCESS:
        draft.addOrderLoading = false;
        draft.addOrderDone = true;
        draft.orderList = draft.orderList.concat(action.data);
        break;
      case ADD_ORDER_ERROR:
        draft.addOrderLoading = false;
        draft.addOrderDone = false;
        draft.orderError = action.error;
        break;
      default:
        break;
    }
  });
}
