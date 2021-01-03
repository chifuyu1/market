import produce from 'immer';

const coupons = {
  coupons: [],
  couponLoading: false,
  couponsDone: false,
  couponsError: null,
};

export const GET_COUPON_REQUEST = 'COUPON/GET_COUPON_REQUEST';
export const GET_COUPON_SUCCESS = 'COUPON/GET_COUPON_SUCCESS';
export const GET_COUPON_ERROR = 'COUPON/GET_COUPON_ERROR';

export const SET_OPTION_COLOR = 'COUPON/SET_OPTION_COLOR';
export const SET_OPTION_SIZE = 'COUPON/SET_OPTION_SIZE';
export const SET_OPTION_QUANTITY = 'COUPON/SET_OPTION_QUANTITY';

export const getCouponRequest = () => ({
  type: GET_COUPON_REQUEST,
});

export default function couponReducer(state = coupons, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case GET_COUPON_REQUEST:
        draft.couponsLoading = true;
        draft.couponsDone = false;
        break;
      case GET_COUPON_SUCCESS:
        draft.couponsLoading = false;
        draft.couponsDone = true;
        draft.coupons = action.data;
        break;
      case GET_COUPON_ERROR:
        draft.couponsLoading = false;
        draft.couponsDone = false;
        draft.couponsError = action.error;
        break;
      default:
        break;
    }
  });
}
