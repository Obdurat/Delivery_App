import PropTypes from 'prop-types';
import React from 'react';

export default function ProductCard({ product }) {
  const { id, name, price, urlImage } = product;
  return (
    <div>
      <div data-testid={ `customer_products__element-card-price-${id}` }>{price}</div>
      <div data-testid={ `customer_products__element-card-title-${id}` }>{name}</div>
      <img
        src={ urlImage }
        alt={ name }
        data-testid={ `customer_products__img-card-bg-image-${id}` }
      />

      <button
        type="button"
        data-testid={ `customer_products__button-card-add-${id}` }
      >
        +
      </button>

      <button
        type="button"
        data-testid={ `customer_products__button-card-rm-${id}` }
      >
        -
      </button>
      <div data-testid={ `customer_products__input-card-quantity-${id}` }>0</div>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.string,
    urlImage: PropTypes.string,
  }).isRequired,
};
