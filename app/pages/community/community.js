import React,{ useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';
import {
  Avatar,
  Image,
  ListItem
} from '@react-native-elements/base';

// 引入图标
import AntDesign from 'react-native-vector-icons/AntDesign';

import styles from './styles';

const data = [
  {
    id: 0,
    userName: 'UserName 1',
    userintro: '我想要咸鱼每一天',
    title: '初见不识卿',
    collect: 0,
    favorite: 0,
    url: 'https://somoskudasai.com/wp-content/uploads/2020/09/51qswBACKwL._AC_.jpg'
  },
  {
    id: 1,
    userName: 'UserName 2',
    userintro: '我想要咸鱼每二天',
    title: '音形若玉莹',
    collect: 0,
    favorite: 0,
    url: 'https://somoskudasai.com/wp-content/uploads/2020/09/51Xq5s6HtqL._AC_.jpg'
  },
  {
    id: 2,
    userName: 'UserName 3',
    userintro: '我想要咸鱼每三天',
    title: '未能相偕老',
    collect: 0,
    favorite: 0,
    url: 'https://somoskudasai.com/wp-content/uploads/2020/09/51Xq5s6HtqL._AC_.jpg'
  },
  {
    id: 3,
    userName: 'UserName 4',
    userintro: '我想要咸鱼每四天',
    title: '来世叙前情',
    url: 'https://somoskudasai.com/wp-content/uploads/2020/09/71jOt9zpiKL._AC_SL1000_.jpg'
  }
];
const Community = () => {

  const [list, setList] = useState([]);
  const [refresh, setRefresh] = useState(false);  // 刷新状态
  const [loading, setLoading] = useState(false);  // 加载状态

  // 等同于componentDidMounted,
  useEffect(() => {
    setList(data);
  },[]);

  // 收藏
  const onCollect = (index) => {
    let val = list[index] || {};
    val.collect = val.collect ? 0 : 1;
    list[index] = val;
    setList([...list]);
  };

  // 喜欢
  const onFavo = (index) => {
    let val = list[index] || {};
    val.favorite = val.favorite ? 0 : 1;
    list[index] = val;
    setList([...list]);
  };

  const itemRender = (e) => {
    const {index, item } = e;
    // separators中有highlight、unhighlight、updateProps三个属性，该属性要搭配ItemSeparatorComponent使用
    // 当我们在renderItem中调用separators.highlight时，ItemSeparatorComponent中获取highlighted为true。
    // 当我们在renderItem中调用separators.unhighlight时，ItemSeparatorComponent中获取highlighted为false。
    // 当我们在renderItem中调用separators.updateProps时，ItemSeparatorComponent中获取highlighted状态会保持不变
    // 当我们不调用separators时，则ItemSeparatorComponent中无法获取highlighted参数
    return (
      <View key={index} style={{ backgroundColor: 'white' }}>
        <ListItem>
          <Avatar
            size={48}
            rounded
            source={item.url ? { uri: item.url } : {}}
            />
          <ListItem.Content>
            <ListItem.Title style={styles.userName}>{item.userName}</ListItem.Title>
            <ListItem.Subtitle style={styles.userIntro}>{item.userintro}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
        <View style={styles.content}>
          <View style={styles.mainPic}>
            <Image
              resizeMode={'cover'}
              source={{ uri: item.url }}
              containerStyle={styles.content}
              PlaceholderContent={<ActivityIndicator />}
            />
            <View style={styles.context}>
              <Text
                style={styles.text}
                numberOfLines={1}
                ellipsizeMode="tail"
                >{item.title}</Text>
            </View>
          </View>
          <View style={styles.control}>
            <TouchableOpacity>
              <AntDesign style={styles.icon} name={'upload'} color={'#333'} size={18} />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>onCollect(index)}>
              <AntDesign
                style={styles.icon}
                name={item.collect === 1 ? 'star' : 'staro'}
                color={item.collect === 1 ? '#FF0000' : '#333'}
                size={18} />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>onFavo(index)}>
              <AntDesign
                style={styles.icon}
                name={item.favorite === 1 ? 'heart' : 'hearto'}
                color={item.favorite === 1 ? '#FF0000' : '#333'}
                size={18} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  const itemSeparator = (e) => {
    const { highlighted, leadingItem } = e;
    console.log("highlighted", highlighted)
    // highlighted高亮状态，受到renderItem中的separators影响
    // leadingItem为对应的item数据
    return (
        <View />
    );
  };

  // 下拉刷新数据
  const refreshData = () => {
    console.log("refresh");
    if (refresh){ return;}
    setRefresh(true);
    setTimeout(() => {
      setRefresh(false);
      setList(data);
    }, 1000);
  };

  // 上拉加载数据
  const loadData = () => {
    console.log("loadData");
    if (loading){ return;}
    setLoading(true);
    setTimeout(() => {
      const arr = list.concat(data);
      setList(arr);
      setLoading(false);
    });
  };

  return (
    <FlatList
      data={list}
      refreshing={refresh} // 刷新状态
      onRefresh={refreshData} // 刷新事件
      onEndReached={loadData} // 加载事件
      onEndReachedThreshold={0.2} // 加载触发距离
      ItemSeparatorComponent={itemSeparator}  // 行与行之间的分隔线组件
      renderItem={itemRender}
    />
  );
};

export default Community;
