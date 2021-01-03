import produce from 'immer';

const user = {
  account: false,
  loginLoading: false,
  loginDone: false,
  loginError: null,
  logoutLoading: false,
  logoutDone: false,
  logoutError: null,
};

export const LOGIN_GOOGLE_REQUEST = 'USER/LOGIN_GOOGLE_REQUEST';
export const LOGIN_GOOGLE_SUCCESS = 'USER/LOGIN_GOOGLE_SUCCESS';
export const LOGIN_GOOGLE_ERROR = 'USER/LOGIN_GOOGLE_ERROR';

export const LOGOUT_GOOGLE_REQUEST = 'USER/LOGOUT_GOOGLE_REQUEST';
export const LOGOUT_GOOGLE_SUCCESS = 'USER/LOGOUT_GOOGLE_SUCCESS';
export const LOGOUT_GOOGLE_ERROR = 'USER/LOGOUT_GOOGLE_ERROR';

export const googleLoginRequest = () => ({
  type: LOGIN_GOOGLE_REQUEST,
});

export const googleLogoutRequest = () => ({
  type: LOGOUT_GOOGLE_REQUEST,
});

const userReducer = (state = user, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      // login
      case LOGIN_GOOGLE_REQUEST:
        draft.loginLoading = true;
        draft.loginDone = false;
        draft.loginError = null;
        break;
      case LOGIN_GOOGLE_SUCCESS:
        draft.loginLoading = false;
        draft.loginDone = true;
        draft.account = true;
        break;
      case LOGIN_GOOGLE_ERROR:
        draft.loginLoading = false;
        draft.loginError = action.error;
        break;
      // logout
      case LOGOUT_GOOGLE_REQUEST:
        draft.logoutLoading = true;
        draft.logoutDone = true;
        break;
      case LOGOUT_GOOGLE_SUCCESS:
        draft.logoutLoading = false;
        draft.logoutDone = true;
        draft.account = null;
        break;
      case LOGOUT_GOOGLE_ERROR:
        draft.logoutLoading = false;
        draft.logoutDone = false;
        draft.logoutError = action.error;
        break;
      default:
        break;
    }
  });

export default userReducer;
