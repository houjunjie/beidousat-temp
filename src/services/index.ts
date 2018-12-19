import config from '@/utils/config';
import request from '@/utils/request'
import api from './api';

const { apiList } = api;
const { apiPrefix } = config;


export function queryList (params: any, method='get') {
  return request({
    url: `${apiPrefix}${apiList}`,
    method,
    data: params,
  })
}
