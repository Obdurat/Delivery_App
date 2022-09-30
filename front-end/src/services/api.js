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

const updateOrderStatus = async (token, data, id) => {
  const res = await request(`/orders/${id}`, statusCode.OK, 'put', {
    body: data,
    headers: {
      Authorization: token,
    },
  });
  return res;
};

const adminRegister = async (token, data) => {
  const res = await request('/admin/manage', statusCode.CREATED, 'post', {
    body: data,
    headers: {
      Authorization: token,
    },
  });
  return res;
};

const createSale = async (token, data) => {
  const res = await request('/customer/checkout', statusCode.CREATED, 'post', {
    body: data,
    headers: {
      Authorization: token,
    },
  });
  return res;
};

const getSalesById = async (token) => {
  const res = await request('/customer/sales/', statusCode.OK, 'get', {
    headers: {
      Authorization: token,
    },
  });
  return res;
};

const getCustomerOrderById = async (token, id) => {
  const res = await request(`/customer/sales/${id}`, statusCode.OK, 'get', {
    headers: {
      Authorization: token,
    },
  });
  return res;
};

const getUsers = async (token) => {
  const res = await request('/admin/manage/users', statusCode.OK, 'get', {
    headers: {
      Authorization: token,
    },
  });
  return res;
};

const deleteUser = async (token, id) => {
  await request(`/admin/manage/users/${id}`, statusCode.OK, 'delete', {
    headers: {
      Authorization: token,
    },
  });
};

const ProviderApi = {
  login,
  register,
  getProducts,
  getSellerOrders,
  getOrderById,
  updateOrderStatus,
  adminRegister,
  createSale,
  getSalesById,
  getCustomerOrderById,
  getUsers,
  deleteUser,
};

export default ProviderApi;
