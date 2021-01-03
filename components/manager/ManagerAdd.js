import React, { useCallback, useRef, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  Dimensions,
  StyleSheet,
} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import useTextInput from '../../hooks/useTextInput';
import BottomTwoButton from '../BottomTwoButton';
import ManagerAddPicker from './ManagerAddPicker';
import ChoiceGender from '../ChoiceGender';
import { theme } from '../../config/config';
import { useDispatch } from 'react-redux';
import { addProductsRequest } from '../../reducer/product';
import { HelperText } from 'react-native-paper';

export default function ManagerAdd() {
  const [male, setMale] = useState(true);
  const [productSize, setProductSize] = useState('FREE');
  const [productCategory, setProductCategory] = useState('상의');
  const [anyPhoto, setAnyPhoto] = useState({});
  const [end, setEnd] = useState(false);
  const [saleError, setSaleError] = useState(false);
  const [saleRate, setSaleRate] = useState('');
  const [productName, onProductName] = useTextInput('');
  const [productPrice, onProductPrice] = useTextInput('');
  const ref = useRef(null);
  const dispatch = useDispatch();

  const onChangeMale = useCallback(() => {
    setMale(true);
  }, []);

  const onChangeFemale = useCallback(() => {
    setMale(false);
  }, []);

  const onSaleRate = useCallback(
    (text) => {
      setSaleRate(text);
      isNaN(Number(saleRate)) ? setSaleError(true) : setSaleError(false);
    },
    [saleRate],
  );

  const options = {
    mediaType: 'photo',
    quality: 1,
    includeBase64: false,
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
  const addProduct = useCallback(() => {
    if (saleError) {
      return;
    }
    return dispatch(
      addProductsRequest({
        color: 'red',
        gender: male,
        type: productCategory,
        name: productName,
        image: anyPhoto.uri,
        size: productSize,
        price: productPrice,
        saleRate,
      }),
    );
  }, [
    dispatch,
    productName,
    productPrice,
    male,
    productCategory,
    anyPhoto,
    productSize,
    saleRate,
    saleError,
  ]);

  return (
    <>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
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
          style={styles.inputText}
        />
        <TextInput
          placeholder='가격'
          onChangeText={onProductPrice}
          value={productPrice}
          style={styles.inputText}
        />
        <TextInput
          placeholder='할인율 설정'
          onChangeText={onSaleRate}
          value={saleRate}
          style={styles.inputText}
        />
        <HelperText
          visible={saleError}
          style={{ color: theme.container.error }}
        >
          %를 제외한 숫자로만 입력해주세요!
        </HelperText>
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
            style={styles.existImage}
            resizeMode={'contain'}
          />
        ) : (
          <View style={styles.noImage}>
            <Text style={styles.noImageText}>no image</Text>
          </View>
        )}
      </ScrollView>
      <BottomTwoButton
        actionLeft={getImageHandler}
        contentLeft={'상품 이미지 등록'}
        actionRight={addProduct}
        contentRight={'상품 등록'}
      />
    </>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    paddingHorizontal: 10,
    backgroundColor: theme.container.background,
  },
  noImage: {
    backgroundColor: 'rgba(0, 0, 0, .5)',
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noImageText: { color: '#fff', fontSize: 18 },
  existImage: { width: Dimensions.get('window').width - 20, height: 300 },
  inputText: {
    borderBottomWidth: 1,
    borderBottomColor: theme.container.highlight_border,
    marginVertical: 10,
  },
});
