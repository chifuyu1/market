import {
  GoogleSignin,
  statusCodes,
} from '@react-native-community/google-signin';
import React, { useRef, useState } from 'react';
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
} from 'react-native';

function Temp() {
  const [info, setInfo] = useState({ info: {}, load: false });

  const googleCheckSign = async () => {
    const result = await GoogleSignin.isSignedIn();
    return result;
  };

  const googleSignIn = async () => {
    try {
      GoogleSignin.configure({
        offlineAccess: true,
        webClientId:
          '906621653717-sdt731rmkjjgln9havtcf29evu7jatlq.apps.googleusercontent.com',
      });
      const result = await GoogleSignin.isSignedIn();
      if (!result) {
        console.log(`not login`);
      }
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      setInfo({ info: { name: userInfo.user.name }, load: true });
      // if (userInfo) return userInfo.user.name;
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  const googleSignOut = async () => {
    try {
      // await GoogleSignin.hasPlayServices();
      await GoogleSignin.signOut();
      const userInfo = await GoogleSignin.isSignedIn();
      if (!userInfo) {
        console.log(`not login`);
      }
      setInfo({ info: {}, load: true });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  return (
    <View style={styles.container}>
      <Button onPress={googleSignIn} title='login' />
      <Text>구분선</Text>
      <Button onPress={googleSignOut} title='logout' />
      {info.load ? (
        <View>
          <Text>{info.info.name}</Text>
        </View>
      ) : (
        <Text>not loaded</Text>
      )}
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
