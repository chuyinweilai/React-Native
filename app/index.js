import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


// 获取路由
import Router from './pages/router';

const App = () =>{
  return (
    <NavigationContainer>
      <StatusBar hidden={true} translucent={true}/>
      <Router/>
    </NavigationContainer>
  );
};

export default App;
