module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins:[
    [
      'module-resolver',
      {
        'root': ['./app'],
        'alias': {
          '@': './app',
          '@api': './app/api',
          '@assets': './app/assets'
        }
      }
    ]
  ]
};
