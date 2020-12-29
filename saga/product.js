import axios from 'axios';
import { all, fork, call, put, takeLatest } from 'redux-saga/effects';
import {
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
} from '../reducer/product';

function getItemsAPI() {
  return axios.get(`/api/products`);
}

function* getItems() {
  try {
    const result = yield call(getItemsAPI);
    yield put({ type: GET_PRODUCTS_SUCCESS, data: result.data });
  } catch (err) {
    console.error(err);
    yield put({
      type: GET_PRODUCTS_ERROR,
      error: err.response.data,
    });
  }
}

function* watchGetItems() {
  yield takeLatest(GET_PRODUCTS_REQUEST, getItems);
}

export default function* productSaga() {
  yield all([fork(watchGetItems)]);
}
