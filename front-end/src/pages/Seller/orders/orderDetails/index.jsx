import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../../../../context/useAuth';
import ProviderApi from '../../../../services/api';
import Header from '../../../../components/Header';
import DetailsCard from '../components/DetailsCard';

export default function OrderDetails() {
  const [order, setOrder] = useState({});
  console.log('🚀 ~ file: index.jsx ~ line 11 ~ OrderDetails ~ order', order);

  const { id } = useParams();
  const { user } = useAuth();

  useEffect(() => {
    if (user.token) {
      (async () => {
        const { data, success } = await ProviderApi.getOrderById(user.token, id);
        if (success) {
          setOrder(data);
        }
      })();
    }
  }, [user, id]);

  return (
    <>
      <Header desc="Pedidos" />
      { order && <DetailsCard key={ order.id } details={ order } /> }
    </>
  );
}
