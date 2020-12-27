import CheckBox from '@react-native-community/checkbox';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableNativeFeedback,
  Image,
} from 'react-native';
import { theme } from '../config/config';
import { priceComma } from '../util/price';
import Popup from './Popup';
import PurchasePopup from './product/PurchasePopup';

function CartItem({ item }) {
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
          <View style={styles.productImageContainer}>
            <Image source={{ uri: item.uri }} style={styles.productImage} />
            <View style={{ justifyContent: 'space-around', marginLeft: 5 }}>
              <Text numberOfLines={10}>{item.title}</Text>
              <Text>{priceComma(item.price)}</Text>
            </View>
          </View>
          <View style={styles.choicedOptions}>
            <Text>소라/FREE</Text>
          </View>
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
}

function Cart() {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const navigation = useNavigation();

  const arr = [
    {
      title: `코카콜라 200ml`,
      deliveryType: `니드온 배송상품`,
      uri: `https://nimage.g-enews.com/phpwas/restmb_allidxmake.php?idx=5&simg=2019091115351801964e8b8a793f7210178107185.jpg`,
      storeName: `coke`,
      quantity: `1`,
      price: 10000,
      orderDay: `2020-10-06`,
    },
    {
      title: `코카콜라 100ml`,
      deliveryType: `니드온 배송상품`,
      uri: `https://nimage.g-enews.com/phpwas/restmb_allidxmake.php?idx=5&simg=2019091115351801964e8b8a793f7210178107185.jpg`,
      storeName: `coke`,
      quantity: `1`,
      price: 10000,
      orderDay: `2020-10-06`,
    },
  ];

  return (
    <>
      <View style={styles.checkBox}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <CheckBox
            value={toggleCheckBox}
            onValueChange={(newValue) => setToggleCheckBox(newValue)}
            tintColors={{ true: theme.highlight_pressable.background }}
          />
          <Text>전체 선택(1/1)</Text>
        </View>
        <TouchableNativeFeedback>
          <View style={styles.checkRemove}>
            <Text>선택삭제</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} horizontal={false}>
        {arr.map((item, index) => (
          <CartItem item={item} key={index} />
        ))}
        <View style={styles.endOrder}>
          <View>
            <View style={styles.endInfo}>
              <Text style={styles.endInfoLeftText}>총 상품금액</Text>
              <Text style={styles.endInfoRightText}>45000원</Text>
            </View>
            <View style={styles.endInfo}>
              <Text style={styles.endInfoLeftText}>상품할인</Text>
              <Text style={styles.endInfoRightText}>-7380원</Text>
            </View>
            <View style={styles.endInfo}>
              <Text style={styles.endInfoLeftText}>배송비</Text>
              <Text style={styles.endInfoRightText}>무료배송</Text>
            </View>
          </View>
          <View style={styles.endInfoContainer}>
            <View style={styles.endInfo}>
              <Text style={styles.endInfoLeftText}>총 1개 주문금액</Text>
              <Text style={[styles.endInfoRightText, { color: `#fa5252` }]}>
                37620원
              </Text>
            </View>
            <View style={styles.endInfo}>
              <Text style={styles.endInfoLeftText}>예상 적립포인트</Text>
              <Text style={styles.endInfoRightText}>370원</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.payment}>
        <TouchableNativeFeedback onPress={() => navigation.navigate('BuyForm')}>
          <View style={styles.paymentBtn}>
            <Text style={styles.paymentText}>37620원 주문하기</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  checkBox: {
    backgroundColor: theme.container.background,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  checkRemove: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: theme.pressable.border,
  },
  product: {
    marginVertical: 10,
    backgroundColor: theme.container.background,
    paddingHorizontal: 10,
  },
  productImageContainer: {
    flexDirection: 'row',
  },
  productContentContainer: {
    flexDirection: 'row',
  },
  productInfo: {
    flex: 1,
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
  endOrder: {
    paddingHorizontal: 10,
    backgroundColor: theme.container.background,
  },
  endInfoContainer: {
    borderTopWidth: 1,
    borderTopColor: theme.faint.border,
  },
  endInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  endInfoLeftText: {
    fontSize: 16,
    color: theme.faint.text,
  },
  endInfoRightText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  payment: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    height: 70,
  },
  paymentBtn: {
    width: '100%',
    flex: 1,
    backgroundColor: theme.highlight_pressable.background,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  paymentText: {
    color: theme.highlight_pressable.text,
    fontSize: 20,
  },
});

export default Cart;
