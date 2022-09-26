import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import { useCart } from '../../context/CartProvider';
import ProductCard from './components/ProductCard';
import { useAuth } from '../../context/useAuth';

export default function Products() {
  const { products, total } = useCart();
  const navigate = useNavigate();
  const user = useAuth();

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
          data-testid="customer_products__checkout-bottom-value"
          disabled={ !total }
        >
          {String(total.toFixed(2))?.replace(/\./, ',')}
        </button>
      </div>
      <div>
        <button
          type="button"
          style={ { position: 'fixed', bottom: '0', right: '0' } }
          data-testid="customer_products__button-cart"
          disabled={ !total }
          onClick={ () => navigate(`/${user.role}/checkout`) }
        >
          {String(total.toFixed(2))?.replace(/\./, ',')}
        </button>
      </div>
    </div>
  );
}
