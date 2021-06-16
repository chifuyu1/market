import React, { useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableNativeFeedback,
  Dimensions,
} from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { theme } from '../config/config';

type ProductProps = {
  title: string;
  price: number;
  discount: string;
  image: string;
  storeName: string;
};

type Params = {
  info: ProductProps;
};

function Product({ title, discount, price, image, storeName }: ProductProps) {
  const navigation = useNavigation();
  const route = useRoute<RouteProp<Params, 'info'>>();
  const moveProductInfo = useCallback(
    () => navigation.navigate('ProductInfo', { info: { ...route.params } }),
    [navigation, route.params],
  );

  return (
    <TouchableNativeFeedback onPress={moveProductInfo}>
      <View style={[styles.container]}>
        {image ? (
          <Image
            source={{
              uri: image,
            }}
            style={styles.image}
            resizeMode={'cover'}
          />
        ) : (
          <View style={[styles.image, styles.noData]}>
            <Text>No Data</Text>
          </View>
        )}
        <View style={{ paddingHorizontal: 5 }}>
          <View style={styles.priceInfo}>
            <Text style={styles.discount}>{discount}</Text>
            <Text style={styles.price}>{price}</Text>
          </View>
          {/* <Text style={styles.storeName}>{storeName}</Text> */}
          <View style={{ flexWrap: 'wrap', alignItems: 'flex-start' }}>
            <Text style={styles.productTitle}>
              {title.length >= 20
                ? title.substring(0, 20).concat('...')
                : title}
              {/* {title} */}
            </Text>
          </View>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
}

const width = Dimensions.get('screen').width / 2 - 10;
const styles = StyleSheet.create({
  container: {
    // marginHorizontal: 5,
    marginVertical: 5,
    paddingBottom: 10,
  },
  image: {
    width: width,
    height: width,
    borderRadius: 10,
  },
  priceInfo: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  discount: {
    fontSize: 16,
    color: theme.product.discountText,
    fontWeight: 'bold',
    marginRight: 10,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productTitle: {
    fontSize: 12,
    lineHeight: 24,
  },
  noData: {
    backgroundColor: theme.container.non_active,
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
  },
});

export default React.memo(Product);
