import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useSales, SalesContext } from '../../../../context/providers/SalesProvider';
import Header from '../../../../components/Header';
import DetailsCard from '../components/DetailsCard';

export default function OrderDetails() {
  const { orderDetails } = useSales();
  const salesContext = useContext(SalesContext);
  const { id } = useParams();
  salesContext.setOrderId(id);

  return (
    <>
      <Header />
      { orderDetails && <DetailsCard details={ orderDetails } /> }
    </>
  );
}
