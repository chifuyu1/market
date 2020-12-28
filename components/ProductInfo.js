import React, { useEffect, useLayoutEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  BackHandler,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import IconIo from 'react-native-vector-icons/Ionicons';
import { priceComma } from '../util/price';
import Header from './Header';
import Popup from './Popup';
import PurchasePopup from './product/PurchasePopup';
import DrawerLayout from './DrawerLayout';
import BitSwiper from 'react-native-bit-swiper';
import { theme } from '../config/config';

function ProductInfo1({ route, openDrawer }) {
  const [buy, setBuy] = useState(false);
  const navigation = useNavigation();
  const routes = useRoute();

  useLayoutEffect(() => {
    navigation.setOptions({ tabBarVisible: false });
  }, [navigation]);

  useEffect(() => {
    const backAction = () => {
      navigation.goBack();
      return true;
    };
    const back = BackHandler.addEventListener('hardwareBackPress', backAction);
    return () => back.remove();
  }, [navigation]);

  const { info } = routes.params;
  const { uri, discount, price, storeName, title, quantity } = info;
  const data = [
    'https://images.unsplash.com/photo-1608806947629-da2ae50be954?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    'https://images.unsplash.com/photo-1608814697059-f99110964423?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=622&q=80',
    'https://images.unsplash.com/photo-1608822101969-3e362a03fd5e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
  ];
  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Header openDrawer={openDrawer} />
          {/* 헤더가 사진 위로 겹쳐서 보여야함 */}
          <BitSwiper
            items={data}
            onItemRender={(item, index) => (
              <View key={index} style={{ height: 150 }}>
                <Image
                  source={{ uri: item }}
                  style={{ width: '100%', height: '100%' }}
                />
              </View>
            )}
            paginateStyle={{
              marginTop: -20,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            paginateActiveDotStyle={{
              backgroundColor: 'rgba(255, 0, 0, .8)',
              width: 10,
              height: 10,
              borderRadius: 5,
              marginHorizontal: 3,
            }}
          />
        </View>
        <View style={styles.productInfo}>
          {/* <Text>{discount}</Text> */}
          <View>
            <Text>{title}</Text>
            <Text style={styles.priceText}>{priceComma(price)}원</Text>
          </View>
          <Text style={styles.productCodeText}>상품코드 3080-347202</Text>
        </View>
      </ScrollView>
      <View style={styles.paymentBar}>
        <TouchableWithoutFeedback onPress={() => {}}>
          <View style={styles.like}>
            <IconIo name='heart-outline' size={20} color='#ff0000' />
            <Text style={styles.likeText}>1.7만</Text>
          </View>
        </TouchableWithoutFeedback>
        <Popup
          visible={buy}
          setVisible={setBuy}
          Component={() => <PurchasePopup setVisible={setBuy} />}
        />
        <TouchableNativeFeedback onPress={() => setBuy(true)}>
          <View style={styles.payment}>
            <Text style={styles.paymentText}>구매하기</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    </>
  );
}

const ProductInfo = () => {
  return (
    <>
      <DrawerLayout Component={ProductInfo1} />
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    width: Dimensions.get('window').width,
    height: 150,
  },
  productInfo: {
    flexDirection: 'column',
    flex: 1,
    height: 200,
    justifyContent: 'space-evenly',
    paddingHorizontal: 10,
    backgroundColor: theme.container.background,
    elevation: 3,
  },
  productPrice: {},
  priceText: {
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 40,
  },
  productCodeText: {
    fontSize: 12,
    color: theme.product.couponText,
  },
  paymentBar: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 80,
    paddingVertical: 5,
    paddingHorizontal: 5,
    backgroundColor: theme.container.darken,
    justifyContent: 'space-evenly',
    elevation: 2,
  },
  like: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
  },
  likeText: {
    fontSize: 12,
  },
  payment: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.highlight_pressable.background,
    borderRadius: 10,
    height: 60,
    marginLeft: 10,
  },
  paymentText: {
    color: theme.highlight_pressable.text,
    fontSize: 20,
  },
});

export default ProductInfo;
