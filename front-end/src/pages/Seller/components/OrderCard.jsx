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
    <Card>
      <Card.Content
        header={ `Pedido ${deliveryNumber}` }
        data-testid={ `seller_orders__element-order-id-${id}` }
      />
      <Card.Content
        header={ status }
        data-testid={ `seller_orders__element-delivery-status-${id}` }
      />
      <Card.Content
        header={ saleDate }
        data-testid={ `seller_orders__element-order-date-${id}` }
      />
      <Card.Content
        header={ totalPrice }
        data-testid={ `seller_orders__element-card-price-${id}` }
      />
      <Card.Content
        header={ deliveryAdress }
        data-testid={ `seller_orders__element-card-address-${id}` }
      />
    </Card>
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
