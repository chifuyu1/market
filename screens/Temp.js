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
  Switch,
  Pressable,
  TouchableHighlight,
} from 'react-native';
import BuyInput from '../components/buy/BuyInput';
import Cart from '../components/cart/Cart';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

function Temp() {
  const [count, setCount] = useState(0);
  const Stack = createNativeStackNavigator();
  const a = [1, 2];
  return (
    <View style={styles.container}>
      <TouchableHighlight
        onPress={() => setCount((prev) => prev + 1)}
        onLongPress={() => console.log('길게 누르셨어요!')}
        onPressOut={() => console.log('눌렀다 뗐어요~')} // ??
        onPressIn={() => console.log('무언가 저에게 닿았어요')} // 손가락으로 누른 순간
      >
        <Text>{count}</Text>
      </TouchableHighlight>
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
