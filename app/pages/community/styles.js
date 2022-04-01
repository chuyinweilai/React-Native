import { StatusBar, StyleSheet, Dimensions } from 'react-native';

// 获取窗口的宽高,且可以在尺寸变化时自动更新
const { width } = Dimensions.get('window');

/**
 * 注意：
 * 1. 表示的是与设备像素密度无关的逻辑像素点
 */
const styles = StyleSheet.create({
  userName:{
    fontSize: 14
  },
  userIntro:{
    fontSize: 12,
    color: '#666'
  },
  content: {
    width: '100%',
    height: 330,
    display: 'flex',
    flexDirection: 'row'
  },
  mainPic:{
    flex: 1,
    height: '100%',
    backgroundColor: '#3399ff'
  },
  pic:{
    aspectRatio: 1,
    width: '100%',
    height:330,
    flex: 1,
    backgroundColor: '#3399ff'
  },
  context:{
    position: 'absolute',
    width: '100%',
    bottom: 0,
    left: 0,
    zIndex: 99,
    padding: 10,
    backgroundColor: 'rgba(255,255,255,.5)'
  },
  text:{
    color: '#FFF'
  },

  control:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  icon: {
    padding: 12
  }
});

export default styles;
