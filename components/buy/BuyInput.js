import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableNativeFeedback,
} from 'react-native';
import { HelperText } from 'react-native-paper';
import { theme } from '../../config/config';

export function BuyInput() {
  const [name, setName] = useState('');
  const [postNumber, setPostNumber] = useState('');
  const [address, setAddress] = useState('');
  const [detailAddress, setDetailAddress] = useState('');
  const [phone, setPhone] = useState('');
  const navigation = useNavigation();

  const onChangeName = useCallback((text) => {
    setName(text);
  }, []);
  const onPostNumber = useCallback((text) => {
    setPostNumber(text);
  }, []);
  const onAddress = useCallback((text) => {
    setAddress(text);
  }, []);
  const onDetailAddress = useCallback((text) => {
    setDetailAddress(text);
  }, []);
  const onPhone = useCallback((text) => {
    setPhone(text);
  }, []);

  const korean = new RegExp(/[가-힣]/g);
  let nameHelper = !(
    name.length > 0 && name.split('').every((e) => e.match(korean))
  );
  let postNumberHelper = !(
    postNumber.length > 0 &&
    postNumber.split('').every((str) => str.match(/\d/g))
  );
  let phoneHelper = !(
    phone.length === 11 && phone.split('').every((str) => str.match(/\d/g))
  );
  let isDisable =
    nameHelper === false && postNumberHelper === false && phoneHelper === false;

  return (
    <>
      <View style={styles.container}>
        <TextInput
          placeholder='이름'
          value={name}
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
          placeholder='우편번호 '
          keyboardType='number-pad'
          value={postNumber}
          onChangeText={onPostNumber}
          style={{ borderBottomWidth: 1 }}
        />
        <HelperText
          visible={postNumberHelper}
          textBreakStrategy='balanced'
          style={{ color: theme.container.error }}
        >
          숫자만 입력해주세요!
        </HelperText>
        <TextInput
          placeholder='배송지'
          style={{ borderBottomWidth: 1 }}
          value={address}
          onChangeText={onAddress}
        />
        <TextInput
          placeholder='상세주소'
          value={detailAddress}
          onChangeText={onDetailAddress}
          style={{ borderBottomWidth: 1 }}
        />
        <TextInput
          placeholder='연락처'
          keyboardType='number-pad'
          value={phone}
          onChangeText={onPhone}
          style={{ borderBottomWidth: 1 }}
        />
        <HelperText
          visible={phoneHelper}
          style={{ color: theme.container.error }}
        >
          번호 형식이 올바르지 않습니다!
        </HelperText>
      </View>
      <View style={styles.paymentBar}>
        <TouchableNativeFeedback
          onPress={() => {
            navigation.navigate('BuyForm', {
              name,
              postNumber,
              address,
              detailAddress,
              phone,
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
}

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

export default BuyInput;
