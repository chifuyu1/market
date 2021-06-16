import React, { useCallback } from 'react';
import {
  View,
  Text,
  TouchableNativeFeedback,
  ScrollView,
  StyleSheet,
} from 'react-native';
// import { useDispatch } from 'react-redux';
// import { SET_OPTION_QUANTITY } from '../../reducer/product';
import BottomOneButton from '../BottomOneButton';

type QuantityProps = {
  setQuantityOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setChoiceQuantity: React.Dispatch<React.SetStateAction<string>>;
};

export default function Quantity({
  setQuantityOpen,
  setChoiceQuantity,
}: QuantityProps) {
  // const dispatch = useDispatch();
  const onSet = useCallback(
    (item) => {
      // dispatch({ type: SET_OPTION_QUANTITY, data: item });
      setChoiceQuantity(item);
      setQuantityOpen(false);
    },
    [setChoiceQuantity, setQuantityOpen],
  );

  let quantityList = [];
  for (let i = 1; i < 100; i++) {
    quantityList.push(i);
  }
  return (
    <>
      <View style={quantityStyle.container}>
        <ScrollView>
          {quantityList.map((item, index) => (
            <TouchableNativeFeedback
              onPress={() => onSet(item)}
              key={index.toString()}
            >
              <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Text
                  style={{
                    fontSize: 30,
                    lineHeight: 60,
                    textAlign: 'center',
                  }}
                >
                  {item}
                </Text>
              </View>
            </TouchableNativeFeedback>
          ))}
        </ScrollView>
      </View>
      <BottomOneButton action={() => setQuantityOpen(false)} content={'닫기'} />
    </>
  );
}

const quantityStyle = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 20,
    justifyContent: 'space-around',
  },
  closeContainer: {
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    borderRadius: 5,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'rgba(0, 0, 0, 0.5)',
  },
  closeText: {},
});
