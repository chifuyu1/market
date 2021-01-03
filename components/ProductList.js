import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { theme } from '../config/config';
import { formStyles } from './buy/buyFormStyles';

function ProductList({ uri, price, amount, productName }) {
  return (
    <>
      <View style={{ flexDirection: 'row' }}>
        <Image source={{ uri }} style={{ width: 80, height: 80 }} />
        <View style={[formStyles.productInfo]}>
          <Text numberOfLines={1}>{productName}</Text>
          <Text>
            {price}원 수량 {amount}개
          </Text>
        </View>
      </View>
      <View style={[formStyles.choicedOptions]}>
        <Text style={{ color: '#000' }}>소라/FREE</Text>
      </View>
    </>
  );
}

export function ProductListSecond({ price, uri, options, title }) {
  const styles = StyleSheet.create({
    productImageContainer: {
      flexDirection: 'row',
    },
    productImage: {
      width: 80,
      height: 80,
    },
    choicedOptions: {
      flex: 1,
      paddingVertical: 10,
      paddingHorizontal: 10,
      borderRadius: 5,
      marginVertical: 10,
      backgroundColor: theme.pressable.border,
    },
  });
  return (
    <>
      <View style={styles.productImageContainer}>
        <Image source={{ uri }} style={styles.productImage} />
        <View style={{ justifyContent: 'space-around', marginLeft: 5 }}>
          {/* <Text numberOfLines={10}>{title}</Text> */}
          <Text ellipsizeMode='tail'>
            (무조건 2장!) 10컬러 가을부터 겨울까지 모두다 한꺼번에 드립니다
          </Text>
          <Text>{price}</Text>
        </View>
      </View>
      <View style={styles.choicedOptions}>
        <Text>{options}</Text>
      </View>
    </>
  );
}

export default ProductList;
