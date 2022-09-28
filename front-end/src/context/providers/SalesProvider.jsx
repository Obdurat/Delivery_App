import PropTypes from 'prop-types';
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  useCallback,
} from 'react';
import ProviderApi from '../../services/api';
import { useAuth } from './useAuth';

export const SalesContext = createContext();

export function SalesProvider({ children }) {
  const [orders, setOrders] = useState([]);
  const [orderDetails, setOrderDetails] = useState({});
  const [orderId, setOrderId] = useState('');

  const { user } = useAuth();

  useEffect(() => {
    if (user.token) {
      (async () => {
        const allOrders = await ProviderApi.getSellerOrders(user.token);
        const orderById = await ProviderApi.getOrderById(user.token, orderId);
        if (allOrders.success) {
          setOrders(allOrders.data);
        }
        if (orderById.success) {
          setOrderDetails(orderById.data);
        }
      })();
    }
  }, [user, orderId]);

  const updateOrderStatus = useCallback(async (data, id) => {
    await ProviderApi.updateOrderStatus(user.token, data, id);
  }, [user]);

  const value = useMemo(() => ({
    orders,
    orderDetails,
    setOrderId,
    updateOrderStatus,
  }), [
    orders,
    orderDetails,
    setOrderId,
    updateOrderStatus,
  ]);

  return <SalesContext.Provider value={ value }>{children}</SalesContext.Provider>;
}

SalesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useSales = () => useContext(SalesContext);
