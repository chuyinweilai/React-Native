import React, { useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import styles from './styles';

/**
{
  "navigation": {
    "addListener": [Function addListener],
    "canGoBack": [Function canGoBack],
    "dispatch": [Function dispatch],
    "getParent": [Function getParent],
    "getState": [Function anonymous],
    "goBack": [Function anonymous],
    "isFocused": [Function isFocused],
    "navigate": [Function anonymous],
    "pop": [Function anonymous],
    "popToTop": [Function anonymous],
    "push": 跳转,
    "removeListener": [Function removeListener],
    "replace": [Function anonymous],
    "reset": [Function anonymous],
    "setOptions": [Function setOptions],
    "setParams": [Function anonymous]
  },
  "route": {
    "key": "FurnDetail-FuGHbt69Ua1hRNy8IXFYo",
    "name": "FurnDetail",
    "params": {
      "id": "jane"
    },
    "path": undefined
  }
}
 */
const Setting = ({ navigation, route }) => {

  useEffect(() => {
    console.log(route.params);
    console.log('getState', navigation.getState());
  });

  const changeParams = () => {
    // 重置当前路由
    navigation.reset({
      index: 1,  // 设置当前路由的层级
      actions: [
        // 向堆栈中存放路由
        navigation.navigate('Center'),
        navigation.navigate('Setting', {id: '3'})
      ],
      key: 'Setting_From_Center'  // 设置当前页面的navigation key值。一般我们不需要调整该参数
    });
    // navigation.setParams({id: 2, name: 'Mirai'});
  };

  return (
    <View style={styles.container}>
      <Text>Setting</Text>
      <TouchableOpacity onPress={changeParams}>
        <Text>Change params</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Setting;
