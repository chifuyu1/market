import React from 'react';
import {View, Text, StyleSheet, ScrollView, Button} from 'react-native';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import Coupon from '../components/Coupon';
import DrawerLayout from '../components/DrawerLayout';
import Header from '../components/Header';
import Information from '../components/Information';
import Login from '../components/Login';

const MyPageScreens = ({openDrawer}) => {
  const navigation = useNavigation();
  return (
    <>
      <Header title={'마이페이지'} openDrawer={openDrawer} />
      <View style={styles.container}>
        <Login />
        <Information />
      </View>
    </>
  );
};

function MyPage() {
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
