import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import { theme } from '../../config/config';
import IconIo from 'react-native-vector-icons/Ionicons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { priceComma } from '../../util/price';
import { RadioButton } from 'react-native-paper';
import { formStyles } from './buyFormStyles';

function BuyForm() {
  const [orderProduct, setOrderProduct] = useState(false);
  const [orderPay, setOrderPay] = useState(false);
  const [paynameLabel, setPaynameLabel] = useState('');
  const [orderPayname, setOrderPayname] = useState('');
  const [end, setEnd] = useState(false);
  const ref = useRef(null);
  const navigation = useNavigation();
  const route = useRoute();
  const [destination, setDestination] = useState({
    name: '',
    phoneNumber: '',
    address: '',
    detailAddress: '',
  });
  const [refund, setRefund] = useState({
    refundBankNumber: '',
    refundName: '',
    bankKind: '',
  });

  const onViewPruduct = useCallback(() => setOrderProduct((prev) => !prev), []);
  const onViewPay = useCallback(() => setOrderPay((prev) => !prev), []);

  useEffect(() => {
    if (route.params?.name) {
      setDestination({
        name: route.params.name,
        phoneNumber: route.params.phone,
        address: `${route.params.postNumber} ${route.params.address}`,
        detailAddress: route.params.detailAddress,
      });
    }
    if (route.params?.refundName) {
      setRefund({
        refundBankNumber: route.params.refundBankNumber,
        refundName: route.params.refundName,
        bankKind: route.params.bankKind,
      });
    }
  }, [route]);

  const { name, phoneNumber, address, detailAddress } = destination;
  const { refundName, refundBankNumber, bankKind } = refund;
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
  // temp variable
  const amount = 3;
  const payMoney = 29800;
  const uri = `https://image.chosun.com/sitedata/image/201904/29/2019042902668_0.jpg`;
  const productName = `[당일출고] 스타일신발 blablablablablablablablablablabla`;
  const price = 29800;

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
          <View style={formStyles.repeatContainer}>
            <View style={formStyles.repeatLeft}>
              <Text style={formStyles.repeatTitle}>주문상품 총 {amount}개</Text>
              <Text style={formStyles.inputTag}>전체 무료배송</Text>
              {orderProduct && (
                <View style={{ marginVertical: 10 }}>
                  <View style={{ flexDirection: 'row' }}>
                    <Image
                      source={{ uri: uri }}
                      style={{ width: 80, height: 80 }}
                    />
                    <View style={formStyles.productInfo}>
                      <Text numberOfLines={1}>{productName}</Text>
                      <Text>
                        {priceComma(price)}원 수량 {amount}개
                      </Text>
                    </View>
                  </View>
                  <View style={formStyles.choicedOptions}>
                    <Text>소라/FREE</Text>
                  </View>
                </View>
              )}
            </View>
            <View style={{ marginLeft: 10 }}>
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
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('BuyInput')}
        >
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
                <Text style={formStyles.repeatInput}>
                  배송지를 입력해주세요.
                </Text>
              )}
            </View>
            <View>
              <Text style={formStyles.inputTag}>입력하기</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('BuyRefund')}
        >
          <View style={formStyles.repeatContainer}>
            <View style={formStyles.repeatLeft}>
              <Text style={formStyles.repeatTitle}>환불 계좌</Text>
              {refundName.length > 0 ? (
                <>
                  <Text
                    style={formStyles.variableText}
                  >{`${refundName} | ${bankKind}`}</Text>
                  <Text style={formStyles.variableText}>
                    {refundBankNumber}
                  </Text>
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
        <View style={[formStyles.payway]}>
          <Text style={[formStyles.repeatTitle, { marginVertical: 10 }]}>
            결제방법
          </Text>
          <View style={formStyles.payAdditionalInfo}>
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
          <View style={formStyles.paywayContainer}>
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
                              formStyles.paywayBtn,
                              {
                                backgroundColor:
                                  theme.highlight_pressable.background,
                              },
                            ]
                          : [formStyles.paywayBtn]
                      }
                    >
                      <Text
                        style={
                          orderPayname === element.name
                            ? [{ color: theme.highlight_pressable.text }]
                            : [{ color: theme.container.text }]
                        }
                      >
                        {element.name}
                      </Text>
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
                              formStyles.paywayBtn,
                              {
                                backgroundColor:
                                  theme.highlight_pressable.background,
                              },
                            ]
                          : [formStyles.paywayBtn]
                      }
                    >
                      <Text
                        style={
                          orderPayname === element.name
                            ? [{ color: theme.highlight_pressable.text }]
                            : [{ color: theme.container.text }]
                        }
                      >
                        {element.name}
                      </Text>
                    </View>
                  </TouchableNativeFeedback>
                  <View style={{ marginRight: 5 }} />
                </>
              );
            })}
          </View>
          <View style={formStyles.payPlatform}>
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
      <View style={formStyles.paymentBar}>
        <TouchableNativeFeedback onPress={() => {}}>
          <View style={formStyles.payment}>
            <Text style={formStyles.paymentText}>29,800원 결제하기</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    </>
  );
}

export default BuyForm;
