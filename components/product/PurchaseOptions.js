import React, { memo, useCallback, useState } from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native';
import IconIo from 'react-native-vector-icons/Ionicons';
import { useDispatch } from 'react-redux';
import { SET_OPTION_COLOR, SET_OPTION_SIZE } from '../../reducer/product';

export default memo(function PurchaseOptions({
  options,
  name,
  setOptions,
  Options,
}) {
  const [choice, setChoice] = useState(() => {
    const named = {
      1: '색상 선택하기',
      2: '사이즈 선택하기',
    };
    return named[name];
  });
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const onChoice = useCallback(
    (text) => {
      if (name === 1) {
        dispatch({ type: SET_OPTION_COLOR, data: text });
        setOptions({ ...Options, color: text });
      } else {
        dispatch({ type: SET_OPTION_SIZE, data: text });
        setOptions({ ...Options, size: text });
      }
      console.log(Options, text);
      setChoice(text);
      setOpen(false);
    },
    [dispatch, Options, name, setOptions],
  );

  const optionStyle = StyleSheet.create({
    optionContainer: {
      marginVertical: 10,
      borderRadius: 5,
      borderWidth: 2,
      borderStyle: 'solid',
      borderColor: 'rgba(0, 0, 0, 0.5)',
    },
    optionBox: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 10,
    },
    optionItem: {
      justifyContent: 'center',
      padding: 10,
      borderTopWidth: 2,
      borderStyle: 'solid',
      borderColor: 'rgba(0, 0, 0, 0.5)',
    },
  });

  return (
    <View style={optionStyle.optionContainer}>
      <TouchableNativeFeedback onPress={() => setOpen((prev) => !prev)}>
        <View>
          <View style={optionStyle.optionBox}>
            <Text>{choice}</Text>
            <IconIo
              name={!open ? 'caret-down-outline' : 'caret-up-outline'}
              size={14}
              color='black'
            />
          </View>
        </View>
      </TouchableNativeFeedback>
      {open ? (
        options.map((element, index) => (
          <TouchableNativeFeedback
            onPress={() => onChoice(element)}
            key={index}
          >
            <View style={optionStyle.optionItem}>
              <Text>{element}</Text>
            </View>
          </TouchableNativeFeedback>
        ))
      ) : (
        <></>
      )}
    </View>
  );
});
