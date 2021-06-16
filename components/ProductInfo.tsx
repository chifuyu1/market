import React, { useCallback, useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableNativeFeedback,
  BackHandler,
  Image,
} from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import IconIo from 'react-native-vector-icons/Ionicons';
import Header from './Header';
import Popup from './Popup';
import PurchasePopup from './product/PurchasePopup';
import DrawerLayout from './DrawerLayout';
// import BitSwiper from 'react-native-bit-swiper';
import { theme } from '../config/config';
import { useDispatch, useSelector } from 'react-redux';
import {
  addFavoritesRequest,
  deleteFavoritesRequest,
} from '../reducer/favorites';
import { ComponentWithDrawer as ProductInfoProps } from './types/type';
import { RootState } from '../reducer';
import Swiper from 'react-native-swiper';
import { dummy } from '../dummy/dummy';

type Params = {
  info: {
    id: number;
    uri: string;
    discount: string;
    price: string;
    title: string;
  };
};

const deviceWidth = Dimensions.get('window').width;

function ProductInfo1({ openDrawer }: ProductInfoProps) {
  const [buy, setBuy] = useState(false);
  const routes = useRoute<RouteProp<Params, 'info'>>();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const favorite = useSelector((state: RootState) => state.favorites.favorites);

  const onAddFavorite = useCallback(
    () => dispatch(addFavoritesRequest(routes?.params.id)),
    [dispatch, routes],
  );

  const onDeleteFavorite = useCallback(
    () => dispatch(deleteFavoritesRequest(routes?.params!.id)),
    [dispatch, routes],
  );

  const onFavorite = useCallback(() => {
    const isFavorite = favorite.find(
      (element: any) => element.id === routes?.params.title,
    );
    return isFavorite ? onDeleteFavorite() : onAddFavorite();
  }, [favorite, onAddFavorite, onDeleteFavorite, routes?.params.title]);

  const backAction = useCallback(() => {
    navigation.goBack();
    return true;
  }, [navigation]);

  useEffect(() => {
    const back = BackHandler.addEventListener('hardwareBackPress', backAction);
    return () => back.remove();
  }, [backAction]);

  const { uri, discount, price, title } = routes?.params;
  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Header openDrawer={openDrawer} />
          {/* <BitSwiper
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
          /> */}
          <Swiper
            showsButtons={false}
            loop={false}
            autoplay={false}
            style={{ height: deviceWidth }}
            activeDotColor={theme.highlight_pressable.background}
          >
            {dummy.map((element, index) => (
              <Image
                key={index}
                source={{ uri: element.uri }}
                style={{ width: deviceWidth, height: deviceWidth }}
              />
            ))}
          </Swiper>
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
        <TouchableNativeFeedback onPress={onFavorite}>
          <View style={styles.like}>
            {favorite.find((element) => element.id === element.title) ? (
              <IconIo name='heart' size={20} color='#ff0000' />
            ) : (
              <IconIo name='heart-outline' size={20} color='#ff0000' />
            )}
            <Text style={styles.likeText}>찜</Text>
          </View>
        </TouchableNativeFeedback>
        <Popup
          visible={buy}
          setVisible={setBuy}
          Component={() => (
            <PurchasePopup setVisible={setBuy} productId={routes.params.id} />
          )}
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
