import React from 'react';
import { View, Text, TouchableWithoutFeedback, Image } from 'react-native';
import IconIo from 'react-native-vector-icons/Ionicons';
import { theme } from '../../config/config';
import { priceComma } from '../../util/price';
import { formStyles } from './buyFormStyles';

export default React.memo(function BuyViewProduct({
  amount,
  price,
  uri,
  productName,
  orderProduct,
  onViewPruduct,
}) {
  return (
    <TouchableWithoutFeedback onPress={onViewPruduct}>
      <View style={formStyles.repeatContainer}>
        <View style={formStyles.repeatLeft}>
          <Text style={formStyles.repeatTitle}>주문상품 총 {amount}개</Text>
          <Text style={formStyles.inputTag}>전체 무료배송</Text>
          {orderProduct && (
            <View style={{ marginVertical: 10 }}>
              <View style={{ flexDirection: 'row' }}>
                <Image
                  source={{ uri: uri }}
                  style={{ width: 80, height: 80 }}
                />
                <View style={formStyles.productInfo}>
                  <Text numberOfLines={1}>{productName}</Text>
                  <Text>
                    {priceComma(price)}원 수량 {amount}개
                  </Text>
                </View>
              </View>
              <View style={formStyles.choicedOptions}>
                <Text>소라/FREE</Text>
              </View>
            </View>
          )}
        </View>
        <View style={{ marginLeft: 10 }}>
          {orderProduct ? (
            <IconIo
              name='caret-up-outline'
              size={20}
              color={theme.pressable.border}
            />
          ) : (
            <IconIo
              name='caret-down-outline'
              size={20}
              color={theme.pressable.border}
            />
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
});
