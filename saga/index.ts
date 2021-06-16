import axios from 'axios';
import { all, fork } from 'redux-saga/effects';
import { baseURL } from '../config/config';
import userSaga from './user';
import productSaga from './product';
import couponSaga from './coupon';
import favoritesSaga from './favorites';
import cartSaga from './cart';
import orderSaga from './order';

axios.defaults.baseURL = baseURL;
axios.defaults.withCredentials = true;

export default function* rootSaga() {
  yield all([
    fork(userSaga),
    fork(productSaga),
    fork(couponSaga),
    fork(favoritesSaga),
    fork(cartSaga),
    fork(orderSaga),
  ]);
}
