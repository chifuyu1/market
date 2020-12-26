import React, { useCallback } from 'react';
import {
  View,
  Text,
  TouchableNativeFeedback,
  ScrollView,
  Button,
  StyleSheet,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { SET_OPTION_QUANTITY } from '../../reducer/product';

export default function Quantity({ setQuantityOpen, setChoiceQuantity }) {
  const dispatch = useDispatch();
  const onSet = useCallback(
    (item) => {
      dispatch({ type: SET_OPTION_QUANTITY, data: item });

      setChoiceQuantity(item);
      setQuantityOpen(false);
    },
    [dispatch],
  );

  let quantityList = [];
  for (let i = 1; i < 100; i++) quantityList.push(i);
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
                    width: '100%',
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
      <Button title='닫기' onPress={() => setQuantityOpen(false)} />
    </>
  );
}

const quantityStyle = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
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
  closeText: {},
});
