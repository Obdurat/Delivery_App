import React, { useEffect, useState } from 'react';
import { useAuth } from '../../context/useAuth';
import ProviderApi from '../../services/api';
import Header from '../components/Header';
import ProductCard from './components/ProductCard';

export default function Products() {
  const [products, setProducts] = useState([]);

  const { user } = useAuth();

  useEffect(() => {
    (async () => {
      const res = await ProviderApi.getProducts(user.token);
      setProducts(res.data);
      console.log(res);
    })();
  }, [user.token]);

  return (
    <div>
      <Header desc="Produtos" />
      {
        products?.map((product) => (
          <ProductCard key={ product.id } product={ product } />
        ))
      }
    </div>
  );
}
