import produce, { Draft } from 'immer';

type UserState = {
  account: boolean | any;
  loginLoading: boolean;
  loginDone: boolean;
  loginError: null | any;
  logoutLoading: boolean;
  logoutDone: boolean;
  logoutError: null | any;
};

const user: UserState = {
  account: false,
  loginLoading: false,
  loginDone: false,
  loginError: null,
  logoutLoading: false,
  logoutDone: false,
  logoutError: null,
};

export const LOGIN_REQUEST = 'USER/LOGIN_REQUEST' as const;
export const LOGIN_SUCCESS = 'USER/LOGIN_GOOGLE_SUCCESS' as const;
export const LOGIN_ERROR = 'USER/LOGIN_ERROR' as const;

export const LOGOUT_REQUEST = 'USER/LOGOUT_REQUEST' as const;
export const LOGOUT_SUCCESS = 'USER/LOGOUT_SUCCESS' as const;
export const LOGOUT_ERROR = 'USER/LOGOUT_ERROR' as const;

export const googleLoginRequest = () => ({
  type: LOGIN_REQUEST,
});

export const googleLogoutRequest = () => ({
  type: LOGOUT_REQUEST,
});

const userReducer = (state: UserState = user, action: any) =>
  produce(state, (draft: Draft<UserState>) => {
    switch (action.type) {
      // login
      case LOGIN_REQUEST:
        draft.loginLoading = true;
        draft.loginDone = false;
        draft.loginError = null;
        break;
      case LOGIN_SUCCESS:
        draft.loginLoading = false;
        draft.loginDone = true;
        draft.account = true;
        break;
      case LOGIN_ERROR:
        draft.loginLoading = false;
        draft.loginError = action.error;
        break;
      // logout
      case LOGOUT_REQUEST:
        draft.logoutLoading = true;
        draft.logoutDone = true;
        break;
      case LOGOUT_SUCCESS:
        draft.logoutLoading = false;
        draft.logoutDone = true;
        draft.account = null;
        break;
      case LOGOUT_ERROR:
        draft.logoutLoading = false;
        draft.logoutDone = false;
        draft.logoutError = action.error;
        break;
      default:
        break;
    }
  });

export default userReducer;
