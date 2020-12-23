/* eslint-disable prettier/prettier */
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableHighlight,
  Button,
  TouchableNativeFeedback,
  FlatList,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import IconIo from 'react-native-vector-icons/Ionicons';
import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';
import {priceComma} from '../util/price';

export default function Coupon() {
  const money = [100000, 60000, 20000, 10000, 4000, 3000, 1000, 500];

  // code: string;
  // title: string;
  // content: string;
  // leastBuyMoney: number;
  // discount: number;
  // category: number;
  // use: boolean;
  // used: boolean;
  // store: string
  const used = true;
  const remainDate = 4;
  const categoryNumber = 1;
  const categoryString = (num) => {
    if (num === 1) return `상의`;
  };
  return (
    <>
      {/* <View style={styles.modalTitleContainer}>
        <View style={styles.modalClose}>
          <TouchableNativeFeedback onPress={() => {}}>
            <IconIo name={`close`} size={20} color="black" />
          </TouchableNativeFeedback>
        </View>
        <View style={styles.modalTitle}>
          <Text style={{fontSize: 18, fontWeight: `bold`}}>쿠폰</Text>
        </View>
      </View> */}
      <View style={styles.couponContainer}>
        <FlatList
          data={money}
          renderItem={({item}) => {
            return (
              <TouchableNativeFeedback onPress={() => {}}>
                <View style={styles.couponItem}>
                  <View>
                    <Text style={{fontWeight: `bold`, fontSize: 16}}>
                      {priceComma(item)}원
                    </Text>
                    <Text style={{color: `black`}}>storeff</Text>
                    <Text style={{fontSize: 12, color: `rgba(0, 0, 0, 0.5)`}}>
                      {categoryNumber > 0
                        ? `${categoryString(categoryNumber)}에서만 사용 가능`
                        : `총 ${priceComma(item * 5)}원 이상 구매 시 사용 가능`}
                    </Text>
                    <Text>
                      {used ? `남은 기간: ${remainDate}일` : '기간만료'}
                    </Text>
                  </View>
                </View>
              </TouchableNativeFeedback>
            );
          }}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  couponContainer: {
    paddingHorizontal: 10,
  },
  couponItem: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: 5,
    borderRadius: 5,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: `rgba(0, 0, 0, .25)`,
  },
});
