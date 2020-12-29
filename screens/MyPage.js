import React, { useEffect } from 'react';
import { View, BackHandler, ToastAndroid } from 'react-native';
import DrawerLayout from '../components/DrawerLayout';
import Header from '../components/Header';
import Information from '../components/Information';
import Login from '../components/Login';

const MyPageScreens = ({ openDrawer }) => {
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
