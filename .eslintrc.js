module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'prettier/prettier': 'off',

    // 停止校验行内样式
    'react-native/no-inline-styles': 'off',
    // 禁用拖尾逗号
    'comma-dangle': ['error', 'never']
  }
};
