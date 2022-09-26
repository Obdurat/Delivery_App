import React from 'react';
import Header from '../../components/Header';
import { useCart } from '../../context/CartProvider';
import ProductCard from './components/ProductCard';

export default function Products() {
  const { products, total } = useCart();

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
        >
          {String(total)?.replace(/\./, ',')}
        </button>
      </div>
    </div>
  );
}
