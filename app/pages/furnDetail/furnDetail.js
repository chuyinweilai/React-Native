import React from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import {
  Avatar,
  Text as ELText,
  Divider
} from '@react-native-elements/base';

// 引入图标
import AntDesign from 'react-native-vector-icons/AntDesign';

import styles from './styles';

const FurnDetail = ({ navigation, route }) => {
  console.log(route.params)
  return (
    <View style={styles.container}>
      <Text>Furn detail</Text>
    </View>
  );
};

export default FurnDetail;
