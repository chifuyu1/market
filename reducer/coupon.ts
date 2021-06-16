import produce, { Draft } from 'immer';

type CouponState = {
  coupons: any[];
  couponLoading: boolean;
  couponDone: boolean;
  couponError: null | any;
};

const coupons = {
  coupons: [],
  couponLoading: false,
  couponDone: false,
  couponError: null,
};

export const GET_COUPON_REQUEST = 'COUPON/GET_COUPON_REQUEST' as const;
export const GET_COUPON_SUCCESS = 'COUPON/GET_COUPON_SUCCESS' as const;
export const GET_COUPON_ERROR = 'COUPON/GET_COUPON_ERROR' as const;

export const getCouponRequest = () => ({
  type: GET_COUPON_REQUEST,
});

export default function couponReducer(
  state: CouponState = coupons,
  action: any,
) {
  return produce(state, (draft: Draft<CouponState>) => {
    switch (action.type) {
      case GET_COUPON_REQUEST:
        draft.couponLoading = true;
        draft.couponDone = false;
        break;
      case GET_COUPON_SUCCESS:
        draft.couponLoading = false;
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
