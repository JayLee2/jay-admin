import axios from 'axios';
import { notification, Modal } from 'antd';
import config from '@/config/env';

axios.defaults.baseURL = config.apiDomain;
axios.defaults.withCredentials = true;

axios.interceptors.request.use(
  (config) => {
    //添加登陆token
    return config;
  },
  (error) => {
    //请求错误处理
    notification.error({
      message: `请求发出错误`,
    });
  },
);

axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    notification.error({
      message: `响应错误(${error.response.status})`,
      description: `${error.response.message || '服务器错误'}`,
    });
  },
);

export default axios;
