import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { formStyles } from './buyFormStyles';

export default React.memo(function BuyAddress({
  name,
  phoneNumber,
  address,
  detailAddress,
  action,
}) {
  return (
    <TouchableWithoutFeedback onPress={action}>
      <View style={formStyles.repeatContainer}>
        <View style={formStyles.repeatLeft}>
          <Text style={formStyles.repeatTitle}>배송지 정보</Text>
          {name.length > 0 &&
          phoneNumber.length > 0 &&
          address.length > 0 &&
          detailAddress.length > 0 ? (
            <>
              <Text
                style={formStyles.variableText}
              >{`${name} ${phoneNumber}`}</Text>
              <Text style={formStyles.variableText}>{address}</Text>
              <Text style={formStyles.variableText}>{detailAddress}</Text>
            </>
          ) : (
            <Text style={formStyles.repeatInput}>배송지를 입력해주세요.</Text>
          )}
        </View>
        <View>
          <Text style={formStyles.inputTag}>입력하기</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
});
