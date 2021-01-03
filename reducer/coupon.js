import produce from 'immer';

const coupons = {
  coupons: [],
  couponLoading: false,
  couponDone: false,
  couponError: null,
};

export const GET_COUPON_REQUEST = 'COUPON/GET_COUPON_REQUEST';
export const GET_COUPON_SUCCESS = 'COUPON/GET_COUPON_SUCCESS';
export const GET_COUPON_ERROR = 'COUPON/GET_COUPON_ERROR';

export const getCouponRequest = () => ({
  type: GET_COUPON_REQUEST,
});

export default function couponReducer(state = coupons, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case GET_COUPON_REQUEST:
        draft.couponLoading = true;
        draft.couponDone = false;
        break;
      case GET_COUPON_SUCCESS:
        draft.couponsLoading = false;
        draft.couponDone = true;
        draft.coupons = action.data;
        break;
      case GET_COUPON_ERROR:
        draft.couponLoading = false;
        draft.couponDone = false;
        draft.couponError = action.error;
        break;
      default:
        break;
    }
  });
}
