import React, { memo } from 'react';
import { View, Text, TouchableNativeFeedback } from 'react-native';
import { RadioButton } from 'react-native-paper';
import IconIo from 'react-native-vector-icons/Ionicons';
import { theme } from '../../config/config';
import { formStyles } from './buyFormStyles';

export default memo(function BuyPayway({
  paynameLabel,
  setPaynameLabel,
  orderPayname,
  setOrderPayname,
  setEnd,
}) {
  const payToWay = [
    {
      name: '간편결제',
      payname: ['네이버페이', '페이코', '카카오페이', '토스'],
    },
    { name: '카드결제', payname: [] },
    {
      name: '현금결제',
      payname: ['무통장입금', '편의점결제'],
    },
    { name: '휴대폰결제', payname: [] },
  ];
  return (
    <View style={[formStyles.payway]}>
      <Text style={[formStyles.repeatTitle, { marginVertical: 10 }]}>
        결제방법
      </Text>
      <View style={formStyles.payAdditionalInfo}>
        <IconIo name='information-circle-outline' size={16} color={`#888`} />
        <Text style={{ color: `#888` }}>
          {' '}
          무통장 입금 결제시 적립금 1%를 추가로 드려요
        </Text>
      </View>
      <View style={formStyles.paywayContainer}>
        {payToWay.map((element, index, arr) => {
          if (index === arr.length - 1) {
            return (
              <TouchableNativeFeedback
                key={index}
                onPress={() => {
                  setOrderPayname(element.name);
                  setEnd(true);
                }}
              >
                <View
                  style={
                    orderPayname === element.name
                      ? [
                          formStyles.paywayBtn,
                          {
                            backgroundColor:
                              theme.highlight_pressable.background,
                          },
                        ]
                      : [formStyles.paywayBtn]
                  }
                >
                  <Text
                    style={
                      orderPayname === element.name
                        ? [{ color: theme.highlight_pressable.text }]
                        : [{ color: theme.container.text }]
                    }
                  >
                    {element.name}
                  </Text>
                </View>
              </TouchableNativeFeedback>
            );
          }
          return (
            <>
              <TouchableNativeFeedback
                key={index}
                onPress={() => {
                  setOrderPayname(element.name);
                  setEnd(true);
                }}
              >
                <View
                  style={
                    orderPayname === element.name
                      ? [
                          formStyles.paywayBtn,
                          {
                            backgroundColor:
                              theme.highlight_pressable.background,
                          },
                        ]
                      : [formStyles.paywayBtn]
                  }
                >
                  <Text
                    style={
                      orderPayname === element.name
                        ? [{ color: theme.highlight_pressable.text }]
                        : [{ color: theme.container.text }]
                    }
                  >
                    {element.name}
                  </Text>
                </View>
              </TouchableNativeFeedback>
              <View style={{ marginRight: 5 }} />
            </>
          );
        })}
      </View>
      <View style={formStyles.payPlatform}>
        <RadioButton.Group onValueChange={(named) => setPaynameLabel(named)}>
          {payToWay.map(
            (value, index) =>
              orderPayname === value.name &&
              value?.payname.map((element, idx) => (
                <RadioButton.Item
                  label={element}
                  mode='android'
                  value={element}
                  key={idx}
                  status={paynameLabel === element ? 'checked' : 'unchecked'}
                  color={theme.highlight_pressable.background}
                />
              )),
          )}
        </RadioButton.Group>
      </View>
    </View>
  );
});
