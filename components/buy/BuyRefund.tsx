import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { formStyles } from './buyFormStyles';

export default React.memo(function BuyRefund({
  refundName,
  bankKind,
  refundBankNumber,
  action,
}) {
  return (
    <TouchableWithoutFeedback onPress={action}>
      <View style={formStyles.repeatContainer}>
        <View style={formStyles.repeatLeft}>
          <Text style={formStyles.repeatTitle}>환불 계좌</Text>
          {refundName.length > 0 ? (
            <>
              <Text
                style={formStyles.variableText}
              >{`${refundName} | ${bankKind}`}</Text>
              <Text style={formStyles.variableText}>{refundBankNumber}</Text>
            </>
          ) : (
            <Text style={formStyles.repeatInput}>
              환불받을 계좌를 입력해주세요.
            </Text>
          )}
        </View>
        <Text style={formStyles.inputTag}>입력하기</Text>
      </View>
    </TouchableWithoutFeedback>
  );
});
