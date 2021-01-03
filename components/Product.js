import React, { useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableNativeFeedback,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { theme } from '../config/config';

function Product(info) {
  const { uri, discount, price, storeName, title } = info;
  const navigation = useNavigation();
  const moveProductInfo = useCallback(
    () => navigation.navigate('ProductInfo', { info }),
    [navigation, info],
  );
  // ...[len ? { flex: 1 } : {}]
  return (
    <TouchableNativeFeedback onPress={moveProductInfo}>
      <View style={[styles.container]}>
        {uri ? (
          <Image
            source={{
              uri,
            }}
            style={styles.image}
            resizeMode={'cover'}
          />
        ) : (
          <View style={styles.noData}>
            <Text>No Data</Text>
          </View>
        )}
        <View style={{ paddingHorizontal: 5 }}>
          <View style={styles.priceInfo}>
            <Text style={styles.discount}>{discount}</Text>
            <Text style={styles.price}>{price}</Text>
          </View>
          <Text style={styles.storeName}>{storeName}</Text>
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
