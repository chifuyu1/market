import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import IconIo from 'react-native-vector-icons/Ionicons';
import Header from './Header';
import Popup from './Popup';
import PurchasePopup from './product/PurchasePopup';
import DrawerLayout from './DrawerLayout';
import BitSwiper from 'react-native-bit-swiper';
import { theme } from '../config/config';

function ProductInfo1({ openDrawer }) {
  const [buy, setBuy] = useState(false);
  const routes = useRoute();
  const { info } = routes.params;
  const { uri, discount, price, title } = info;

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Header openDrawer={openDrawer} />
          <BitSwiper
            items={[uri, uri, uri]}
            onItemRender={(item, index) => (
              <View key={index} style={styles.imageContainer}>
                <Image
                  source={{ uri: item }}
                  style={styles.imageSwipe}
                  resizeMode='contain'
                />
              </View>
            )}
            paginateStyle={styles.dotContainer}
            paginateActiveDotStyle={styles.ActivityDot}
          />
        </View>
        <View style={styles.productInfo}>
          <View>
            <Text>{title}</Text>
            <View style={styles.priceContainer}>
              <Text style={[styles.priceText, styles.discountText]}>
                {discount}
              </Text>
              <Text style={styles.priceText}>{price}원</Text>
            </View>
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
  return <DrawerLayout Component={ProductInfo1} />;
};

const styles = StyleSheet.create({
  image: {
    width: Dimensions.get('window').width,
    height: 150,
  },
  imageContainer: {
    width: Dimensions.get('screen').width + 30,
    height: Dimensions.get('screen').width + 30,
    marginHorizontal: -11,
    marginTop: -10,
  },
  imageSwipe: { width: '100%', height: '100%', padding: 0, margin: 0 },
  dotContainer: {
    marginTop: -30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 0,
  },
  ActivityDot: {
    backgroundColor: 'rgba(255, 0, 0, .8)',
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 3,
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
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  priceText: {
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 40,
  },
  discountText: {
    color: theme.highlight_pressable.background,
    marginRight: 10,
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
