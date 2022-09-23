import React, { useEffect, useState } from 'react';
import OrderCard from './components/OrderCard';
import Header from '../components/Header';

export default function Seller() {
  const [orders] = useState([{
    id: 1,
    userId: 1,
    sellerId: 2,
    totalPrice: '2.20',
    deliveryAdress: 'street',
    deliveryNumber: '12345',
    saleDate: '2001-08-01T00:00:00.000Z',
    status: 'true',
  }]);

  useEffect(() => {
    // Checa usuario e envia requisição para a api
  }, [orders]);

  return (
    <>
      <Header
        desc="Pedidos"
        username="fulano"
      />
      {orders.map((order) => (
        <OrderCard
          key={ order.id }
          order={ order }
        />
      ))}
    </>
  );
}
