import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react'; // https://react.semantic-ui.com/

export default function OrderCard({ order: {
  id,
  deliveryNumber,
  status,
  saleDate,
  totalPrice,
  deliveryAdress,
} }) {
  return (
    <Card.Group>
      <Card.Content
        description={ `Pedido ${deliveryNumber}` }
        data-testid={ `seller_orders__element-order-id-${id}` }
      />
      <Card.Content
        description={ status }
        data-testid={ `seller_orders__element-delivery-status-${id}` }
      />
      <Card.Content
        description={ saleDate }
        data-testid={ `seller_orders__element-order-date-${id}` }
      />
      <Card.Content
        description={ totalPrice }
        data-testid={ `seller_orders__element-card-price-${id}` }
      />
      <Card.Content
        description={ deliveryAdress }
        data-testid={ `seller_orders__element-card-address-${id}` }
      />
    </Card.Group>
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
