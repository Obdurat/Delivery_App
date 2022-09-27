import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import { useCart } from '../../context/CartProvider';
import ProductCard from './components/ProductCard';
import { useAuth } from '../../context/useAuth';

export default function Products() {
  const { products, total, setCartItems } = useCart();
  const navigate = useNavigate();
  const { user } = useAuth();

  const onClickCheckout = () => {
    setCartItems(products.filter(({ quantity }) => quantity > 0));
    navigate(`/${user.role}/checkout`);
  };

  return (
    <div>
      <Header />
      <div
        style={ {
          display: 'flex',
          flexWrap: 'wrap',
        } }
      >
        {
          products?.map((product) => (
            <ProductCard key={ product.id } product={ product } />
          ))
        }
      </div>
      <div>
        <button
          type="button"
          style={ { position: 'fixed', bottom: '0', right: '0' } }
          data-testid="customer_products__button-cart"
          disabled={ !total }
          onClick={ () => onClickCheckout() }
        >
          <span data-testid="customer_products__checkout-bottom-value">
            {String(total.toFixed(2))?.replace(/\./, ',')}
          </span>
        </button>
      </div>
    </div>
  );
}
