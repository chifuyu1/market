import {
  GoogleSignin,
  statusCodes,
} from '@react-native-community/google-signin';
import { NavigationContainer } from '@react-navigation/native';
import React, { useCallback, useEffect, useRef, useState } from 'react';
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
import { useDispatch } from 'react-redux';

function Temp() {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const Action = (id) => ({ type: 'DELETE', id });
  const Stack = createNativeStackNavigator();
  const array = [1, 2];

  const onDelete = useCallback((v) => dispatch(Action(v)), [dispatch]);

  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={onDelete}>
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
