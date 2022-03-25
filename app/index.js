import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// 引入页面
import Main from './pages/main/main';
import Community from './pages/community/community';
import Center from './pages/center/center';

// 创建堆栈导航，可以存放打开过的页面
const Tab = createBottomTabNavigator();
// 导航全局配置，包裹下的所有导航均会使用该样式。
// https://reactnavigation.org/docs/bottom-tab-navigator
const screenOption = {
  headerShown:false,
  tabBarInactiveTintColor: '#999999',  // 非选中文字和图标的颜色
  tabBarActiveTintColor: '#39c5bb',   // 选中文字和图标的颜色
  tabBarHideOnKeyboard: true,    // 打开键盘时，选项卡是否隐藏

  // tabBar的样式，根据当前触发的tab
  tabBarStyle: {
    // position: 'absolute',   // 为了保证tab在底部显示，我们为tab设置定位
    // bottom: 0,
    borderTopColor: 'rgba(0, 0, 0, .2)'   // 导航栏顶部边框颜色
  }
};

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar hidden={true} translucent={true}/>
      <Tab.Navigator screenOptions={screenOption}>
        <Tab.Screen
          name="Main"
          component={Main}
          options={{ title: '主页' }}/>
        <Tab.Screen
          name="Community"
          component={Community}
          options={{ title: '社区' }}/>
        <Tab.Screen
          name="Center"
          component={Center}
          options={{ title: '个人中心' }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
