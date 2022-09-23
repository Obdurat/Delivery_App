import { statusCode } from '../utils/constants';
import request from './core';

const reqSellerOrders = async (token) => {
  const { data } = await request('/seller/orders', statusCode.OK, 'get', {
    headers: {
      Authorization: token,
    },
  });

  return data;
};

export default {
  reqSellerOrders,
};
