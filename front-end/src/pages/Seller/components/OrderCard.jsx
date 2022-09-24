import React from 'react';
import PropTypes from 'prop-types';

export default function OrderCard({ order: {
  id,
  deliveryNumber,
  status,
  saleDate,
  totalPrice,
  deliveryAdress,
} }) {
  return (
    <>
      <div
        data-testid={ `seller_orders__element-order-id-${id}` }
      >
        { `Pedido ${deliveryNumber}` }
      </div>
      <div
        data-testid={ `seller_orders__element-delivery-status-${id}` }
      >
        { status }
      </div>
      <div
        data-testid={ `seller_orders__element-order-date-${id}` }
      >
        { saleDate }
      </div>
      <div
        data-testid={ `seller_orders__element-card-price-${id}` }
      >
        { totalPrice }
      </div>
      <div
        data-testid={ `seller_orders__element-card-address-${id}` }
      >
        { deliveryAdress }
      </div>
    </>
  );
}

OrderCard.propTypes = {
  id: PropTypes.number,
  deliveryNumber: PropTypes.string,
  status: PropTypes.string,
  saleDate: PropTypes.string,
  totalPrice: PropTypes.string,
  deliveryAddress: PropTypes.string,
}.isRequired;
