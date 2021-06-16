import axios from 'axios';
import { all, fork, call, put, takeLatest } from 'redux-saga/effects';
import {
  GET_COUPON_REQUEST,
  GET_COUPON_SUCCESS,
  GET_COUPON_ERROR,
} from '../reducer/coupon';

// GET
function getCouponsAPI() {
  return axios.get('/api/coupon');
}

function* getCoupons(): any {
  try {
    const result = yield call(getCouponsAPI);
    yield put({ type: GET_COUPON_SUCCESS, data: result.data });
  } catch (err) {
    console.error(err);
    yield put({
      type: GET_COUPON_ERROR,
      error: err.response.data,
    });
  }
}

function* watchGetCoupons() {
  yield takeLatest(GET_COUPON_REQUEST, getCoupons);
}

export default function* couponSaga() {
  yield all([fork(watchGetCoupons)]);
}
