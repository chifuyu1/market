import axios from 'axios';
import { all, fork, call, put, takeLatest } from 'redux-saga/effects';
import {
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  GET_ORDER_ERROR,
  ADD_ORDER_REQUEST,
  ADD_ORDER_SUCCESS,
  ADD_ORDER_ERROR,
} from '../reducer/order';

// GET
function getOrderAPI() {
  return axios.get('/api/order');
}

function* getOrder() {
  try {
    const result = yield call(getOrderAPI);
    yield put({ type: GET_ORDER_SUCCESS, data: result.data });
  } catch (err) {
    console.error(err);
    yield put({
      type: GET_ORDER_ERROR,
      error: err.response.data,
    });
  }
}

// POST
function addOrderAPI(data) {
  return axios.post('/api/order', data);
}

function* addOrder(action) {
  try {
    const result = yield call(addOrderAPI, action.data);
    yield put({ type: ADD_ORDER_SUCCESS, data: result.data });
  } catch (err) {
    console.error(err);
    yield put({
      type: ADD_ORDER_ERROR,
      error: err.response.data,
    });
  }
}

function* watchGetOrder() {
  yield takeLatest(GET_ORDER_REQUEST, getOrder);
}

function* watchAddOrder() {
  yield takeLatest(ADD_ORDER_REQUEST, addOrder);
}

export default function* orderSaga() {
  yield all([fork(watchGetOrder), fork(watchAddOrder)]);
}
