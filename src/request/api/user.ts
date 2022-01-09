import axios from '../index';

export const getUserInfoApi = ({ id }) => {
  return axios.get('/users');
};
