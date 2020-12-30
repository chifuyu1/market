import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  Text,
  FlatList,
  BackHandler,
  ToastAndroid,
  ActivityIndicator,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Category, { CategoryHorizontal } from '../components/Category';
import DrawerLayout from '../components/DrawerLayout';
import Header from '../components/Header';
import { HomeHeader } from '../components/Header';
import Product from '../components/Product';
import { getProductsRequest } from '../reducer/product';
import { theme } from '../config/config';

const MainScreens = ({ openDrawer }) => {
  let currentCount = useRef(false);
  const [male, setMale] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const onChangeMale = useCallback(() => {
    setMale(true);
  }, []);

  const onChangeFemale = useCallback(() => {
    setMale(false);
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(false);
    dispatch(getProductsRequest());
  }, [dispatch]);

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

  useEffect(() => {
    if (product.products.length === 0) {
      dispatch(getProductsRequest());
    }
  }, [product, dispatch]);

  // const useData = dummy;
  const styles = StyleSheet.create({
    loading: { justifyContent: 'center', alignItems: 'center' },
    listHeader: { marginVertical: 20, paddingLeft: 10 },
    listHeaderText: { fontSize: 20, fontWeight: 'bold' },
  });
  const numColumns = 2;
  return (
    <>
      <Header Component={HomeHeader} openDrawer={openDrawer} />
      <Category Component={CategoryHorizontal} />
      {product.products.length === 0 ? (
        <ScrollView contentContainerStyle={styles.loading}>
          <ActivityIndicator
            size='large'
            color={theme.highlight_pressable.background}
          />
        </ScrollView>
      ) : (
        <FlatList
          data={product.products}
          renderItem={({ item }) => (
            <Product
              storeName={item.author}
              discount={item.saleRate}
              uri={item.imageUrl}
              price={item.price}
              title={item.title}
              key={item.id}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
          numColumns={numColumns}
          ListHeaderComponent={() => (
            <Text style={styles.listHeaderText}>회원님을 위한 추천 상품</Text>
          )}
          ListHeaderComponentStyle={styles.listHeader}
          showsVerticalScrollIndicator={false}
          onRefresh={onRefresh}
          refreshing={refreshing}
          columnWrapperStyle={{ justifyContent: 'space-evenly' }}
        />
      )}
    </>
  );
};

export default React.memo(function MainScreen() {
  return <DrawerLayout Component={MainScreens} />;
});
