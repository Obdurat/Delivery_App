import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

export default function CardOrder({ order: { id, status, saleDate, totalPrice } }) {
  const navigate = useNavigate();

  const date = new Date(saleDate);

  const makeDt = (data) => `${data.getDate()}/${(data.getMonth() + 1).toString()
    .padStart(2, '0')}/${data.getFullYear()} `;

  const redirect = () => {
    navigate(`/customer/orders/${id}`);
  };
  return (
    <div onClick={ redirect } aria-hidden="true">
      <p data-testid={ `customer_orders__element-order-id-${id}` }>{id}</p>
      <p data-testid={ `customer_orders__element-delivery-status-${id}` }>{status}</p>
      <p data-testid={ `customer_orders__element-order-date-${id}` }>{makeDt(date)}</p>
      <p data-testid={ `customer_orders__element-card-price-id-${id}` }>
        {totalPrice.replace(/\./, ',')}
      </p>
    </div>
  );
}

CardOrder.propTypes = {
  id: PropTypes.number,
  status: PropTypes.string,
  saleDate: PropTypes.string,
  totalPrice: PropTypes.string,
}.isRequired;
