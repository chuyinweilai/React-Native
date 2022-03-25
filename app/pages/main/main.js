import React from 'react';
import {
  View,
  Image,
  Text,
  Pressable,
  FlatList,
  ScrollView
} from 'react-native';

// 防止与原生标签混淆，重命名为ELText
import { Text as ElText } from '@react-native-elements/base';

// 引入图标
import AntDesign from 'react-native-vector-icons/AntDesign';

// 引入样式文件
import styles from './mainStyles';


// 轮播图
const BannerElement = () => {
  const bannerList = [
    {
      id: 0,
      title: 'Main dishes',
      url: 'https://somoskudasai.com/wp-content/uploads/2020/09/51qswBACKwL._AC_.jpg'
    },
    {
      id: 1,
      title: 'Sides',
      url: 'https://somoskudasai.com/wp-content/uploads/2020/09/51Xq5s6HtqL._AC_.jpg'
    },
    {
      id: 2,
      title: 'Drinks',
      url: 'https://somoskudasai.com/wp-content/uploads/2020/09/51qs5T3fnfL._AC_.jpg'
    },
    {
      id: 3,
      title: 'Desserts',
      url: 'https://somoskudasai.com/wp-content/uploads/2020/09/71jOt9zpiKL._AC_SL1000_.jpg'
    }
  ];
  return (
    <View style={styles.bannerBox}>
      <ScrollView
        pagingEnabled={true}
        horizontal={true}
        showsHorizontalScrollIndicator={true}
        >
        {
          bannerList.map(val=>
            <Image
              key={val.id}
              resizeMode={'cover'}
              style={styles.bannerImg}
              source={{uri: val.url}}
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
              styles.catalog]}
            >
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
const GoodsElement = () => {
  const goodList = [
    {
      id: 0,
      title: 'Main dishes',
      price: 100,
      url: 'https://somoskudasai.com/wp-content/uploads/2020/09/51qswBACKwL._AC_.jpg'
    },
    {
      id: 1,
      title: 'Sides',
      price: 60,
      url: 'https://somoskudasai.com/wp-content/uploads/2020/09/51Xq5s6HtqL._AC_.jpg'
    },
    {
      id: 2,
      title: 'Drinks',
      price: 1200,
      url: 'https://somoskudasai.com/wp-content/uploads/2020/09/51qs5T3fnfL._AC_.jpg'
    },
    {
      id: 3,
      title: 'Desserts',
      price: 39,
      url: 'https://somoskudasai.com/wp-content/uploads/2020/09/71jOt9zpiKL._AC_SL1000_.jpg'
    },
    {
      id: 4,
      title: 'Desserts',
      price: 831,
      url: 'https://somoskudasai.com/wp-content/uploads/2020/09/71jOt9zpiKL._AC_SL1000_.jpg'
    },
    {
      id: 5,
      title: 'Desserts',
      price: 1093,
      url: 'https://somoskudasai.com/wp-content/uploads/2020/09/71jOt9zpiKL._AC_SL1000_.jpg'
    }
  ];

  const goodsItem = ({ index, item }) => {
    return (
      <View style={{
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
            source={{uri: item.url}}
            />
          <Text style={styles.goodsPrice}>¥{item.price}</Text>
          <Text>{item.title}</Text>
        </View>
      </View>
    );
  };

  return (
    <View>
      <ElText h4 h4Style={{ ...styles.h4Title, textAlign: 'center' }}>畅销产品</ElText>
      <FlatList
        data={goodList}
        numColumns={2}
        horizontal={false}
        renderItem={goodsItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

// 主组件
const Main = () => {

  const DATA = [
    {
      title: 'banner',
      component: <BannerElement/>
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
      title: 'zone',
      component: <GoodsElement/>
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
