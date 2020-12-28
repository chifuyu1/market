import React, { useCallback, useEffect, useState } from 'react';
import { Text, FlatList, BackHandler, ToastAndroid, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Category, { CategoryHorizontal } from '../components/Category';
import DrawerLayout from '../components/DrawerLayout';
import Header from '../components/Header';
import { HomeHeader } from '../components/Header';
import Product from '../components/Product';
import { dummy } from '../dummy/dummy';
import { getProductsRequest } from '../reducer/product';

const numColumns = 2;

const MainScreens = ({ openDrawer }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product);
  const getItems = useCallback(() => dispatch(getProductsRequest()), [
    dispatch,
  ]);

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

  // const useData = products.length === 0 ? dummy : products;
  const useData = dummy;

  return (
    <>
      <Header Component={HomeHeader} openDrawer={openDrawer} />
      <Category Component={CategoryHorizontal} />
      <FlatList
        data={useData}
        renderItem={({ item }) => (
          <Product
            storeName={item.storeName}
            discount={item.discount}
            uri={item.uri}
            len={true}
            quantity={item.quantity}
            price={item.price}
            title={item.title}
            key={item.id}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
        numColumns={numColumns}
        ListHeaderComponent={() => (
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
            회원님을 위한 추천 상품
          </Text>
        )}
        ListHeaderComponentStyle={{ marginVertical: 20, paddingLeft: 10 }}
        windowSize={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 200 }}
      />
    </>
  );
};

const MainScreen = () => {
  return (
    <>
      <DrawerLayout Component={MainScreens} />
    </>
  );
};

export default React.memo(MainScreen);
