import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableNativeFeedback,
  Image,
  StyleSheet,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Popup from '../Popup';
import { theme } from '../../config/config';
import PurchasePopup from '../product/PurchasePopup';
import { priceComma } from '../../util/price';
import Quantity from '../product/Quantity';
import { ProductListSecond } from '../ProductList';

export default React.memo(function CartItem({ item }) {
  const [checkBox, setCheckBox] = useState(false);
  const [option, setOption] = useState(false);
  const [quantity, setQuantity] = useState(false);
  return (
    <View style={styles.product}>
      <View style={{ marginVertical: 10, justifyContent: 'center' }}>
        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>
          {item.deliveryType}
        </Text>
      </View>
      <View style={styles.productContentContainer}>
        <View style={{ marginRight: 10 }}>
          <CheckBox
            value={checkBox}
            onValueChange={(newValue) => setCheckBox(newValue)}
            tintColors={{ true: theme.highlight_pressable.background }}
          />
        </View>
        <View style={styles.productInfo}>
          <ProductListSecond
            options={`소라/FREE`}
            uri={item.uri}
            title={item.title}
            price={item.price}
          />
          <View style={styles.productOptions}>
            <Popup
              Component={() => <PurchasePopup setVisible={setOption} />}
              visible={option}
              setVisible={setOption}
            />
            <TouchableNativeFeedback onPress={() => setOption(true)}>
              <View style={styles.productOption}>
                <Text style={styles.productOptionText}>옵션변경</Text>
              </View>
            </TouchableNativeFeedback>
            <View style={{ width: 10, height: 5 }} />
            <Popup
              Component={() => <Quantity setVisible={setQuantity} />}
              visible={quantity}
              setVisible={setOption}
            />
            <TouchableNativeFeedback onPress={() => setQuantity(true)}>
              <View style={styles.productOption}>
                <Text style={styles.productOptionText}>1</Text>
              </View>
            </TouchableNativeFeedback>
          </View>
        </View>
      </View>
      <View style={styles.productPrice}>
        <View>
          <Text>상품 금액 25,800원</Text>
          <Text>할인 금액 25,80원</Text>
          <Text>배송비 0원</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={styles.endInfoLeftText}>결제 예상 </Text>
          <Text style={styles.endInfoRightText}>23,220원</Text>
        </View>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  product: {
    marginVertical: 10,
    backgroundColor: theme.container.background,
    paddingHorizontal: 10,
  },
  productContentContainer: {
    flexDirection: 'row',
  },
  productInfo: {
    flex: 1,
  },
  productOptions: {
    flexDirection: 'row',
    flex: 1,
  },
  productOption: {
    flex: 1,
    backgroundColor: theme.pressable.background,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 5,
    borderStyle: 'solid',
    borderColor: theme.pressable.border,
    borderWidth: 1,
  },
  productOptionText: {
    fontWeight: 'bold',
  },
  productPrice: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
});
