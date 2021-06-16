import axios from 'axios';
import { all, fork, call, put, takeLatest } from 'redux-saga/effects';
import {
  GET_FAVORITES_REQUEST,
  GET_FAVORITES_SUCCESS,
  GET_FAVORITES_ERROR,
  ADD_FAVORITES_REQUEST,
  ADD_FAVORITES_SUCCESS,
  ADD_FAVORITES_ERROR,
  DELETE_FAVORITES_REQUEST,
  DELETE_FAVORITES_SUCCESS,
  DELETE_FAVORITES_ERROR,
} from '../reducer/favorites';

// GET
function getFavoritesAPI() {
  return axios.get('/api/favorites');
}

function* getFavorites(): any {
  try {
    const result = yield call(getFavoritesAPI);
    yield put({ type: GET_FAVORITES_SUCCESS, data: result.data });
  } catch (err) {
    console.error(err);
    yield put({
      type: GET_FAVORITES_ERROR,
      error: err.response.data,
    });
  }
}

// ADD
function addFavoritesAPI(data: any) {
  return axios.post(`/api/favorites/${data}`);
}

function* addFavorites(action: any): any {
  try {
    const result = yield call(addFavoritesAPI, action.data);
    yield put({ type: ADD_FAVORITES_SUCCESS, data: result.data });
  } catch (err) {
    console.error(err);
    yield put({
      type: ADD_FAVORITES_ERROR,
      error: err.response.data,
    });
  }
}

// DELETE
function deleteFavoritesAPI(data: any) {
  return axios.delete(`/api/favorites/${data}`);
}

function* deleteFavorites(action: any): any {
  try {
    const result = yield call(deleteFavoritesAPI, action.data);
    yield put({ type: DELETE_FAVORITES_SUCCESS, data: result.data });
  } catch (err) {
    console.error(err);
    yield put({
      type: DELETE_FAVORITES_ERROR,
      error: err.response.data,
    });
  }
}

function* watchGetFavorites() {
  yield takeLatest(GET_FAVORITES_REQUEST, getFavorites);
}

function* watchAddFavorites() {
  yield takeLatest(ADD_FAVORITES_REQUEST, addFavorites);
}

function* watchDeleteFavorites() {
  yield takeLatest(DELETE_FAVORITES_REQUEST, deleteFavorites);
}

export default function* favoritesSaga() {
  yield all([
    fork(watchGetFavorites),
    fork(watchAddFavorites),
    fork(watchDeleteFavorites),
  ]);
}
