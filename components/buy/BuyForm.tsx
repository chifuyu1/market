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
import { formStyles } from './buyFormStyles';
import BuyPayway from './BuyPayway';
import BuyPayMoney from './BuyPayMoney';
import BuyViewProduct from './BuyViewProduct';
import BottomOneButton from '../BottomOneButton';
import BuyAddress from './BuyAddress';
import BuyRefund from './BuyRefund';

function BuyForm() {
  const [orderProduct, setOrderProduct] = useState(false);
  const [orderPay, setOrderPay] = useState(false);
  const [paynameLabel, setPaynameLabel] = useState('');
  const [orderPayname, setOrderPayname] = useState('');
  const [end, setEnd] = useState(false);
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

  const ref = useRef(null);
  const navigation = useNavigation();
  const route = useRoute();

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
  // temp variable
  const amount = 3;
  const payMoney = 29800;
  const uri =
    'https://image.chosun.com/sitedata/image/201904/29/2019042902668_0.jpg';
  const productName = '[당일출고] 스타일신발 blablablablablablablablablablabla';
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
        <BuyViewProduct
          amount={amount}
          price={price}
          uri={uri}
          productName={productName}
          orderProduct={orderProduct}
          onViewPruduct={onViewPruduct}
        />
        <BuyAddress
          action={() => navigation.navigate('BuyInput')}
          name={name}
          phoneNumber={phoneNumber}
          address={address}
          detailAddress={detailAddress}
        />
        <BuyRefund
          action={() => navigation.navigate('BuyRefund')}
          refundName={refundName}
          bankKind={bankKind}
          refundBankNumber={refundBankNumber}
        />
        <BuyPayMoney
          onViewPay={onViewPay}
          orderPay={orderPay}
          payMoney={payMoney}
        />
        <BuyPayway
          paynameLabel={paynameLabel}
          setPaynameLabel={setPaynameLabel}
          orderPayname={orderPayname}
          setOrderPayname={setOrderPayname}
          setEnd={setEnd}
        />
      </ScrollView>
      <BottomOneButton content={'29,800원 결제하기'} action={() => {}} />
    </>
  );
}

export default BuyForm;
