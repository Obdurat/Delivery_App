import React from 'react';
import { useSales } from '../../../context/providers/SalesProvider';
import OrderCard from './components/OrderCard';
import Header from '../../../components/Header';

export default function Seller() {
  const { orders } = useSales();

  return (
    <>
      <Header />
      {orders?.map((order) => (
        <OrderCard
          key={ order.id }
          order={ order }
        />
      ))}
    </>
  );
}
