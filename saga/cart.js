import axios from 'axios';
import { all, fork, call, put, takeLatest } from 'redux-saga/effects';
import {
  GET_CART_REQUEST,
  GET_CART_SUCCESS,
  GET_CART_ERROR,
  ADD_CART_REQUEST,
  ADD_CART_SUCCESS,
  ADD_CART_ERROR,
  DELETE_CART_REQUEST,
  DELETE_CART_SUCCESS,
  DELETE_CART_ERROR,
} from '../reducer/cart';

// GET
function getCartAPI() {
  return axios.get('/api/cart');
}

function* getCart() {
  try {
    const result = yield call(getCartAPI);
    yield put({ type: GET_CART_SUCCESS, data: result.data });
  } catch (err) {
    console.error(err);
    yield put({
      type: GET_CART_ERROR,
      error: err.response.data,
    });
  }
}

// ADD
function addCartAPI() {
  return axios.post('/api/cart');
}

function* addCart() {
  try {
    const result = yield call(addCartAPI);
    yield put({ type: ADD_CART_SUCCESS, data: result.data });
  } catch (err) {
    console.error(err);
    yield put({
      type: ADD_CART_ERROR,
      error: err.response.data,
    });
  }
}

// DELETE
function deleteCartAPI() {
  return axios.delete('/api/cart');
}

function* deleteCart() {
  try {
    const result = yield call(deleteCartAPI);
    yield put({ type: DELETE_CART_SUCCESS, data: result.data });
  } catch (err) {
    console.error(err);
    yield put({
      type: DELETE_CART_ERROR,
      error: err.response.data,
    });
  }
}

function* watchGetCart() {
  yield takeLatest(GET_CART_REQUEST, getCart);
}

function* watchAddCart() {
  yield takeLatest(ADD_CART_REQUEST, addCart);
}

function* watchDeleteCart() {
  yield takeLatest(DELETE_CART_REQUEST, deleteCart);
}

export default function* cartSaga() {
  yield all([fork(watchGetCart), fork(watchAddCart), fork(watchDeleteCart)]);
}
