import axios from 'axios';

// const BASE_URL = process.env.VUE_APP_REQUEST_URL;

// 创建一个axios实例
const request = axios.create({

  // `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
  // 它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL
  baseURL: 'https://testminsoft.zhaidoudou.com',
  // `withCredentials` 表示跨域请求时是否需要使用凭证
  withCredentials: true
});
// 添加请求拦截器
request.interceptors.request.use((config) => {
  // 我们可以在这里对请求内容进行补充和检查
  // 例如，在头部添加用来校验身份的token
  // config.headers['token'] = token;
  // 并且针对用户登录状态的校验，当用户未登录时，进行拦截
  // if(!user.id)  throw new Error('用户未登录');
  return config;
},
(error) => {
  // 请求错误时做些事
  return Promise.reject(error);
});

// 添加响应拦截器
request.interceptors.response.use(({ data, status }) => {
  if (status === 200){
    // 如果成功则返回数据
    return data;
  }
  else {
    /* 针对其他状态进行操作 */
  return Promise.reject(data);
  }
},
(error) => {
  // 请求错误时做些事
  return Promise.reject(error);
});

export default request;
