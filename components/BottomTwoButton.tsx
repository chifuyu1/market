import React from 'react';
import { View, Text, TouchableNativeFeedback } from 'react-native';
import { theme } from '../config/config';
import { formStyles } from './buy/buyFormStyles';

type BottomTwoButtonProps = {
  actionLeft: () => void;
  contentLeft: string;
  actionRight: () => void;
  contentRight: string;
};

export default React.memo(function BottomTwoButton({
  actionLeft,
  contentLeft,
  actionRight,
  contentRight,
}: BottomTwoButtonProps) {
  return (
    <View style={[formStyles.paymentBar, { flexDirection: 'row' }]}>
      <TouchableNativeFeedback onPress={actionLeft}>
        <View
          style={[
            formStyles.payment,
            {
              marginRight: 5,
              backgroundColor: theme.pressable.background,
              borderColor: theme.pressable.border,
              borderWidth: 1,
              borderStyle: `solid`,
            },
          ]}
        >
          <Text style={{ color: theme.pressable.text }}>{contentLeft}</Text>
        </View>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback onPress={actionRight}>
        <View style={[formStyles.payment, { marginLeft: 5 }]}>
          <Text style={formStyles.paymentText}>{contentRight}</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
});
