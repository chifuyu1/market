import axios from 'axios';
import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import {
  LOGIN_REQUEST,
  LOGIN_ERROR,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR,
} from '../reducer/user';

// login
function loginAPI() {
  return axios.post(`api/login/`);
}

function* login(): any {
  try {
    const result = yield call(loginAPI);
    // console.log(result);
  } catch (error) {
    console.error(error);
    yield put({
      type: LOGIN_ERROR,
      error,
    });
  }
}

// logout
function logoutAPI() {
  return axios.post(`api/logout`);
}

function* logout(): any {
  try {
    const result = yield call(logoutAPI);
    if (result === false) {
      yield put({
        type: LOGOUT_SUCCESS,
      });
    }
  } catch (error) {
    console.error(error);
    yield put({
      type: LOGOUT_ERROR,
      error,
    });
  }
}

// ------------------ watches ----------------------
function* watchLogin() {
  yield takeLatest(LOGIN_REQUEST, login);
}

function* watchLogout() {
  yield takeLatest(LOGOUT_REQUEST, logout);
}

export default function* userSaga() {
  yield all([fork(watchLogin), fork(watchLogout)]);
}
