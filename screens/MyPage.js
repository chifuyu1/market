import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Button,
  BackHandler,
  ToastAndroid,
} from 'react-native';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import Coupon from '../components/Coupon';
import DrawerLayout from '../components/DrawerLayout';
import Header from '../components/Header';
import Information from '../components/Information';
import Login from '../components/Login';
import { theme } from '../config/config';

const MyPageScreens = ({ openDrawer }) => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <Header title={'마이페이지'} openDrawer={openDrawer} />
      <View style={styles.container}>
        <Login />
        <Information />
      </View>
    </View>
  );
};

function MyPage() {
  const message = `앱을 종료하려면 한 번 더 누르세요.`;
  let currentCount = false;
  const backAction = () => {
    if (currentCount === false) {
      ToastAndroid.show(message, ToastAndroid.SHORT);
      currentCount = true;
      setTimeout(() => {
        currentCount = false;
      }, 2000);
    } else {
      BackHandler.exitApp();
    }
    return true;
  };
  useEffect(() => {
    const back = BackHandler.addEventListener('hardwareBackPress', backAction);
    return () => back.remove();
  }, []);
  return (
    <>
      <DrawerLayout Component={MyPageScreens} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
});

export default React.memo(MyPage);
