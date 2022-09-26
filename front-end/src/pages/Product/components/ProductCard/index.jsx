import PropTypes from 'prop-types';
import React from 'react';
import { useCart } from '../../../../context/CartProvider';

export default function ProductCard({ product }) {
  const { id, name, price, urlImage, quantity } = product;

  const { addItemToCart, removeItemFromCart, editItemQuantity } = useCart();

  return (
    <div
      style={ {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        border: '1px solid black',
        width: '200px',
        padding: '2rem 0',
        margin: '10px',
      } }
    >
      <div data-testid={ `customer_products__element-card-price-${id}` }>
        {price?.replace(/\./, ',')}
      </div>
      <div data-testid={ `customer_products__element-card-title-${id}` }>{name}</div>
      <img
        style={ { width: '100px', height: '150px', objectFit: 'contain' } }
        src={ urlImage }
        alt={ name }
        data-testid={ `customer_products__img-card-bg-image-${id}` }
      />
      <div
        style={ {
          display: 'flex',
          gap: '10px',
        } }
      >
        <button
          type="button"
          onClick={ () => removeItemFromCart(product) }
          data-testid={ `customer_products__button-card-rm-item-${id}` }
        >
          -
        </button>
        <input
          type="number"
          onChange={ ({ target }) => editItemQuantity(product, target.value) }
          value={ quantity }
          data-testid={ `customer_products__input-card-quantity-${id}` }
        />
        <button
          type="button"
          onClick={ () => {
            addItemToCart(product);
            editItemQuantity(product, `${(quantity + 1)}`);
          } }
          data-testid={ `customer_products__button-card-add-item-${id}` }
        >
          +
        </button>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.string,
    urlImage: PropTypes.string,
    quantity: PropTypes.number,
  }).isRequired,
};
