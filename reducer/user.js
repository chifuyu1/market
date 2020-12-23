import produce from 'immer';

const user = {
  account: false,
  boughtList: [], // 구매내역 or 결제내역
  favoriteList: [], // 찜 목록
  basket: [], // 장바구니
  loginLoading: false,
  loginDone: false,
  loginError: null,
  logoutLoading: false,
  logoutDone: false,
  logoutError: null,
};

export const KAKAO_LOGIN_REQUEST = 'USER/KAKAO_LOGIN_REQUEST';
export const KAKAO_LOGIN_SUCCESS = `USER/KAKAO_LOGIN_SUCCESS`;
export const KAKAO_LOGIN_ERROR = `USER/KAKAO_LOGIN_ERROR`;

export const GOOGLE_LOGIN_REQUEST = 'USER/GOOGLE_LOGIN_REQUEST';
export const GOOGLE_LOGIN_SUCCESS = `USER/GOOGLE_LOGIN_SUCCESS`;
export const GOOGLE_LOGIN_ERROR = `USER/GOOGLE_LOGIN_ERROR`;

export const KAKAO_LOGOUT_REQUEST = 'USER/KAKAO_LOGOUT_REQUEST';
export const KAKAO_LOGOUT_SUCCESS = `USER/KAKAO_LOGOUT_SUCCESS`;
export const KAKAO_LOGOUT_ERROR = `USER/KAKAO_LOGOUT_ERROR`;

export const GOOGLE_LOGOUT_REQUEST = 'USER/GOOGLE_LOGOUT_REQUEST';
export const GOOGLE_LOGOUT_SUCCESS = `USER/GOOGLE_LOGOUT_SUCCESS`;
export const GOOGLE_LOGOUT_ERROR = `USER/GOOGLE_LOGOUT_ERROR`;

export const kakaoLoginRequest = () => ({
  type: KAKAO_LOGIN_REQUEST,
});

export const googleLoginRequest = () => ({
  type: GOOGLE_LOGIN_REQUEST,
});

export const kakaoLogoutRequest = () => ({
  type: KAKAO_LOGOUT_REQUEST,
});

export const googleLogoutRequest = () => ({
  type: GOOGLE_LOGOUT_REQUEST,
});

export const kakaoLoginSuccess = () => ({
  type: KAKAO_LOGIN_SUCCESS,
});

const userReducer = (state = user, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      // login kakao
      case KAKAO_LOGIN_REQUEST:
      case GOOGLE_LOGIN_REQUEST:
        draft.loginLoading = true;
        draft.loginDone = false;
        draft.loginError = null;
        break;
      case KAKAO_LOGIN_SUCCESS:
      case GOOGLE_LOGIN_SUCCESS:
        draft.loginLoading = false;
        draft.loginDone = true;
        draft.account = true;
        break;
      case KAKAO_LOGIN_ERROR:
      case GOOGLE_LOGIN_ERROR:
        draft.loginLoading = false;
        draft.loginError = action.error;
        break;
      // logout kakao
      case KAKAO_LOGOUT_REQUEST:
      case GOOGLE_LOGOUT_REQUEST:
        draft.logoutLoading = true;
        draft.logoutDone = true;
        break;
      case KAKAO_LOGOUT_SUCCESS:
      case GOOGLE_LOGOUT_SUCCESS:
        draft.logoutLoading = false;
        draft.logoutDone = true;
        draft.account = null;
        break;
      case KAKAO_LOGOUT_ERROR:
      case GOOGLE_LOGOUT_ERROR:
        draft.logoutLoading = false;
        draft.logoutDone = false;
        draft.logoutError = action.error;
        break;
      default:
        break;
    }
  });

export default userReducer;
