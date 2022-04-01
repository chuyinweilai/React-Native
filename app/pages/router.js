import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// 页面列表
import Main from './main/main';
import Community from './community/community';
import Center from './center/center';

import FurnDetail from './furnDetail/furnDetail';
import Setting from './center/setting/setting';
import Login from './login/login';

// 创建堆栈导航，可以存放打开过的页面
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// 导航全局配置，包裹下的所有导航均会使用该样式。
// https://reactnavigation.org/docs/bottom-tab-navigator
const screenOption = {
  headerShown:false,
  tabBarInactiveTintColor: '#999999',  // 非选中文字和图标的颜色
  tabBarActiveTintColor: '#39c5bb',   // 选中文字和图标的颜色
  tabBarHideOnKeyboard: true,    // 打开键盘时，选项卡是否隐藏

  // tabBar的样式，根据当前触发的tab
  tabBarStyle: {
    borderTopColor: 'rgba(0, 0, 0, .2)'   // 导航栏顶部边框颜色
  }
};

// 首页
const Tabs = () => (
  <Tab.Navigator
    screenOptions={screenOption}>
    <Tab.Screen
      name="Main"
      component={Main}/>
    <Tab.Screen
      name="Community"
      TabIcon
      component={Community}/>
    <Tab.Screen
      name="Center"
      component={Center}/>
  </Tab.Navigator>
);
const Router = () =>{
  return (
    <Stack.Navigator
      initialRouteName="Tabs"
      screenOptions={{headerShown:false}}>
      {/* 首页tab页面 */}
      <Stack.Screen
        name="Tabs"
        component={Tabs}/>

      {/* 页面 */}
      <Stack.Screen
        name="Login"
        component={Login}/>
      <Stack.Screen
        name="FurnDetail"
        component={FurnDetail}/>
      <Stack.Screen
        name="Setting"
        component={Setting}
        options={{
          title: '设置',
          headerShown: true
        }}/>
    </Stack.Navigator>
  );
};

export default Router;
