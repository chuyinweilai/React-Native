import React, { useEffect, useState } from 'react';
import {
  View,
  Image,
  Text,
  Pressable,
  FlatList,
  ScrollView,
  TouchableOpacity
} from 'react-native';

// 防止与原生标签混淆，重命名为ELText
import {
  SearchBar,
  Text as ElText
} from '@react-native-elements/base';

// 引入接口
import {
  GETBANNER,
  GETMERCHANDISELIST
} from '@api/main';

// 引入图标
import AntDesign from 'react-native-vector-icons/AntDesign';

// 引入样式文件
import styles from './styles';

const SearchElement = () => {
  const [search, setSearch] = useState('');

  const updateSearch = (val) => {
    setSearch(val);
  };

  return (
    <SearchBar
      platform="ios"
      cancelButtonTitle="取消"
      lightTheme={true}
      placeholder="2022 愿世界开始变好"
      onChangeText={updateSearch}
      value={search}
      />
  );
};

// 轮播图
const BannerElement = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    GETBANNER()
    .then(res => {
      if (res.errno === 0){ setList(res.data); }
      else { setList([]); }
    });
  },[]);

  return (
    <View style={styles.bannerBox}>
      <ScrollView
        pagingEnabled={true}
        horizontal={true}
        showsHorizontalScrollIndicator={true}
        >
        {
          list.map(val=>
            <Image
              key={val.id}
              resizeMode={'cover'}
              style={styles.bannerImg}
              source={{uri: val.imageUrl}}
              />
          )
        }
      </ScrollView>
    </View>
  );
};

// 类目
const CatalogElement = () => {
  const catalogList = [
    {
      id: '0',
      name: '桌子',
      icon: 'home'
    },
    {
      id: '1',
      name: '椅子',
      icon: 'totop'
    },
    {
      id: '2',
      name: '沙发',
      icon: 'inbox'
    },
    {
      id: '3',
      name: '灯具',
      icon: 'bulb1'
    },
    {
      id: '4',
      name: '艺术品',
      icon: 'pay-circle-o1'
    },
    {
      id: '5',
      name: '装饰品',
      icon: 'dribbble'
    }
  ];
  return (
    <View style={styles.listBox}>
      {
        catalogList.map((val) => (
          <Pressable
            key={val.id}
            style={({ pressed }) => [
              {
                opacity: pressed
                ? 0.7
                : 1
              },
              styles.catalog]}>
            <AntDesign name={val.icon} color={'#333'} size={26} />
            <Text style={{marginTop: 10}}>{val.name}</Text>
          </Pressable>
        ))
      }
    </View>
  );
};

// 专区
const ZoneElement = () => {
  const zoneList = [
    {
      id: '1',
      title: '超值专区1',
      subtitle: '实木、现代简约',
      color: '#fdf4d9'
    },
    {
      id: '2',
      title: '超值专区2',
      subtitle: '最新单品，抢先知晓',
      color: '#f7e9e9'
    },
    {
      id: '3',
      title: '超值专区3',
      subtitle: '实木、现代简约',
      color: '#eaeced'
    },
    {
      id: '4',
      title: '超值专区4',
      subtitle: '最新单品，抢先知晓',
      color: '#dce3e3'
    }
  ];

  return (
    <View style={styles.zoneBox}>
      <ElText
        style={styles.h4Title}
        h4
        // h1Style={{ color: theme?.colors?.secondary }}
      >
        超值专区
      </ElText>
      <View style={styles.listBox}>
        {
          zoneList.map((val, index) => (
            <View
              key={val.id}
              style={{
                ...styles.zone,
                backgroundColor: val.color,
                marginRight: (index % 2) ? 0 : 2,
                marginLeft: (index % 2) ? 2 : 0
              }}>
                <ElText h5>{val.title}</ElText>
                <Text>{val.subtitle}</Text>
            </View>
          ))
        }
      </View>
    </View>
  );
};

// 商品列表
const GoodsElement = ({navigation}) => {
  const [body,setBody] = useState({ pageSize:5, currentPage: 1});
  const [list,setList] = useState([]);

  useEffect(() => {
    GETMERCHANDISELIST(body)
    .then(res => {
      if (res.errno === 0){
        setList(res.data.records || []);
      } else {
        // setData({});
        setList([]);
      }
    });
  },[body]);

  const goodsItem = ({ index, item }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('FurnDetail')}
        style={{
          ...styles.goodsBox,
          paddingLeft: (index % 2) ? 8 : 16,
          paddingRight: (index % 2) ? 16 : 8
        }}>
        <View
          key={item.id}
          style={styles.goods}>
          <Image
            key={item.id}
            resizeMode={'cover'}
            style={styles.goodsImg}
            source={{uri: item.whiteGroundDesign}}
            />
          <Text style={styles.goodsPrice}>¥{item.price}</Text>
          <Text
            style={styles.goodsTitle}
            numberOfLines={1}
            ellipsizeMode="tail">
            {item.name}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.goodsList}>
      <ElText h4 h4Style={{ ...styles.h4Title, textAlign: 'center' }}>畅销产品</ElText>
      <FlatList
        data={list}
        numColumns={2}
        horizontal={false}
        renderItem={goodsItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

// 主组件
const Main = (props) => {
  const DATA = [
    {
      title: 'SearchElement',
      component: <SearchElement />
    },
    {
      title: 'banner',
      component: <BannerElement {...props}/>
    },
    {
      title: 'catalog',
      component: <CatalogElement/>
    },
    {
      title: 'zone',
      component: <ZoneElement/>
    },
    {
      title: 'goods',
      component: <GoodsElement {...props}/>
    }
  ];


  return (
    <View style={styles.container}>
      {/* 使用FlatList组件,而不选择ScrollView，是为了方便在后期首页数据过多的时候，进行优化 */}
      <FlatList
        data={DATA}
        renderItem={({item}) =>  item.component }
        keyExtractor={(item,index) => index}
      />
    </View>
  );

  // return (
  //   <View style={styles.container}>
  //     <FlatList
  //       data={DATA}
  //       renderItem={({item}) =>  item.component }
  //       keyExtractor={(item,index) => index}
  //     />

  //   </View>
  // );
};

export default Main;
