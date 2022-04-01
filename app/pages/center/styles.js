import { StatusBar, StyleSheet, Dimensions } from 'react-native';

// 获取窗口的宽高,且可以在尺寸变化时自动更新
const { width } = Dimensions.get('window');

/**
 * 注意：
 * 1. 表示的是与设备像素密度无关的逻辑像素点
 */
const styles = StyleSheet.create({
  container:{
    width: '100%',
    height: '100%',
    backgroundColor: '#F5F5F5'
  },
  settingBox:{
    width:'100%',
    paddingVertical: 10,
    paddingRight: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    backgroundColor: '#FFF'

  },
  headerBox:{
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 4
  },
  headerIcon:{
    marginRight: 40
  },
  headerMess:{
    flex: 1
  },
  headerTopList:{
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  headerTop:{
  },
  headerTopTitle:{
    fontSize: 16,
    textAlign: 'center'
  },
  headerTopSubtitle:{
    fontSize: 12,
    textAlign: 'center'
  },
  editMessBtn:{
    width: '100%',
    textAlign: 'center',
    paddingVertical: 4,
    margin: 0,
    borderWidth: 1,
    borderColor: '#333'
  },
  userMessage:{
    width: '100%',
    paddingTop: 20
  },
  userName:{
    fontSize: 18,
    marginBottom: 2
  },
  userIntro:{
    fontSize: 12,
    color: '#aaa'
  },

  orderBox:{
    marginTop: 10,
    backgroundColor: '#FFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 4
  },
  orderTitle:{
    marginBottom: 10,
    fontSize: 16,
    fontWeight: 'bold'
  },
  orderList:{
    width: '100%',
    display: 'flex',
    marginTop: 14,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  orderItem:{
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  orderText:{
    fontSize: 12,
    marginTop: 6,
    fontWeight: 'bold'
  }
});

export default styles;
