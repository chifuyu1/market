import axios from 'axios';
import { all, fork, call, put, takeLatest } from 'redux-saga/effects';
import {
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_MY_PRODUCTS_REQUEST,
  GET_MY_PRODUCTS_SUCCESS,
  GET_MY_PRODUCTS_ERROR,
  ADD_PRODUCTS_REQUEST,
  ADD_PRODUCTS_SUCCESS,
  ADD_PRODUCTS_ERROR,
  DELETE_PRODUCTS_REQUEST,
  DELETE_PRODUCTS_SUCCESS,
  DELETE_PRODUCTS_ERROR,
} from '../reducer/product';

// GET
function getProductsAPI(gender, category) {
  // return axios.get(`/api/products/${gender}/${category}`);
  return axios.get('/api/products');
}

function* getProducts(action) {
  try {
    const result = yield call(getProductsAPI, {
      gender: action.gender,
      category: action.category,
    });
    yield put({ type: GET_PRODUCTS_SUCCESS, data: result.data });
  } catch (err) {
    console.error(err);
    yield put({
      type: GET_PRODUCTS_ERROR,
      error: err.response.data,
    });
  }
}

// GET
function getMyProductsAPI() {
  return axios.get('/api/products/manage');
}

function* getMyProducts() {
  try {
    const result = yield call(getMyProductsAPI);
    yield put({ type: GET_MY_PRODUCTS_SUCCESS, data: result.data });
  } catch (err) {
    console.error(err);
    yield put({
      type: GET_MY_PRODUCTS_ERROR,
      error: err.response.data,
    });
  }
}

// POST
function postProductsAPI() {
  return axios.post('/api/products');
}

function* postProducts() {
  try {
    const result = yield call(postProductsAPI);
    yield put({ type: ADD_PRODUCTS_SUCCESS, data: result.data });
  } catch (err) {
    console.error(err);
    yield put({
      type: ADD_PRODUCTS_ERROR,
      error: err.response.data,
    });
  }
}

// DELETE
function deleteProductsAPI() {
  return axios.delete('/api/products');
}

function* deleteProducts() {
  try {
    const result = yield call(deleteProductsAPI);
    yield put({ type: DELETE_PRODUCTS_SUCCESS, data: result.data });
  } catch (err) {
    console.error(err);
    yield put({
      type: DELETE_PRODUCTS_ERROR,
      error: err.response.data,
    });
  }
}

function* watchGetProducts() {
  yield takeLatest(GET_PRODUCTS_REQUEST, getProducts);
}

function* watchGetMyProducts() {
  yield takeLatest(GET_MY_PRODUCTS_REQUEST, getMyProducts);
}

function* watchPostProducts() {
  yield takeLatest(ADD_PRODUCTS_REQUEST, postProducts);
}

function* watchDeleteProducts() {
  yield takeLatest(DELETE_PRODUCTS_REQUEST, deleteProducts);
}

export default function* productSaga() {
  yield all([
    fork(watchGetProducts),
    fork(watchGetMyProducts),
    fork(watchPostProducts),
    fork(watchDeleteProducts),
  ]);
}
