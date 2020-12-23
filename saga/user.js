import axios from 'axios';
import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import KakaoLogins, { KAKAO_AUTH_TYPES } from '@react-native-seoul/kakao-login';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-community/google-signin';
import {
  GOOGLE_LOGIN_ERROR,
  GOOGLE_LOGIN_REQUEST,
  GOOGLE_LOGIN_SUCCESS,
  GOOGLE_LOGOUT_ERROR,
  GOOGLE_LOGOUT_REQUEST,
  GOOGLE_LOGOUT_SUCCESS,
  kakaoLoginSuccess,
  KAKAO_LOGIN_ERROR,
  KAKAO_LOGIN_REQUEST,
  KAKAO_LOGIN_SUCCESS,
  KAKAO_LOGOUT_ERROR,
  KAKAO_LOGOUT_REQUEST,
  KAKAO_LOGOUT_SUCCESS,
} from '../reducer/user';
import {
  googleCheckSign,
  googleSignIn,
  googleSignOut,
  kakaoSignOut,
} from '../social/sign';

async function kakaoLoginAPI() {
  return await KakaoLogins.login([KAKAO_AUTH_TYPES.Account]);
}

function* kakaoLogin() {
  try {
    yield call(kakaoLoginAPI);

    const getProfile = async () =>
      await KakaoLogins.getProfile((err, result) => {
        if (err) return;
        if (result.id) return result.id;
      });
    const userId = getProfile();
    if (userId) {
      yield put(kakaoLoginSuccess());
    }
  } catch (error) {
    console.error(error);
    yield put({
      type: KAKAO_LOGIN_ERROR,
      error,
    });
  }
}

function* kakaoLogout() {
  try {
    // yield call(kakaoLogoutAPI);
    const result = yield call(kakaoSignOut);
    if (result === true) {
      yield put({
        type: KAKAO_LOGOUT_SUCCESS,
      });
    } else console.log(`throw error`);
  } catch (error) {
    console.error(error);
    yield put({
      type: KAKAO_LOGOUT_ERROR,
      error,
    });
  }
}

// google
function* googleLogin() {
  try {
    GoogleSignin.configure({
      offlineAccess: true,
      webClientId:
        '906621653717-sdt731rmkjjgln9havtcf29evu7jatlq.apps.googleusercontent.com',
    });

    const result = yield call(googleSignIn);
    if (result) {
      console.log(result);
      yield put({
        type: GOOGLE_LOGIN_SUCCESS,
      });
    }
  } catch (error) {
    console.error(error);
    yield put({
      type: GOOGLE_LOGIN_ERROR,
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
        type: GOOGLE_LOGOUT_SUCCESS,
      });
    }
  } catch (error) {
    console.error(error);
    yield put({
      type: GOOGLE_LOGIN_ERROR,
      error,
    });
  }
}

// ------------------ watches ----------------------

function* watchKakaoLogin() {
  yield takeLatest(KAKAO_LOGIN_REQUEST, kakaoLogin);
}

function* watchKakaoLogout() {
  yield takeLatest(KAKAO_LOGOUT_REQUEST, kakaoLogout);
}

function* watchGoogleLogin() {
  yield takeLatest(GOOGLE_LOGIN_REQUEST, googleLogin);
}

function* watchGoogleLogout() {
  yield takeLatest(GOOGLE_LOGOUT_REQUEST, googleLogout);
}

export default function* userSaga() {
  yield all([
    fork(watchKakaoLogin),
    fork(watchKakaoLogout),
    fork(watchGoogleLogin),
    fork(watchGoogleLogout),
  ]);
}
