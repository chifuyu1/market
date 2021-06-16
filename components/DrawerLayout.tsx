import React, { useCallback, useRef } from 'react';
import {
  View,
  Text,
  Dimensions,
  DrawerLayoutAndroid,
  StyleSheet,
} from 'react-native';
import Category, { CategoryDrawer } from './Category';
import { Components as DrawerLayoutProps } from './types/type';

function renderDrawerLayout() {
  return (
    <>
      <View style={styles.title}>
        <Text style={{ fontSize: 18 }}>카테고리</Text>
      </View>
      <Category Component={CategoryDrawer} />
    </>
  );
}

function DrawerLayout({ Component }: DrawerLayoutProps) {
  const drawer = useRef<DrawerLayoutAndroid>(null);

  const openDrawer = useCallback(() => {
    if (drawer.current) {
      drawer.current.openDrawer();
    }
  }, []);

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={Dimensions.get('window').width * 0.75}
      renderNavigationView={renderDrawerLayout}
      keyboardDismissMode={'on-drag'}
      drawerPosition={'left'}
    >
      {Component ? <Component openDrawer={openDrawer} /> : <></>}
    </DrawerLayoutAndroid>
  );
}

const styles = StyleSheet.create({
  title: {
    marginVertical: 20,
    alignSelf: 'center',
  },
});

export default DrawerLayout;
