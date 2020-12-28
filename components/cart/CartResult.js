import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../../config/config';

function CartResult() {
  return (
    <View style={styles.endOrder}>
      <View>
        <View style={styles.endInfo}>
          <Text style={styles.endInfoLeftText}>총 상품금액</Text>
          <Text style={styles.endInfoRightText}>45000원</Text>
        </View>
        <View style={styles.endInfo}>
          <Text style={styles.endInfoLeftText}>상품할인</Text>
          <Text style={styles.endInfoRightText}>-7380원</Text>
        </View>
        <View style={styles.endInfo}>
          <Text style={styles.endInfoLeftText}>배송비</Text>
          <Text style={styles.endInfoRightText}>무료배송</Text>
        </View>
      </View>
      <View style={styles.endInfoContainer}>
        <View style={styles.endInfo}>
          <Text style={styles.endInfoLeftText}>총 1개 주문금액</Text>
          <Text style={[styles.endInfoRightText, { color: `#fa5252` }]}>
            37620원
          </Text>
        </View>
        <View style={styles.endInfo}>
          <Text style={styles.endInfoLeftText}>예상 적립포인트</Text>
          <Text style={styles.endInfoRightText}>370원</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  endOrder: {
    paddingHorizontal: 10,
    backgroundColor: theme.container.background,
  },
  endInfoContainer: {
    borderTopWidth: 1,
    borderTopColor: theme.faint.border,
  },
  endInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  endInfoLeftText: {
    fontSize: 16,
    color: theme.faint.text,
  },
  endInfoRightText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CartResult;
