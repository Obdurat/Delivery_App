import axios from 'axios';

const URL = 'http://localhost:3001';

const reqSellerOrders = async () => {
  try {
    const { data } = await axios.get(`${URL}/seller/orders`);
    return data;
  } catch (err) {
    console.error(err);
  }
};

export default {
  reqSellerOrders,
};
