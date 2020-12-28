import {
  GoogleSignin,
  statusCodes,
} from '@react-native-community/google-signin';
import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  DrawerLayoutAndroid,
  Dimensions,
  Animated,
  Image,
  FlatList,
  ScrollView,
  AppRegistry,
  Platform,
  Button,
  Appearance,
  BackHandler,
  TouchableNativeFeedback,
} from 'react-native';
import BuyInput from '../components/buy/BuyInput';
import Cart from '../components/cart/Cart';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

function Temp() {
  const Stack = createNativeStackNavigator();
  const a = [1, 2, 3, 4];
  return (
    <View style={[styles.container, { flexDirection: 'row' }]}>
      {a.map((value, index) => (
        <TouchableNativeFeedback
          key={index}
          style={{ marginRight: 5 }}
          onPress={() => {}}
        >
          <View style={{ padding: 10, borderWidth: 1 }}>
            <Text>{value}</Text>
          </View>
        </TouchableNativeFeedback>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'skyblue',
  },
});

export default React.memo(Temp);
