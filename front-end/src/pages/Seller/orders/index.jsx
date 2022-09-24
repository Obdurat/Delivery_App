import React, { useEffect, useState } from 'react';
import OrderCard from './components/OrderCard';
import Header from '../../../components/Header';
import { useAuth } from '../../../context/useAuth';
import ProviderApi from '../../../services/api';

export default function Seller() {
  const [orders, setOrders] = useState([]);

  const { user } = useAuth();

  useEffect(() => {
    if (user.token) {
      (async () => {
        const { data, success} = await ProviderApi.getSellerOrders(user.token);
        if (success) {
          setOrders(data);
        }
      })();
    }
  }, [user]);

  return (
    <>
      <Header
        desc="Pedidos"
      />
      {orders?.map((order) => (
        <OrderCard
          key={ order.id }
          order={ order }
        />
      ))}
    </>
  );
}
