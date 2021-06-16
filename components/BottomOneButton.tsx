import React from 'react';
import { View, Text, TouchableNativeFeedback } from 'react-native';
import { formStyles } from './buy/buyFormStyles';

type BottomOneButtonProps = {
  action: () => void;
  content: string;
  background?: boolean;
};

function BottomOneButton({
  content,
  action,
  background,
}: BottomOneButtonProps) {
  return (
    <View
      style={
        background
          ? [
              formStyles.paymentBar,
              { backgroundColor: 'transparent', elevation: 0 },
            ]
          : [formStyles.paymentBar]
      }
    >
      <TouchableNativeFeedback onPress={action}>
        <View style={formStyles.payment}>
          <Text style={formStyles.paymentText}>{content}</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}

export default React.memo(BottomOneButton);
