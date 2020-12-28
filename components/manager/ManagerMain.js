import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { View, Text, FlatList } from 'react-native';
import { theme } from '../../config/config';
import BottomOneButton from '../BottomOneButton';
import ProductList from '../ProductList';
import IconIo from 'react-native-vector-icons/Ionicons';
import CheckBox from '@react-native-community/checkbox';

export default React.memo(function ManagerMain() {
  const navigation = useNavigation();
  const moveAdd = useCallback(() => {
    navigation.navigate('ManagerAdd');
  }, [navigation]);
  const data = [
    {
      amount: 100,
      productName: `hello`,
      uri: `https://t1.daumcdn.net/brunch/service/user/1W8M/image/yWymBHvM6SmcQfHkgAntOwoFP2A`,
      price: 20000,
    },
  ];
  return (
    <>
      <View style={{ flex: 1, paddingHorizontal: 10 }}>
        <FlatList
          data={data}
          renderItem={({ item, index }) => (
            <View
              style={{
                flexDirection: 'row',
                marginVertical: 10,
              }}
            >
              <View style={{ marginRight: 10 }}>
                <CheckBox
                  value={false}
                  onValueChange={(newValue) => !newValue}
                  tintColors={{ true: theme.highlight_pressable.background }}
                />
              </View>
              <View style={{ flex: 1 }}>
                <ProductList
                  uri={item.uri}
                  amount={item.amount}
                  productName={item.productName}
                  price={item.price}
                />
              </View>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
          horizontal={false}
          showsHorizontalScrollIndicator={false}
          ListHeaderComponent={() => (
            <Text style={{ fontSize: 18 }}>등록된 상품 목록</Text>
          )}
          ListHeaderComponentStyle={{ marginVertical: 10, paddingLeft: 10 }}
        />
      </View>
      <BottomOneButton action={moveAdd} content={`상품 추가하기`} />
    </>
  );
});
