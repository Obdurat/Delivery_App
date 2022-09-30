import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import Header from '../../../components/Header';
import { useSales } from '../../../context/providers/SalesProvider';
import { useUsers } from '../../../context/providers/UserProvider';
import OrderProducts from '../../Seller/orders/components/OrderProducts';

export default function CustomerOrderDetails() {
  const { findSeller, detailsOrder, setOrderId } = useUsers();
  const { updateOrderStatus } = useSales();
  const { id } = useParams();
  const prefix = 'customer_order_details__element';

  const {
    sellerId,
    status,
    saleDate,
    totalPrice,
    products,
  } = detailsOrder;

  useEffect(() => {
    setOrderId(id);
  }, [setOrderId, id]);

  const statusBtn = async ({ target }) => {
    await updateOrderStatus({ status: target.value }, id);
  };

  return (
    <>
      <Header />
      { status
      && (
        <div>
          <div
            data-testid={ `${prefix}-order-details-label-order-id` }
          >
            { id }
          </div>
          <div
            data-testid={ `${prefix}-order-details-label-seller-name` }
          >
            { findSeller(sellerId)[0].name }
          </div>
          <div
            data-testid={ `${prefix}-order-details-label-order-date` }
          >
            { moment(saleDate).format('DD/MM/YYYY') }
          </div>
          <div
            data-testid={ `${prefix}-order-details-label-delivery-status` }
          >
            { status }
          </div>
          <button
            type="button"
            value="Entregue"
            data-testid="customer_order_details__button-delivery-check"
            onClick={ statusBtn }
            disabled={ status !== 'Em Trânsito' }
          >
            Marcar como entregue
          </button>
          <OrderProducts products={ products } />
          <div
            data-testid={ `${prefix}-order-total-price` }
          >
            {totalPrice.replace(/\./, ',')}
          </div>
        </div>
      )}
    </>
  );
}
