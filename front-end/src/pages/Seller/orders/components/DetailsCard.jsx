import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSales } from '../../../../context/providers/SalesProvider';
import OrderProducts from './OrderProducts';

export default function DetailsCard({
  details: {
    id,
    deliveryNumber,
    status,
    saleDate,
    totalPrice,
    products,
  },
}) {
  const [isPending, setPending] = useState(true);
  const { updateOrderStatus } = useSales();

  useEffect(() => {
    if (status === 'Pendente') {
      (() => {
        setPending(false);
      })();
    }
  }, [isPending]);

  const prepareBtn = () => {
    updateOrderStatus({ status: 'Preparando' }, id);
    setPending(true);
  }

  return (
    <div>
      <div
        data-testid={ `seller_order_details__element-order-details-label-order-${id}` }
      >
        { `Pedido ${deliveryNumber}` }
      </div>
      <div
        data-testid="seller_order_details__element-order-details-label-order-date"
      >
        { saleDate }
      </div>
      <div
        data-testid="seller_order_details__element-order-details-label-delivery-status"
      >
        { status }
      </div>
      <button
        data-testid="seller_order_details__button-preparing-check"
        onClick={ () => prepareBtn() }
        disabled={ isPending }
      >
        Preparar Pedido
      </button>
      <button
        data-testid="seller_order_details__button-dispatch-check"
      >
        Saiu para Entrega
      </button>
      <OrderProducts products={ products } />
      <div
        data-testid="seller_order_details__element-order-total-price"
      >
        {Number(totalPrice).toFixed(2)}
      </div>
    </div>
  );
}

DetailsCard.propTypes = {
  id: PropTypes.number,
  deliveryNumber: PropTypes.string,
  status: PropTypes.string,
  saleDate: PropTypes.string,
}.isRequired;
