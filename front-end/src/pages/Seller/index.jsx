import React, { useEffect, useState } from 'react';

const Seller = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
   // Checa usuario e envia requisição para a api
  }, [orders]);

  return (
    <>
      {orders.map()}
    </>
  );
};

export default Seller;
