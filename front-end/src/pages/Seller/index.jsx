import React, { useEffect, useState } from 'react';
import OrderCard from './components/OrderCard';

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
      <h2 data-testid="customer_products__element-navbar-link-orders">Pedidos</h2>
      {orders.map((order) => (
        <OrderCard
          key={ order.id }
          order={ order }
        />
      ))}
    </>
  );
}
