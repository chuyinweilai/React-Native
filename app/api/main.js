// import {} from ''

// https://zdd.bearcore.cn/wx/v1/banner/list
import request from '@/utils/request';

export const GETBANNER = () => {
  return request({
      url: '/wx/v1/banner/list',
      method: 'get'
  });
};

export const GETMERCHANDISELIST = params => {
  return request({
      url: '/wx/v1/merchandise/page',
      method: 'get',
      params:params
  });
};
