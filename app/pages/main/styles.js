import { StyleSheet, Dimensions } from 'react-native';

// 获取窗口的宽高,且可以在尺寸变化时自动更新
const { width } = Dimensions.get('window');

/**
 * 注意：
 * 1. 表示的是与设备像素密度无关的逻辑像素点
 */
const styles = StyleSheet.create({
  container:{
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#FFF'
  },
  bannerBox: {
    width: '100%',
    height: 330,
    marginBottom: 10
  },
  bannerImg: {
    width: width,
    height: '100%'
  },

  listBox:{
    width: width,
    backgroundColor: '#FFF',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },

  catalog:{
    width: '33.33%',
    height: 80,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },

  h4Title:{
    textAlign: 'left',
    marginTop: 40,
    marginLeft: 10,
    marginBottom: 16
  },
  zone:{
    width: (width / 2) - 2,
    height: 100,
    marginBottom: 4,
    paddingLeft: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },

  goodsList:{
    backgroundColor: '#f5f5f5'
  },
  goodsBox:{
    width: '50%',
    marginBottom: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  goods:{
    width: '100%',
    height: 280,
    overflow: 'hidden',
    borderRadius: 8,
    backgroundColor: '#FFF'
  },
  goodsImg:{
    width: '100%',
    height: 210
  },
  goodsPrice:{
    paddingHorizontal: 12,
    marginTop: 6,
    color: '#FF0000'
  },
  goodsTitle:{
    paddingHorizontal: 12,
    marginBottom: 20,
    marginTop: 6
  }
});

export default styles;
