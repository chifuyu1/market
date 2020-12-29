import React, { useCallback, useRef, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import useTextInput from '../../hooks/useTextInput';
import BottomTwoButton from '../BottomTwoButton';
import ManagerAddPicker from './ManagerAddPicker';
import ChoiceGender from '../ChoiceGender';
import { theme } from '../../config/config';

export default function ManagerAdd() {
  const [male, setMale] = useState(true);
  const [productSize, setProductSize] = useState('FREE');
  const [productCategory, setProductCategory] = useState('상의');
  const [anyPhoto, setAnyPhoto] = useState({});
  const [end, setEnd] = useState(false);
  const [productName, onProductName] = useTextInput('');
  const [productPrice, onProductPrice] = useTextInput('');
  const ref = useRef(null);

  const onChangeMale = useCallback(() => {
    setMale(true);
  }, []);

  const onChangeFemale = useCallback(() => {
    setMale(false);
  }, []);

  const options = {
    mediaType: 'photo',
    quality: 1,
    includeBase64: true,
    // maxWidth:,
    // maxHeight:,
  };
  const getImageHandler = () => {
    launchImageLibrary(options, (response) => {
      if (response.didCancel || response.errorCode) {
        return;
      } else {
        const result = {
          uri: response.uri,
          fileSize: response.fileSize,
          fileName: response.fileName,
        };
        if (result.fileSize > 1048576 * 32) {
          return;
        } else {
          setAnyPhoto(result);
          setEnd(true);
        }
      }
    });
  };
  const uploadImageHandler = useCallback(() => {}, []);

  return (
    <>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 10,
          backgroundColor: theme.container.background,
        }}
        horizontal={false}
        ref={ref}
        onContentSizeChange={() => {
          if (ref.current && end) {
            setEnd(false);
            ref.current.scrollToEnd({ animated: true });
          }
        }}
      >
        <TextInput
          placeholder='제품명'
          onChangeText={onProductName}
          value={productName}
          style={{
            borderBottomWidth: 1,
            borderBottomColor: theme.container.highlight_border,
            marginVertical: 10,
          }}
        />
        <TextInput
          placeholder='가격'
          onChangeText={onProductPrice}
          value={productPrice}
          style={{
            borderBottomWidth: 1,
            borderBottomColor: theme.container.highlight_border,
            marginVertical: 10,
          }}
        />
        <ChoiceGender
          male={male}
          onChangeMale={onChangeMale}
          onChangeFemale={onChangeFemale}
        />
        <ManagerAddPicker
          male={male}
          productCategory={productCategory}
          setProductCategory={setProductCategory}
          productSize={productSize}
          setProductSize={setProductSize}
        />
        {anyPhoto.uri ? (
          <Image
            source={{ uri: anyPhoto.uri }}
            style={{ width: Dimensions.get('window').width - 20, height: 300 }}
            resizeMode={`contain`}
          />
        ) : (
          <View
            style={{
              backgroundColor: `rgba(0, 0, 0, .5)`,
              height: 300,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text style={{ color: `#fff`, fontSize: 18 }}>no image</Text>
          </View>
        )}
      </ScrollView>
      <BottomTwoButton
        actionLeft={getImageHandler}
        contentLeft={`상품 이미지 등록`}
        actionRight={uploadImageHandler}
        contentRight={`상품 등록`}
      />
    </>
  );
}
