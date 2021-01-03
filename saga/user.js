import axios from 'axios';
import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-community/google-signin';
import {
  LOGIN_GOOGLE_REQUEST,
  LOGIN_GOOGLE_SUCCESS,
  LOGIN_GOOGLE_ERROR,
  LOGOUT_GOOGLE_REQUEST,
  LOGOUT_GOOGLE_SUCCESS,
  LOGOUT_GOOGLE_ERROR,
} from '../reducer/user';
import { googleCheckSign, googleSignIn, googleSignOut } from '../social/sign';

// google
function googleLoginAPI(data) {
  return axios.post(`api/login/${data}`);
}

function* googleLogin(action) {
  try {
    // const res = yield call(googleLoginAPI, action.data)
    GoogleSignin.configure({
      offlineAccess: true,
      webClientId:
        '906621653717-sdt731rmkjjgln9havtcf29evu7jatlq.apps.googleusercontent.com',
    });

    const result = yield call(googleSignIn);
    if (result) {
      console.log(result);
      yield put({
        type: LOGIN_GOOGLE_SUCCESS,
      });
    }
  } catch (error) {
    console.error(error);
    yield put({
      type: LOGIN_GOOGLE_ERROR,
      error,
    });
  }
}

// google
function* googleLogout() {
  try {
    const result = yield call(googleSignOut);
    if (result === false) {
      yield put({
        type: LOGOUT_GOOGLE_SUCCESS,
      });
    }
  } catch (error) {
    console.error(error);
    yield put({
      type: LOGOUT_GOOGLE_ERROR,
      error,
    });
  }
}

// ------------------ watches ----------------------
function* watchGoogleLogin() {
  yield takeLatest(LOGIN_GOOGLE_REQUEST, googleLogin);
}

function* watchGoogleLogout() {
  yield takeLatest(LOGOUT_GOOGLE_REQUEST, googleLogout);
}

export default function* userSaga() {
  yield all([fork(watchGoogleLogin), fork(watchGoogleLogout)]);
}
