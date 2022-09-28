import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSales } from '../../../../context/providers/SalesProvider';
import Header from '../../../../components/Header';
import DetailsCard from '../components/DetailsCard';

export default function OrderDetails() {
  const { orderDetails, setOrderId } = useSales();
  const { id } = useParams();

  useEffect(() => {
    setOrderId(id);
  }, [setOrderId, id]);

  return (
    <>
      <Header />
      { orderDetails && <DetailsCard details={ orderDetails } /> }
    </>
  );
}
