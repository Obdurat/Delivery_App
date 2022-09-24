import { statusCode } from '../utils/constants';
import request from './core';

const getSellerOrders = async (token) => {
  const res = await request('/seller/orders', statusCode.OK, 'get', {
    headers: {
      Authorization: token,
    },
  });
  return res;
};

const login = async (data) => {
  const res = await request('/login', statusCode.OK, 'post', {
    body: data,
  });
  return res;
};

const register = async (data) => {
  const res = await request('/register', statusCode.CREATED, 'post', {
    body: data,
  });
  return res;
};

const ProviderApi = {
  getSellerOrders,
  login,
  register,
};

export default ProviderApi;
