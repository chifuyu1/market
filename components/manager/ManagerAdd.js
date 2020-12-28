import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  PermissionsAndroid,
} from 'react-native';

const requestPermission = async () => {
  try {
    const per = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      {
        title: '업로드를 요청해요',
        message: '사진주세요',
        buttonPositive: '수락할게요',
        buttonNegative: '거절할게요',
      },
    );
    if (per === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('성공했어요');
    } else {
      console.log(PermissionsAndroid.RESULTS, per);
      console.log('거절당했어요');
    }
  } catch (err) {
    console.warn(err);
  }
};

function ManagerAdd() {
  const [resourcePath, setResourcePath] = useState({});

  const selectFile = () => {};

  return (
    <View>
      <Button title='업로드해보자!' onPress={selectFile} />
    </View>
  );
}

const styles = StyleSheet.create({});

export default ManagerAdd;
