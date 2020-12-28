import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableNativeFeedback,
  BackHandler,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CheckBox from '@react-native-community/checkbox';
import { theme } from '../../config/config';
import BottomOneButton from '../BottomOneButton';
import CartItem from './CartItem';
import CartResult from './CartResult';

export default function Cart() {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      navigation.goBack();
      return true;
    });
    return () => BackHandler.removeEventListener('hardwareBackPress');
  }, [navigation]);

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
        <CartResult />
      </ScrollView>
      <BottomOneButton
        action={() => navigation.navigate('BuyForm')}
        content={`37620원 주문하기`}
      />
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
});
