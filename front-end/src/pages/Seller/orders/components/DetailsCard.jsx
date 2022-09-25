import React from 'react';
import PropTypes from 'prop-types';

export default function DetailsCard({
  details: {
    id,
    deliveryNumber,
    status,
    saleDate,
  },
}) {
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
      {/* <div
        data-testid={ 'seller_order_details__button-preparing-check' }
      >
      </div>
      <div
        data-testid={ 'seller_order_details__element-order-table-item-number-<index>' }
      >
      </div>
      <div
        data-testid={ 'seller_order_details__element-order-table-name-<index>' }
      >
      </div>
      <div
        data-testid={ 'seller_order_details__element-order-table-quantity-<index>' }
      >
      </div>
      <div
        data-testid={ 'seller_order_details__element-order-table-unit-price-<index>' }
      >
      </div>
      <div
        data-testid={ 'seller_order_details__element-order-table-sub-total-<index>' }
      >
      </div>
      <div
        data-testid={ 'seller_order_details__element-order-total-price' }
      >
      </div> */}
    </div>
  );
}

DetailsCard.propTypes = {
  id: PropTypes.number,
  deliveryNumber: PropTypes.string,
  status: PropTypes.string,
  saleDate: PropTypes.string,
}.isRequired;
