import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { useSales } from '../../../../context/providers/SalesProvider';
import OrderProducts from './OrderProducts';

export default function DetailsCard({
  details: {
    id,
    status,
    saleDate,
    totalPrice,
    products,
  },
}) {
  const { updateOrderStatus } = useSales();

  const statusBtn = async ({ target }) => {
    await updateOrderStatus({ status: target.value }, id);
  };

  return (
    <div>
      <div
        data-testid="seller_order_details__element-order-details-label-order-id"
      >
        { id }
      </div>
      <div
        data-testid="seller_order_details__element-order-details-label-order-date"
      >
        { moment(saleDate).format('DD/MM/YYYY') }
      </div>
      <div
        data-testid="seller_order_details__element-order-details-label-delivery-status"
      >
        { status }
      </div>
      <button
        type="button"
        value="Preparando"
        data-testid="seller_order_details__button-preparing-check"
        onClick={ statusBtn }
        disabled={ status !== 'Pendente' }
      >
        Preparar Pedido
      </button>
      <button
        type="button"
        value="Em Trânsito"
        data-testid="seller_order_details__button-dispatch-check"
        onClick={ statusBtn }
        disabled={ status !== 'Preparando' }
      >
        Saiu para Entrega
      </button>
      <OrderProducts products={ products } />
      <div
        data-testid="seller_order_details__element-order-total-price"
      >
        {Number(totalPrice).toFixed(2).replace(/\./, ',')}
      </div>
    </div>
  );
}

DetailsCard.propTypes = {
  id: PropTypes.number,
  status: PropTypes.string,
  saleDate: PropTypes.string,
}.isRequired;
