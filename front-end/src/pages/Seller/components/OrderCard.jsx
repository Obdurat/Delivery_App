import React from 'react';
import { Card } from "semantic-ui-react"; // https://react.semantic-ui.com/

const OrderCard = ({ order: {
  id,
  deliveryNumber,
  status,
  saleDate,
  totalPrice,
  deliveryAdress,
} }) => {
  return (
    <Card href='#'>
      <Card.Content header={`Pedido ${deliveryNumber}`} data-testid={`seller_orders__element-order-id-${id}`} />
      <Card.Content header={status} data-testid={`seller_orders__element-delivery-status-${id}`} />
      <Card.Content header={saleDate} data-testid={`seller_orders__element-order-date-${id}`} />
      <Card.Content header={totalPrice} data-testid={`seller_orders__element-card-price-${id}`} />
      <Card.Content header={deliveryAdress} data-testid={`seller_orders__element-card-address-${id}`} />
    </Card>
  );
};

export default OrderCard;
