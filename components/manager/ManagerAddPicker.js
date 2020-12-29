import React from 'react';
import { Picker } from '@react-native-picker/picker';

export default function ManagerAddPicker({
  male,
  productCategory,
  setProductCategory,
  productSize,
  setProductSize,
}) {
  return (
    <>
      {male ? (
        <Picker
          selectedValue={productCategory}
          mode='dialog'
          onValueChange={(itemValue, itemIndex) =>
            setProductCategory(itemValue)
          }
        >
          <Picker.Item label='상의' value={`상의`} />
          <Picker.Item label='하의' value={`하의`} />
          <Picker.Item label='아우터' value={`아우터`} />
          <Picker.Item label='신발' value={`신발`} />
          <Picker.Item label='속옷' value={`속옷`} />
          <Picker.Item label='악세서리' value={`악세서리`} />
          <Picker.Item label='트레이닝' value={`트레이닝`} />
        </Picker>
      ) : (
        <Picker
          selectedValue={productCategory}
          mode='dialog'
          onValueChange={(itemValue, itemIndex) =>
            setProductCategory(itemValue)
          }
        >
          <Picker.Item label='상의' value={`상의`} />
          <Picker.Item label='하의' value={`하의`} />
          <Picker.Item label='아우터' value={`아우터`} />
          <Picker.Item label='신발' value={`신발`} />
          <Picker.Item label='속옷' value={`속옷`} />
          <Picker.Item label='악세서리' value={`악세서리`} />
          <Picker.Item label='트레이닝' value={`트레이닝`} />
          <Picker.Item label='원피스' value={`원피스`} />
          <Picker.Item label='치마' value={`치마`} />
          <Picker.Item label='주얼리' value={`주얼리`} />
        </Picker>
      )}
      {productCategory !== '주얼리' &&
      productCategory !== '신발' &&
      productCategory !== '악세서리' ? (
        <Picker
          selectedValue={productSize}
          mode='dialog'
          onValueChange={(itemValue, itemIndex) => setProductSize(itemValue)}
        >
          <Picker.Item label='FREE' value={`FREE`} />
          <Picker.Item label='S' value={`S`} />
          <Picker.Item label='M' value={`M`} />
          <Picker.Item label='L' value={`L`} />
        </Picker>
      ) : productCategory === '신발' ? (
        <Picker
          selectedValue={productSize}
          mode='dialog'
          onValueChange={(itemValue, itemIndex) => setProductSize(itemValue)}
        >
          <Picker.Item label='230' value={`230`} />
          <Picker.Item label='240' value={`240`} />
          <Picker.Item label='250' value={`250`} />
          <Picker.Item label='260' value={`260`} />
          <Picker.Item label='270' value={`270`} />
          <Picker.Item label='280' value={`280`} />
        </Picker>
      ) : (
        <></>
      )}
    </>
  );
}
