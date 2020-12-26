import {
  GoogleSignin,
  statusCodes,
} from '@react-native-community/google-signin';
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
} from 'react-native';

function Temp() {
  return (
    <View style={styles.container}>
      <Button onPress={() => {}} title='logout' />
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
