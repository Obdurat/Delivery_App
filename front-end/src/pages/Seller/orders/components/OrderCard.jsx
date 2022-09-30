import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';

export default function OrderCard({ order: {
  id,
  deliveryNumber,
  status,
  saleDate,
  totalPrice,
  deliveryAdress,
} }) {
  const navigate = useNavigate();

  const redirect = () => {
    navigate(`/seller/orders/${id}`);
  };

  return (
    <div onClick={ redirect } aria-hidden="true">
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
        { moment(saleDate).format('DD/MM/YYYY') }
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
    </div>
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
