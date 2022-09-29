import React from 'react';
import PropTypes from 'prop-types';

export default function CardOrder({ order: { id, status, saleDate, totalPrice } }) {
  return (
    <div>
      <p data-testid={ `customer_orders__element-order-id-${id}` }>{id}</p>
      <p data-testid={ `customer_orders__element-delivery-status-${id}` }>{status}</p>
      <p data-testid={ `customer_orders__element-order-date-${id}` }>{saleDate}</p>
      <p data-testid={ `customer_orders__element-card-price-id-${id}` }>{totalPrice}</p>
    </div>
  );
}

CardOrder.propTypes = {
  id: PropTypes.number,
  status: PropTypes.string,
  saleDate: PropTypes.string,
  totalPrice: PropTypes.string,
}.isRequired;
