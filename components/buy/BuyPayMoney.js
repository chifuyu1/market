import React, { memo } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import IconIo from 'react-native-vector-icons/Ionicons';
import { theme } from '../../config/config';
import { priceComma } from '../../util/price';
import { formStyles } from './buyFormStyles';

export default memo(function BuyPayMoney({ onViewPay, orderPay, payMoney }) {
  return (
    <View style={formStyles.repeatContainer}>
      <TouchableWithoutFeedback onPress={onViewPay}>
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
      </TouchableWithoutFeedback>
    </View>
  );
});
