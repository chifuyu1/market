import React, { useCallback, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { theme } from '../../config/config';
import ProductList from '../ProductList';
import CheckBox from '@react-native-community/checkbox';
import BottomTwoButton from '../BottomTwoButton';
import { useDispatch, useSelector } from 'react-redux';
import { getMyProductsRequest } from '../../reducer/product';
import Loading from '../Loading';

export default React.memo(function ManagerMain() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const navigation = useNavigation();
  const moveAdd = useCallback(() => {
    navigation.navigate('ManagerAdd');
  }, [navigation]);

  const onDelete = useCallback(() => {
    dispatch();
  }, [dispatch]);

  useEffect(() => {
    dispatch(getMyProductsRequest());
  }, [dispatch]);
  return (
    <>
      <View style={styles.container}>
        {product.getMyProductLoading ? (
          <Loading />
        ) : (
          <FlatList
            data={product.myProduct}
            renderItem={({ item, index }) => (
              <View style={styles.listContainer}>
                <View style={styles.checkContainer}>
                  <CheckBox
                    value={false}
                    onValueChange={(newValue) => !newValue}
                    tintColors={{ true: theme.highlight_pressable.background }}
                  />
                </View>
                <View style={styles.itemContainer}>
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
              <Text style={styles.listHeaderText}>등록된 상품 목록</Text>
            )}
            ListHeaderComponentStyle={styles.listHeaderContainer}
          />
        )}
      </View>
      <BottomTwoButton
        actionLeft={onDelete}
        contentLeft={'선택한 상품 삭제'}
        actionRight={moveAdd}
        contentRight={'상품 추가하기'}
      />
    </>
  );
});

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 10 },
  listContainer: { flexDirection: 'row', marginVertical: 10 },
  checkContainer: { marginRight: 10, justifyContent: 'center' },
  itemContainer: { flex: 1 },
  listHeaderContainer: { marginVertical: 10, paddingLeft: 10 },
  listHeaderText: { fontSize: 18 },
});
