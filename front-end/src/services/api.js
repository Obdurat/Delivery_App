import { statusCode } from '../utils/constants';
import request from './core';

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

const getProducts = async (token) => {
  const res = await request('/products', statusCode.OK, 'post', {
    headers: {
      Authorization: token,
    },
  });
  return res;
};

const getSellerOrders = async (token) => {
  const res = await request('/seller/orders', statusCode.OK, 'get', {
    headers: {
      Authorization: token,
    },
  });
  return res;
};

const getOrderById = async (token, id) => {
  const res = await request(`/seller/orders/${id}`, statusCode.OK, 'get', {
    headers: {
      Authorization: token,
    },
  });
  return res;
};

const ProviderApi = {
  login,
  register,
  getProducts,
  getSellerOrders,
  getOrderById,
};

export default ProviderApi;
