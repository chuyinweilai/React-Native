import { StyleSheet, Dimensions} from 'react-native';

// 获取窗口的宽高,且可以在尺寸变化时自动更新
const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container:{
    width: width,
    height: height,
    overflowY: 'scroll',
    overflowX: 'hidden',
    position: 'relative'
  },
  content:{
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#FFF'
  },
  bottomBox:{
    position:'absolute',
    bottom: 20,
    left: 0,
    width: width,
    height: 50,
    backgroundColor: '#f5f5f5',

    display: 'flex',
    flexDirection: 'row'
  },
  bottomTab:{
    width: '100%',
    height: '100%',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems:'center',
    color: '#000'
  }
});

export default styles;
