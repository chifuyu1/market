import React from 'react';
import { View, Text, TouchableNativeFeedback } from 'react-native';
import { formStyles } from './buy/buyFormStyles';

function BottomOneButton({ content, action }) {
  return (
    <View style={formStyles.paymentBar}>
      <TouchableNativeFeedback onPress={action}>
        <View style={formStyles.payment}>
          <Text style={formStyles.paymentText}>{content}</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}

export default React.memo(BottomOneButton);
