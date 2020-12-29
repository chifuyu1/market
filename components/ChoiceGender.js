import React from 'react';
import { View, Text, TouchableNativeFeedback } from 'react-native';
import { theme } from '../config/config';
import { formStyles } from './buy/buyFormStyles';

export default function ChoiceGender({ male, onChangeMale, onChangeFemale }) {
  return (
    <View
      style={[
        formStyles.paymentBar,
        { flexDirection: 'row', elevation: 0, backgroundColor: `#fff` },
      ]}
    >
      <TouchableNativeFeedback onPress={onChangeMale}>
        <View
          style={
            male
              ? [
                  formStyles.payment,
                  {
                    marginRight: 5,
                    backgroundColor: theme.male.active,
                    borderColor: theme.container.highlight_border,
                    borderWidth: 1,
                    borderStyle: `solid`,
                  },
                ]
              : [
                  formStyles.payment,
                  {
                    marginRight: 5,
                    backgroundColor: theme.male.non_active,
                    borderColor: theme.pressable.border,
                    borderWidth: 1,
                    borderStyle: `solid`,
                  },
                ]
          }
        >
          <Text style={{ color: theme.container.text }}>남자</Text>
        </View>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback onPress={onChangeFemale}>
        <View
          style={
            !male
              ? [
                  formStyles.payment,
                  {
                    marginRight: 5,
                    backgroundColor: theme.female.active,
                    borderColor: theme.pressable.border,
                    borderWidth: 1,
                    borderStyle: `solid`,
                  },
                ]
              : [
                  formStyles.payment,
                  {
                    marginRight: 5,
                    backgroundColor: theme.female.non_active,
                    borderColor: theme.pressable.border,
                    borderWidth: 1,
                    borderStyle: `solid`,
                  },
                ]
          }
        >
          <Text style={{ color: theme.container.text }}>여자</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}
