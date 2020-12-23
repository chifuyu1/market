import {GoogleSignin, statusCodes} from '@react-native-community/google-signin';
import KakaoLogins, {KAKAO_AUTH_TYPES} from '@react-native-seoul/kakao-login';

export const googleCheckSign = async () => {
  const result = await GoogleSignin.isSignedIn();
  return result;
};

export const googleSignIn = async () => {
  try {
    GoogleSignin.configure({
      offlineAccess: true,
      webClientId:
        '906621653717-sdt731rmkjjgln9havtcf29evu7jatlq.apps.googleusercontent.com',
    });
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    if (userInfo) return userInfo.user.name;
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      // user cancelled the login flow
    } else if (error.code === statusCodes.IN_PROGRESS) {
      // operation (e.g. sign in) is in progress already
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      // play services not available or outdated
    } else {
      // some other error happened
    }
  }
};

export const googleSignOut = async () => {
  try {
    // await GoogleSignin.hasPlayServices();
    // await GoogleSignin.revokeAccess();
    await GoogleSignin.signOut();
    const userInfo = await GoogleSignin.isSignedIn();
    console.log(userInfo);
    if (!userInfo) return false;
    else return true;
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      // user cancelled the login flow
    } else if (error.code === statusCodes.IN_PROGRESS) {
      // operation (e.g. sign in) is in progress already
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      // play services not available or outdated
    } else {
      // some other error happened
    }
  }
};

export const kakaoSignIn = async () => {
  try {
    await KakaoLogins.login([KAKAO_AUTH_TYPES.Account]);
    return await KakaoLogins.getProfile((err, result) => {
      if (err) return false;
      if (!err && result.id) return result.id;
    });
  } catch (err) {
    console.error(err);
  }
};

export const kakaoSignOut = async () => {
  try {
    await KakaoLogins.logout();
    return await KakaoLogins.getProfile((err, result) => {
      if (err) return false;
      return result.id;
    });
  } catch (err) {
    console.error(err);
  }
};
