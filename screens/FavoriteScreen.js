import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  Button,
  TouchableNativeFeedback,
  BackHandler,
  ToastAndroid,
  ActivityIndicator,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import DrawerLayout from '../components/DrawerLayout';
import Header from '../components/Header';
import Loading from '../components/Loading';
import Product from '../components/Product';
import { commonStyles } from '../components/style/styles';
import { theme } from '../config/config';
import { favoritesItem } from '../dummy/dummy';
import { getFavoritesRequest } from '../reducer/favorites';

function FavoriteListHeader() {
  const navigation = useNavigation();
  const moveLoginPage = useCallback(() => navigation.navigate('마이페이지'), [
    navigation,
  ]);
  return (
    <>
      <View style={styles.headerContainer}>
        <Text style={styles.headerContainerText}>찜한 상품</Text>
      </View>
      <View style={styles.headerBox}>
        <View>
          <Text style={styles.headerText}>로그인을 하시면 나만의</Text>
          <Text style={styles.headerText}>서랍을 만드실 수 있어요!</Text>
        </View>
        <TouchableNativeFeedback onPress={moveLoginPage}>
          <View style={styles.login}>
            <Text style={styles.loginText}>로그인</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    </>
  );
}

function FavoriteScreens({ openDrawer }) {
  const [refresh, setRefresh] = useState(false);
  const dispatch = useDispatch();
  const items = useSelector((state) => state.favorites);

  const onRefresh = useCallback(() => {
    setRefresh(false);
  }, []);

  const onTake = useCallback(() => dispatch(getFavoritesRequest()), [dispatch]);

  useEffect(() => {
    if (items.favorites.length === 0) {
      onTake();
    }
  }, [items.favorites.length, onTake]);

  return (
    <>
      <Header title={'찜'} openDrawer={openDrawer} />
      <FavoriteListHeader />
      <>
        {items.favoritesLoading ? (
          <Loading />
        ) : items.favorites.length !== 0 ? (
          <FlatList
            data={favoritesItem}
            renderItem={({ item }) => {
              return (
                <Product
                  storeName={item.storeName}
                  discount={item.discount}
                  uri={item.uri}
                  price={item.price}
                  title={item.title}
                />
              );
            }}
            keyExtractor={(item, index) => index.toString()}
            numColumns={2}
            columnWrapperStyle={{ justifyContent: 'space-evenly' }}
            showsVerticalScrollIndicator={false}
            onRefresh={onRefresh}
            refreshing={refresh}
          />
        ) : (
          <Product
            price={0}
            title={'찜한 상품이 없습니다.'}
            quantity={'0'}
            uri={''}
            len={false}
            discount={'0'}
            storeName={'No Data'}
          />
        )}
      </>
    </>
  );
}

function FavoriteScreen() {
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
    <>
      <DrawerLayout Component={FavoriteScreens} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginTop: 10,
  },
  headerContainer: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  headerContainerText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  headerBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.container.background,
    elevation: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  headerText: {
    fontSize: 14,
  },
  login: {
    borderRadius: 4,
    borderColor: theme.container.highlight_border,
    borderStyle: 'solid',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 4,
    paddingHorizontal: 10,
  },
  loginText: {
    color: theme.container.highlight_text,
  },
});

export default React.memo(FavoriteScreen);
