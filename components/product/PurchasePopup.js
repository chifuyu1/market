import React, { useState, memo } from 'react';
import { StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { theme } from '../../config/config';
import BottomTwoButton from '../BottomTwoButton';
import Popup from '../Popup';
import PurchaseOptions from './PurchaseOptions';
import Quantity from './Quantity';

export default memo(function PurchasePopup({ setVisible, options }) {
  const [quantityOpen, setQuantityOpen] = useState(false);
  const [choiceQuantity, setChoiceQuantity] = useState('수량 선택');
  const [ready, setReady] = useState(false);
  const [Options, setOptions] = useState({ size: '', color: '', quantity: '' });
  const navigation = useNavigation();
  const option = useSelector((state) => state.product.options);

  let completed = Object.values(option).every(
    (element) => element.length !== 0,
  );
  console.log(Options);

  const options1 = [
    ['아이보리', '노랑색'],
    ['FREE', 'S', 'M', 'L'],
  ];

  const purcharseStyle = StyleSheet.create({
    container: {
      flex: 1,
      paddingVertical: 20,
      justifyContent: 'space-between',
    },
    pressContainer: {
      flex: 1,
      paddingHorizontal: 10,
      justifyContent: 'center',
      alignItems: 'center',
      height: 50,
      borderRadius: 5,
      borderWidth: 2,
      borderStyle: `solid`,
    },
    buy: {
      backgroundColor: theme.highlight_pressable.background,
      borderWidth: 0,
    },
    buyText: {
      color: theme.highlight_pressable.text,
    },
    cart: {
      backgroundColor: theme.pressable.background,
      borderColor: theme.pressable.border,
    },
    cartText: {
      color: theme.pressable.text,
    },
    quantityItem: {
      marginTop: 10,
      padding: 10,
      borderRadius: 10,
      borderWidth: 2,
      borderStyle: `solid`,
      borderColor: `rgba(0, 0, 0, 0.5)`,
    },
    topBtn: {
      paddingHorizontal: 10,
    },
    bottomBtn: {
      paddingHorizontal: 10,
      paddingTop: 20,
      flexDirection: `row`,
      justifyContent: `space-between`,
    },
    amount: {
      paddingVertical: 20,
      paddingHorizontal: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderTopWidth: 1,
      borderBottomWidth: 1,
      borderTopColor: theme.pressable.border,
      borderBottomColor: theme.pressable.border,
    },
    amountNumber: {
      fontWeight: 'bold',
    },
    amountPrice: {
      color: theme.highlight_pressable.background,
      fontWeight: 'bold',
      fontSize: 16,
    },
  });

  return (
    <View style={purcharseStyle.container}>
      {!ready ? (
        <>
          <View style={purcharseStyle.topBtn}>
            {options1.map((itemData, index) => {
              return (
                <PurchaseOptions
                  name={index + 1}
                  options={itemData}
                  setOptions={setOptions}
                  Options={Options}
                  key={index.toString()}
                />
              );
            })}
            <Popup
              visible={quantityOpen}
              setVisible={setQuantityOpen}
              Component={() => (
                <Quantity
                  setQuantityOpen={setQuantityOpen}
                  setChoiceQuantity={setChoiceQuantity}
                  setOptions={setOptions}
                  Options={Options}
                />
              )}
            />
            <TouchableNativeFeedback onPress={() => setQuantityOpen(true)}>
              <View style={purcharseStyle.quantityItem}>
                <Text>{choiceQuantity}</Text>
              </View>
            </TouchableNativeFeedback>
          </View>
          <View>
            <View style={purcharseStyle.amount}>
              <View style={{ flexDirection: 'row' }}>
                <Text style={purcharseStyle.amountNumber}>1</Text>
                <Text>개 선택</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text>총</Text>
                <Text style={purcharseStyle.amountPrice}>15,800원</Text>
              </View>
            </View>
            <BottomTwoButton
              actionLeft={() => {
                setVisible(false);
                navigation.navigate('마이페이지', {
                  screen: 'OrderList',
                  options: { headerHideBackButton: true },
                });
              }}
              contentLeft={`장바구니`}
              actionRight={() => {
                setVisible(false);
                navigation.navigate('BuyForm');
              }}
              contentRight={`구매하기`}
            />
          </View>
        </>
      ) : (
        <></>
      )}
    </View>
  );
});
