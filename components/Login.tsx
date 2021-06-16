import React, { useCallback, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableNativeFeedback,
  TouchableHighlight,
  Image,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
// import axios from 'axios';
// import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { theme } from '../config/config';
import BottomOneButton from './BottomOneButton';
import { LOGIN_REQUEST, LOGOUT_REQUEST } from '../reducer/user';
import { RootState } from '../reducer';

function Login() {
  const account = useSelector((state: RootState) => state.user.account);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  // const { getItem, setItem, removeItem } = useAsyncStorage();

  const moveCoupon = useCallback(() => navigation.navigate('Coupon'), [
    navigation,
  ]);
  const moveCart = useCallback(() => navigation.navigate('OrderList'), [
    navigation,
  ]);
  const moveManager = useCallback(() => navigation.navigate('ManagerHome'), [
    navigation,
  ]);

  const login = useCallback(async () => {
    try {
      // const token = await axios.post(`${baseURL}/api/login`);
      // console.log(token);
      // await setItem('key', (error) => {
      //   throw new Error(error.message);
      // });
      dispatch({ type: LOGIN_REQUEST });
    } catch (err) {
      console.error(err);
    }
  }, [dispatch]);

  const logout = useCallback(async () => {
    try {
      // const getToken = await getItem((error) => {
      //   throw new Error(error.message);
      // });
      // const result = await axios.post(`${baseURL}/api/logout`);

      dispatch({ type: LOGOUT_REQUEST });
    } catch (err) {
      console.error(err);
    }
  }, [dispatch]);

  useEffect(() => {}, []);

  return (
    <>
      {!account ? (
        <View>
          {/* <TouchableNativeFeedback onPress={googleLogout} title='로그아웃'>
          <Text>fff</Text>
          </TouchableNativeFeedback> */}
          <BottomOneButton action={logout} content={'로그아웃'} background />
        </View>
      ) : (
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
                onPress={login}
                style={styles.socialContainer}
              >
                <Image
                  style={styles.socialImage}
                  source={require('../assets/google.png')}
                />
              </TouchableHighlight>
            </View>
          </View>
        </>
      )}
      <View style={styles.subMenuItemContainer}>
        <TouchableNativeFeedback onPress={moveCoupon}>
          <View style={[styles.subMenuItem, { marginRight: 5 }]}>
            <Text style={styles.subMenuItemText}>쿠폰</Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={moveCart}>
          <View style={[styles.subMenuItem, { marginLeft: 5 }]}>
            <Text style={styles.subMenuItemText}>장바구니</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
      <BottomOneButton
        content={'스토어 관리'}
        action={moveManager}
        background
      />
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
    borderStyle: 'solid',
    justifyContent: 'center',
    alignItems: 'center',
  },
  subMenuItemText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default Login;
