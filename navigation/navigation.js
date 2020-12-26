import React, { memo } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MainScreen from '../screens/MainScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import MyPage from '../screens/MyPage';
import ProductInfo from '../components/ProductInfo';
import IconIo from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { LogBox } from 'react-native';
import Coupon from '../components/Coupon';
import Temp from '../screens/Temp';
import { OpenSource, ServiceTerm, Notice } from '../components/InfoDetail';
import Cart from '../components/Cart';

LogBox.ignoreAllLogs();

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();
const TopTab = createMaterialTopTabNavigator();

function FavoriteScreenStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Favorite' component={FavoriteScreen} />
      <Stack.Screen
        name='ProductInfo'
        component={ProductInfo}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
function MainScreenStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Home'
        component={MainScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='ProductInfo'
        component={ProductInfo}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function CouponTab() {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name='보유' component={Coupon} />
      <TopTab.Screen name='만료' component={Coupon} />
    </TopTab.Navigator>
  );
}

function MyPageStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTopInsetEnabled: false,
        stackAnimation: 'slide_from_right',
      }}
    >
      <Stack.Screen
        name='MyPage'
        component={MyPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Coupon'
        component={CouponTab}
        options={{ headerTitle: `쿠폰` }}
      />
      <Stack.Screen
        name='OrderList'
        component={Cart}
        options={{ headerTitle: `주문/결제` }}
      />
      <Stack.Screen
        name='Notice'
        component={Notice}
        options={{
          headerTitle: `공지사항`,
          headerTitleStyle: { fontSize: 16 },
        }}
      />
      <Stack.Screen
        name='OpenSource'
        component={OpenSource}
        options={{
          headerTitle: `오픈소스`,
        }}
      />
      <Stack.Screen
        name='ServiceTermPersonalInfo'
        component={ServiceTerm}
        options={{
          headerTitle: `서비스 이용약관 및 개인정보 수집`,
        }}
      />
    </Stack.Navigator>
  );
}

const router = [
  {
    id: 1,
    name: '홈',
    component: MainScreenStack,
    iconName: 'home-outline',
    focusedName: 'home',
  },
  {
    id: 2,
    name: '찜',
    component: FavoriteScreenStack,
    iconName: 'heart-outline',
    focusedName: 'heart',
  },
  {
    id: 3,
    name: '마이페이지',
    component: MyPageStack,
    iconName: 'user-o',
    focusedName: 'user',
  },
];

export function BottomTab() {
  return (
    <Tab.Navigator
      activeColor='#ff0000'
      inactiveColor='gray'
      initialRouteName='홈'
      backBehavior='none'
      screenOptions={{ tabBarColor: '#fff' }}
      barStyle={{ backgroundColor: '#fff' }}
    >
      {router.map((element) => (
        <Tab.Screen
          key={element.id}
          name={element.name}
          component={element.component}
          options={{
            tabBarIcon: ({ focused }) => {
              if (element.id === 3) {
                return (
                  <FontAwesome
                    name={focused ? element.focusedName : element.iconName}
                    size={20}
                    color={focused ? 'red' : 'gray'}
                  />
                );
              }
              return (
                <IconIo
                  name={focused ? element.focusedName : element.iconName}
                  size={20}
                  color={focused ? 'red' : 'gray'}
                />
              );
            },
            tabBarLabel: element.name,
          }}
        />
      ))}
    </Tab.Navigator>
  );
}

export function Navigate() {
  return (
    <NavigationContainer>
      <BottomTab />
    </NavigationContainer>
  );
}

export const Navigator = memo(Navigate);
