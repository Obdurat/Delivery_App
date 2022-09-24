import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function OrderDetails() {
  const [order, setOrder] = useState({});

  const { id } = useParams();
  const { user } = useAuth();

  useEffect(() => {
    if (user.token) {
      (async () => {
        const res = await ProviderApi.getSellerOrders(id);
        if (res.success) {
          setOrder(res.data);
        }
      })();
    }
  }, [user, id]);

  return (
    <>
    </>
  );
};
