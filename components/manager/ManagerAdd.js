import React, { useCallback, useState } from 'react';
import { TextInput, ScrollView, Image, Dimensions } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import useTextInput from '../../hooks/useTextInput';
import BottomOneButton from '../BottomOneButton';
import ChoiceGender from '../ChoiceGender';
import { theme } from '../../config/config';

export default function ManagerAdd() {
  const [male, setMale] = useState(true);
  const [productSize, setProductSize] = useState('FREE');
  const [productCategory, setProductCategory] = useState('상의');
  const [anyPhoto, setAnyPhoto] = useState({});
  const [productName, onProductName] = useTextInput('');
  const [productPrice, onProductPrice] = useTextInput('');

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
  const handler = () => {
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
          const imageData = new FormData();
          imageData.append('productImage', result.uri);
          console.log(imageData);
          console.log(result);
        }
      }
    });
  };

  return (
    <>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 10,
          backgroundColor: theme.container.background,
          flex: 1,
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
        <Image
          source={{
            uri: anyPhoto.uri
              ? anyPhoto.uri
              : `https://mblogthumb-phinf.pstatic.net/MjAxODA4MTVfMzYg/MDAxNTM0MzIyNzM2MTYy.z3Dtimvb-qt8nfpBvJql3rbe6GmL9sonhpwhIUTl47Qg.EOnOZkG5t4UB1Bi-fsMS83X7pDLevCR2rVaCoKtULzog.JPEG.designpress2016/1.JPG?type=w800`,
          }}
          style={{ width: Dimensions.get('window').width - 20, height: 300 }}
          resizeMode={`contain`}
        />
      </ScrollView>
      <BottomOneButton action={handler} content={`상품 이미지 등록`} />
    </>
  );
}
