import React, { useCallback, useEffect, useRef } from 'react';
import { View, BackHandler, ToastAndroid } from 'react-native';
import DrawerLayout from '../components/DrawerLayout';
import Header from '../components/Header';
import Information from '../components/Information';
import Login from '../components/Login';

const MyPageScreens = ({ openDrawer }) => {
  let currentCount = useRef(false);
  const backAction = useCallback(() => {
    if (currentCount.current === false) {
      ToastAndroid.show(
        '앱을 종료하려면 한 번 더 누르세요.',
        ToastAndroid.SHORT,
      );
      currentCount.current = true;
      setTimeout(() => {
        currentCount.current = false;
      }, 2000);
    } else {
      BackHandler.exitApp();
    }
    return true;
  }, []);

  useEffect(() => {
    const back = BackHandler.addEventListener('hardwareBackPress', backAction);
    return () => back.remove();
  }, [backAction]);

  return (
    <View style={{ flex: 1 }}>
      <Header title={'마이페이지'} openDrawer={openDrawer} />
      <View style={{ paddingHorizontal: 10 }}>
        <Login />
        <Information />
      </View>
    </View>
  );
};

export default React.memo(function MyPage() {
  return (
    <>
      <DrawerLayout Component={MyPageScreens} />
    </>
  );
});
