import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableNativeFeedback,
} from 'react-native';
import { theme } from '../config/config';
import { priceComma } from '../util/price';

const WIDTH = Dimensions.get('window').width;

function Product(info) {
  const { uri, discount, price, storeName, title, quantity, len } = info;
  const navigation = useNavigation();

  return (
    <TouchableNativeFeedback
      onPress={() => navigation.navigate('ProductInfo', { info })}
    >
      <View style={[styles.container, ...[len ? { flex: 1 } : {}]]}>
        {uri ? (
          <Image
            source={{
              uri,
            }}
            style={styles.image}
            resizeMode={'contain'}
          />
        ) : (
          <View
            style={{
              backgroundColor: theme.container.non_active,
              alignItems: 'center',
              justifyContent: 'center',
              height: 100,
            }}
          >
            <Text>No Data</Text>
          </View>
        )}
        <View style={styles.priceInfo}>
          <Text style={styles.discount}>{discount}</Text>
          <Text style={styles.price}>{priceComma(price)}</Text>
        </View>
        <Text style={styles.storeName}>{storeName}</Text>
        <Text
          style={styles.productTitle}
          numberOfLines={1}
          ellipsizeMode={'tail'}
        >
          {title}
        </Text>
        <Text style={styles.productQuantity}>{quantity}</Text>
      </View>
    </TouchableNativeFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.navigationBar.bottomTab.containerBackground,
    marginHorizontal: 2,
    paddingHorizontal: 5,
    marginVertical: 10,
  },
  image: {
    // width: WIDTH / 2,
    height: 175,
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
});

export default React.memo(Product);
