import React from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import {
  Avatar,
  Divider
} from '@react-native-elements/base';
import { Link } from '@react-navigation/native';

// 引入图标
import AntDesign from 'react-native-vector-icons/AntDesign';

import styles from './styles';

const Center = ({ navigation }) => {
  console.dir(navigation.navigate);
  return (
    <View style={styles.container}>
      <View style={styles.settingBox}>
        <Link to={{ screen: 'Setting', params: { id: 'jane' } }}>
          <AntDesign
            name="setting"
            size={28}
            />
        </Link>
        <TouchableOpacity onPress={() => { navigation.navigate('Setting', {id: 'test'})}}>
          <AntDesign
            name="setting"
            size={28}
            />
        </TouchableOpacity>
      </View>
      <View style={styles.headerBox}>
        <Avatar
          size={80}
          rounded
          containerStyle={styles.headerIcon}
          source={{uri: 'https://somoskudasai.com/wp-content/uploads/2020/09/51qswBACKwL._AC_.jpg'}}
          />
        <View style={styles.headerMess}>
          <View style={styles.headerTopList}>
            <View style={styles.headerTop}>
              <Text style={styles.headerTopTitle}>1.2K</Text>
              <Text style={styles.headerTopSubtitle}>获赞</Text>
            </View>
            <View style={styles.headerTop}>
              <Text style={styles.headerTopTitle}>1678</Text>
              <Text style={styles.headerTopSubtitle}>关注</Text>
            </View>
            <View style={styles.headerTop}>
              <Text style={styles.headerTopTitle}>720</Text>
              <Text style={styles.headerTopSubtitle}>粉丝</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.editMessBtn}>
            <Text style={{textAlign:'center'}}>编辑个人信息</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.userMessage}>
          <Text style={styles.userName}>Mirai3901</Text>
          <Text style={styles.userIntro}>初音ミク是2007年8月31日由 Crypton Future Media 以雅马哈的 Vocaloid 系列语音合成程序为基础开发的音源库，音源数据资料采样于日本声优藤田咲。</Text>
        </View>
      </View>
      <View style={styles.orderBox}>
        <Text style={styles.orderTitle}>我的订单</Text>
        <Divider />
        <View style={styles.orderList}>
          <View style={styles.orderItem}>
            <AntDesign name="wallet" size={18} color="#000"/>
            <Text style={styles.orderText}>待付款</Text>
          </View>
          <View style={styles.orderItem}>
            <AntDesign name="car" size={18} color="#000"/>
            <Text style={styles.orderText}>待发货</Text>
          </View>
          <View style={styles.orderItem}>
            <AntDesign name="save" size={18} color="#000"/>
            <Text style={styles.orderText}>待收货</Text>
          </View>
          <View style={styles.orderItem}>
            <AntDesign name="pay-circle-o1" size={18} color="#000"/>
            <Text style={styles.orderText}>售后</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Center;
