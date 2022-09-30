import PropTypes from 'prop-types';
import React, {
  createContext,
  useContext,
  useMemo,
  useState,
  useEffect,
  useCallback,
} from 'react';
import ProviderApi from '../../services/api';
import { useAuth } from './useAuth';

const UserContext = createContext();

export function UserProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [delUser, setDelUser] = useState(true);
  const [userOrders, setUserOrders] = useState([]);
  const [orderId, setOrderId] = useState('');
  const [detailsOrder, setDetailsOrder] = useState({});
  const { user } = useAuth();

  useEffect(() => {
    if (user.token) {
      (async () => {
        const userRes = await ProviderApi.getUsers(user.token);
        const userOrderRes = await ProviderApi.getSalesById(user.token);
        const userOrderDetailsRes = await ProviderApi
          .getCustomerOrderById(user.token, orderId);
        if (userRes.success) {
          setUsers(userRes.data);
        }
        if (userOrderRes.success) {
          setUserOrders(userOrderRes.data);
        }
        if (userOrderDetailsRes.success) {
          setDetailsOrder(userOrderDetailsRes.data);
        }
      })();
    }
  }, [user, delUser, orderId]);

  const deleteUser = useCallback(async (id) => {
    await ProviderApi.deleteUser(user.token, id);
    setDelUser(!delUser);
  }, [delUser, user.token]);

  const findSeller = useCallback((sellerId) => (
    users.filter((item) => item.id === sellerId)
  ), [users]);

  const value = useMemo(() => (
    {
      users,
      deleteUser,
      userOrders,
      detailsOrder,
      setOrderId,
      findSeller,
    }), [
    users,
    deleteUser,
    userOrders,
    detailsOrder,
    setOrderId,
    findSeller,
  ]);
  console.log(detailsOrder);

  return <UserContext.Provider value={ value }>{children}</UserContext.Provider>;
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useUsers = () => useContext(UserContext);
