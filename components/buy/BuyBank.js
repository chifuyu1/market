import React, { memo, useCallback, useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { HelperText } from 'react-native-paper';
import useTextInput from '../../hooks/useTextInput';
import { theme } from '../../config/config';

export default memo(function BuyBank() {
  const navigation = useNavigation();
  const [refundName, onChangeName] = useTextInput('');
  const [bankKind, setBankKind] = useState('');
  const [refundBankNumber, setRefundBankNumber] = useState('');

  // const onChangeName = useCallback((text) => {
  //   setRefundName(text);
  // }, []);

  const onChangeBankNumber = useCallback((text) => {
    setRefundBankNumber(text);
  }, []);

  const korean = new RegExp(/[가-힣]/g);
  let nameHelper = !(
    refundName.length > 0 && refundName.split('').every((e) => e.match(korean))
  );
  let bankNumberHelper = !(
    refundBankNumber.length >= 13 &&
    refundBankNumber.split('').every((str) => str.match(/\d/g))
  );
  let isDisable = nameHelper === false && bankNumberHelper === false;

  return (
    <>
      <View style={styles.container}>
        <TextInput
          placeholder='이름'
          value={refundName}
          onChangeText={onChangeName}
          style={{ borderBottomWidth: 1 }}
        />
        <HelperText
          visible={nameHelper}
          style={{ color: theme.container.error }}
        >
          한글로 작성해주세요!
        </HelperText>
        <TextInput
          placeholder='계좌번호'
          keyboardType='number-pad'
          value={refundBankNumber}
          onChangeText={onChangeBankNumber}
          style={{ borderBottomWidth: 1 }}
        />
        <HelperText
          visible={bankNumberHelper}
          style={{ color: theme.container.error }}
        >
          번호 형식이 올바르지 않습니다!
        </HelperText>
      </View>
      <View style={styles.paymentBar}>
        <TouchableNativeFeedback
          onPress={() => {
            navigation.navigate('BuyForm', {
              refundBankNumber,
              refundName,
              bankKind,
            });
          }}
          disabled={!isDisable}
        >
          <View
            style={[
              !isDisable
                ? [styles.payment, { backgroundColor: theme.faint.border }]
                : [styles.payment],
            ]}
          >
            <Text style={styles.paymentText}>입력하기</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    </>
  );
});

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  paymentBar: {
    height: 80,
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: theme.container.darken,
    elevation: 2,
  },
  payment: {
    backgroundColor: theme.highlight_pressable.background,
    flex: 1,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  paymentText: {
    color: theme.highlight_pressable.text,
    fontSize: 20,
  },
});
