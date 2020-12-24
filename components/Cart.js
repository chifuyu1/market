import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, Button } from 'react-native';
import { useSelector } from 'react-redux';
import Popup from './Popup';

function CartContent() {
  return (
    <View>
      <Text>Cart</Text>
    </View>
  );
}

function Cart() {
  return (
    <View>
      <Text>Cart</Text>
      <Button
        title='마이페이지 이동'
        onPress={() => navi.navigate('마이페이지')}
      />
      <Text>d</Text>
      <Button title={`닫기`} onPress={() => setVisible(false)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default Cart;
