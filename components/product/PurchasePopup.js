import React, { useState, memo } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import Popup from '../Popup';
import PurchaseOptions from './PurchaseOptions';
import Quantity from './Quantity';

export default memo(function PurchasePopup({ setVisible, options }) {
  const [quantityOpen, setQuantityOpen] = useState(false);
  const [choiceQuantity, setChoiceQuantity] = useState('수량 선택');

  const purcharseStyle = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 10,
      paddingVertical: 20,
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    closeContainer: {
      paddingHorizontal: 10,
      justifyContent: 'center',
      alignItems: 'center',
      height: 60,
      borderRadius: 5,
      borderWidth: 2,
      borderStyle: `solid`,
      borderColor: `rgba(0, 0, 0, 0.5)`,
    },
    quantityItem: {
      marginTop: 10,
      padding: 10,
      borderRadius: 5,
      borderWidth: 2,
      borderStyle: `solid`,
      borderColor: `rgba(0, 0, 0, 0.5)`,
    },
  });
  const option = [
    ['아이보리', '노랑색'],
    ['FREE', 'S', 'M', 'L'],
  ];

  return (
    <>
      <View style={purcharseStyle.container}>
        <View>
          <FlatList
            data={option}
            keyExtractor={(item, index) => index.toString()}
            renderItem={(itemData) => {
              return (
                <PurchaseOptions
                  name={itemData.index + 1}
                  options={itemData.item}
                  key={itemData.index.toString()}
                />
              );
            }}
            showsVerticalScrollIndicator={false}
          />
          <Popup
            visible={quantityOpen}
            Component={() => (
              <Quantity
                setQuantityOpen={setQuantityOpen}
                setChoiceQuantity={setChoiceQuantity}
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
          <TouchableNativeFeedback onPress={() => setVisible(false)}>
            <View style={purcharseStyle.closeContainer}>
              <Text style={purcharseStyle.closeText}>구매하기</Text>
              {/* <Text style={purcharseStyle.closeText}>옵션 선택 닫기</Text> */}
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
    </>
  );
});
