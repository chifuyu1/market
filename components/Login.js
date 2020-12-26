import React, { useCallback, useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableNativeFeedback,
  TouchableHighlight,
  Image,
  Button,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import {
  googleLoginRequest,
  googleLogoutRequest,
  kakaoLoginRequest,
  kakaoLogoutRequest,
} from '../reducer/user';

function Login() {
  const account = useSelector((state) => state.user.account);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const moveCoupon = useCallback(() => navigation.navigate('Coupon'), [
    navigation,
  ]);
  const moveCart = useCallback(() => navigation.navigate('OrderList'), [
    navigation,
  ]);
  const googleLogin = useCallback(() => dispatch(googleLoginRequest()), [
    dispatch,
  ]);
  const googleLogout = useCallback(() => dispatch(googleLogoutRequest()), [
    dispatch,
  ]);
  const kakaoLogin = useCallback(() => dispatch(kakaoLoginRequest()), [
    dispatch,
  ]);
  const kakaoLogout = useCallback(() => dispatch(kakaoLogoutRequest()), [
    dispatch,
  ]);

  return (
    <>
      <Button onPress={moveCoupon} title='쿠폰 보기' />
      <Text> </Text>
      <Button onPress={moveCart} title='장바구니' />
      {!account ? (
        <>
          <View style={styles.container}>
            <View>
              <Text>회원이라면 누구나 무료배송!</Text>
              <Text>별도의 회원가입 없이 소셜 로그인으로 혜택!</Text>
            </View>
          </View>
          <View style={styles.social}>
            <View style={styles.socialContainer}>
              <TouchableHighlight
                onPress={googleLogin}
                style={styles.socialContainer}
              >
                <Image
                  style={styles.socialImage}
                  source={require(`../assets/google.png`)}
                />
              </TouchableHighlight>
              <TouchableHighlight
                onPress={kakaoLogin}
                style={styles.socialContainer}
              >
                <Image
                  style={styles.socialImage}
                  source={require(`../assets/kakao.png`)}
                />
              </TouchableHighlight>
            </View>
          </View>
        </>
      ) : (
        <View>
          <Button onPress={googleLogout} title='구글 로그아웃' />
          <Text>fff</Text>
          <Button onPress={kakaoLogout} title='카카오 로그아웃' />
          <Text>fff</Text>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  login: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  button: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.25)',
    borderStyle: 'solid',
    paddingHorizontal: 5,
    paddingVertical: 4,
    height: 40,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'rgba(0, 0, 0, 0.25)',
  },
  social: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  socialImage: {
    width: Dimensions.get('window').width * 0.5,
    height: (Dimensions.get('window').width * 0.5 * 91) / 493,
  },
  socialContainer: {
    marginVertical: 5,
  },
});

export default Login;
