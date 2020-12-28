import React, { memo } from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  TouchableNativeFeedback,
} from 'react-native';
import IconIo from 'react-native-vector-icons/Ionicons';
import { theme } from '../../config/config';
import { priceComma } from '../../util/price';
import { formStyles } from './buyFormStyles';

export default memo(function BuyPayMoney({ onViewPay, orderPay, payMoney }) {
  return (
    <View style={formStyles.repeatContainer}>
      <TouchableWithoutFeedback onPress={onViewPay}>
        <View style={{ flex: 1 }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              flex: 1,
            }}
          >
            <View style={formStyles.repeatLeft}>
              <Text style={formStyles.repeatTitle}>
                결제금액{' '}
                {orderPay ? (
                  <></>
                ) : (
                  <Text
                    style={{ color: theme.highlight_pressable.background }}
                  >{`${priceComma(payMoney)}원`}</Text>
                )}
              </Text>
            </View>
            <View>
              {orderPay ? (
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
          {orderPay ? (
            <View style={{ marginTop: 10 }}>
              <View style={{ flexDirection: `row`, marginVertical: 10 }}>
                <View
                  style={{
                    paddingVertical: 10,
                    borderBottomWidth: 1,
                    borderColor: theme.faint.text,
                    flex: 1,
                    marginRight: 10,
                  }}
                >
                  <Text style={{ color: theme.faint.text }}>쿠폰</Text>
                </View>
                <TouchableNativeFeedback onPress={() => {}}>
                  <View
                    style={{
                      borderStyle: `solid`,
                      borderRadius: 5,
                      borderColor: theme.pressable.border,
                      borderWidth: 1,
                      paddingVertical: 10,
                      alignItems: `center`,
                      justifyContent: `center`,
                      paddingHorizontal: 10,
                    }}
                  >
                    <Text
                      style={{
                        fontWeight: 'bold',
                        color: theme.pressable.text,
                      }}
                    >
                      쿠폰 선택
                    </Text>
                  </View>
                </TouchableNativeFeedback>
              </View>
            </View>
          ) : (
            <></>
          )}
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
});
