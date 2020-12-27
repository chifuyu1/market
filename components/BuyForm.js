import React, { useCallback, useRef, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
} from 'react-native';
import { theme } from '../config/config';
import IconIo from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { priceComma } from '../util/price';
import { RadioButton } from 'react-native-paper';

function BuyForm() {
  const [orderProduct, setOrderProduct] = useState(false);
  const [orderPay, setOrderPay] = useState(false);
  const [paynameLabel, setPaynameLabel] = useState('');
  const [orderPayname, setOrderPayname] = useState('');
  const [end, setEnd] = useState(false);
  const ref = useRef(null);
  const navigation = useNavigation();
  const [destination, setDestination] = useState({
    name: '',
    phoneNumber: '',
    address: '',
    detailAddress: '',
  });

  const onViewPruduct = useCallback(() => setOrderProduct((prev) => !prev), []);
  const onViewPay = useCallback(() => setOrderPay((prev) => !prev), []);

  const info = {
    name: '김배송',
    phoneNumber: '010-0000-0000',
    address: '서울 강남구 역삼동 231-141',
    detailAddress: '빌딩3층',
  };
  const refund = {
    refundName: '김환불',
    bankKind: '농협',
    bankNumber: '12312312412312',
  };
  const { name, phoneNumber, address, detailAddress } = info;
  const { refundName, bankNumber, bankKind } = refund;
  const amount = 3;
  const payMoney = 29800;
  const payToWay = [
    {
      name: '간편결제',
      payname: ['네이버페이', '페이코', '카카오페이', '토스'],
    },
    { name: '카드결제', payname: [] },
    {
      name: '현금결제',
      payname: ['무통장입금', '편의점결제'],
    },
    { name: '휴대폰결제', payname: [] },
  ];

  return (
    <>
      <ScrollView
        ref={ref}
        onContentSizeChange={() => {
          if (ref.current && end) {
            setEnd(false);
            ref.current.scrollToEnd({ animated: true });
          }
        }}
      >
        <TouchableWithoutFeedback onPress={onViewPruduct}>
          <View style={styles.repeatContainer}>
            <View style={styles.repeatLeft}>
              <Text style={styles.repeatTitle}>주문상품 총 {amount}개</Text>
              <Text style={styles.inputTag}>전체 무료배송</Text>
            </View>
            <View>
              {orderProduct ? (
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
        <TouchableWithoutFeedback onPress={() => console.log(`press in!`)}>
          <View style={styles.repeatContainer}>
            <View style={styles.repeatLeft}>
              <Text style={styles.repeatTitle}>배송지 정보</Text>
              {name.length > 0 &&
              phoneNumber.length > 0 &&
              address.length > 0 &&
              detailAddress.length > 0 ? (
                <>
                  <Text
                    style={styles.variableText}
                  >{`${name} ${phoneNumber}`}</Text>
                  <Text style={styles.variableText}>{address}</Text>
                  <Text style={styles.variableText}>{detailAddress}</Text>
                </>
              ) : (
                <Text style={styles.repeatInput}>배송지를 입력해주세요.</Text>
              )}
            </View>
            <View>
              <Text style={styles.inputTag}>입력하기</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => console.log(`press in!`)}>
          <View style={styles.repeatContainer}>
            <View style={styles.repeatLeft}>
              <Text style={styles.repeatTitle}>환불 계좌</Text>
              {refundName && bankNumber && bankKind ? (
                <>
                  <Text
                    style={styles.variableText}
                  >{`${refundName} | ${bankKind}`}</Text>
                  <Text style={styles.variableText}>{bankNumber}</Text>
                </>
              ) : (
                <Text style={styles.repeatInput}>
                  환불받을 계좌를 입력해주세요.
                </Text>
              )}
            </View>
            <View>
              <Text style={styles.inputTag}>입력하기</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.repeatContainer}>
          <TouchableWithoutFeedback onPress={onViewPay}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                flex: 1,
              }}
            >
              <View style={styles.repeatLeft}>
                <Text style={styles.repeatTitle}>
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
        <View style={[styles.payway]}>
          <Text style={[styles.repeatTitle, { marginVertical: 10 }]}>
            결제방법
          </Text>
          <View style={styles.payAdditionalInfo}>
            <IconIo
              name='information-circle-outline'
              size={16}
              color={`#888`}
            />
            <Text style={{ color: `#888` }}>
              {' '}
              무통장 입금 결제시 적립금 1%를 추가로 드려요
            </Text>
          </View>
          <View style={styles.paywayContainer}>
            {payToWay.map((element, index, arr) => {
              if (index === arr.length - 1) {
                return (
                  <TouchableNativeFeedback
                    key={index}
                    onPress={() => {
                      setOrderPayname(element.name);
                      setEnd(true);
                    }}
                  >
                    <View
                      style={
                        orderPayname === element.name
                          ? [
                              styles.paywayBtn,
                              {
                                backgroundColor:
                                  theme.highlight_pressable.background,
                              },
                            ]
                          : [styles.paywayBtn]
                      }
                    >
                      <Text>{element.name}</Text>
                    </View>
                  </TouchableNativeFeedback>
                );
              }
              return (
                <>
                  <TouchableNativeFeedback
                    key={index}
                    onPress={() => {
                      setOrderPayname(element.name);
                      setEnd(true);
                    }}
                  >
                    <View
                      style={
                        orderPayname === element.name
                          ? [
                              styles.paywayBtn,
                              {
                                backgroundColor:
                                  theme.highlight_pressable.background,
                              },
                            ]
                          : [styles.paywayBtn]
                      }
                    >
                      <Text>{element.name}</Text>
                    </View>
                  </TouchableNativeFeedback>
                  <View style={{ marginRight: 5 }} />
                </>
              );
            })}
          </View>
          <View style={styles.payPlatform}>
            <RadioButton.Group
              onValueChange={(named) => setPaynameLabel(named)}
            >
              {payToWay.map(
                (value, index) =>
                  orderPayname === value.name &&
                  value?.payname.map((element, idx) => (
                    <RadioButton.Item
                      label={element}
                      mode='android'
                      value={element}
                      key={idx}
                      status={
                        paynameLabel === element ? 'checked' : 'unchecked'
                      }
                      color={theme.highlight_pressable.background}
                    />
                  )),
              )}
            </RadioButton.Group>
          </View>
        </View>
      </ScrollView>
      <View style={styles.paymentBar}>
        <TouchableNativeFeedback onPress={() => {}}>
          <View style={styles.payment}>
            <Text style={styles.paymentText}>29,800원 결제하기</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  repeatContainer: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    flexDirection: `row`,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: theme.faint.border,
    borderBottomWidth: 1,
  },
  repeatLeft: {
    justifyContent: 'center',
  },
  repeatTitle: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  repeatInput: {
    color: theme.container.error,
  },
  variableText: {
    color: theme.container.text,
    lineHeight: 21,
  },
  inputTag: {
    color: theme.container.highlight_text,
  },
  payway: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  payAdditionalInfo: {
    flexDirection: `row`,
    alignItems: `center`,
    marginVertical: 10,
  },
  paywayContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paywayBtn: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: theme.pressable.background,
    borderColor: theme.pressable.border,
    borderWidth: 1,
  },
  payPlatform: {
    paddingVertical: 20,
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

export default BuyForm;
