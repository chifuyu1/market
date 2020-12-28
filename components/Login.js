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
import { theme } from '../config/config';
import BottomOneButton from './BottomOneButton';

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
  const moveManager = useCallback(() => navigation.navigate('ManagerHome'), [
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

  // <Button onPress={moveCoupon} title='쿠폰 보기' />
  //<Button onPress={moveCart} title='장바구니' />
  const subMenuItem = [`쿠폰 보기`, `장바구니`];
  return (
    <>
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
      <View style={styles.subMenuItemContainer}>
        {subMenuItem.map((value, index, arr) => (
          <TouchableNativeFeedback
            key={index}
            onPress={index !== arr.length - 1 ? moveCoupon : moveCart}
          >
            <View
              style={
                index !== arr.length - 1
                  ? [styles.subMenuItem, { marginRight: 5 }]
                  : [styles.subMenuItem, { marginLeft: 5 }]
              }
            >
              <Text style={styles.subMenuItemText}>{value}</Text>
            </View>
          </TouchableNativeFeedback>
        ))}
      </View>
      <BottomOneButton content={`스토어 관리`} action={moveManager} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
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
    marginBottom: 10,
  },
  socialImage: {
    width: Dimensions.get('window').width * 0.5,
    height: (Dimensions.get('window').width * 0.5 * 91) / 493,
  },
  socialContainer: {
    marginVertical: 5,
  },
  subMenuItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 10,
  },
  subMenuItem: {
    flex: 1,
    padding: 30,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: theme.pressable.border,
    borderStyle: `solid`,
    justifyContent: `center`,
    alignItems: `center`,
  },
  subMenuItemText: {
    fontWeight: `bold`,
    fontSize: 18,
  },
});

export default Login;
