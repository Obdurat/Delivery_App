import PropTypes from 'prop-types';
import React, {
  createContext, useCallback,
  useContext, useEffect, useMemo, useState,
} from 'react';
import ProviderApi from '../services/api';
import { useAuth } from './useAuth';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const [total, setTotal] = useState(0);

  const { user } = useAuth();

  useEffect(() => {
    (async () => {
      const res = await ProviderApi.getProducts(user.token);
      setProducts(res.data?.map((product) => ({ ...product, quantity: 0 })));
    })();
  }, [user]);

  useEffect(() => {
    const totalValue = products?.reduce((acc, { price, quantity }) => {
      const priceNumber = Number(price.replace(',', '.'));
      return acc + (priceNumber * quantity);
    }, 0);
    setTotal(totalValue);
  }, [products]);

  const addItemToCart = useCallback((product) => {
    setProducts(
      products.map((p) => (p.id === product.id
        ? { ...product, quantity: p.quantity + 1 }
        : p)),
    );
  }, [products]);

  const removeItemFromCart = useCallback((product) => {
    if (product.quantity > 0) {
      setProducts(
        products.map((p) => (p.id === product.id
          ? { ...product, quantity: p.quantity - 1 }
          : p)),
      );
    }
  }, [products]);

  const editItemQuantity = useCallback((product, quantity) => {
    setProducts(
      products.map((p) => (p.id === product.id
        ? { ...product, quantity: +quantity }
        : p)),
    );
  }, [products]);

  const value = useMemo(() => ({
    products,
    total,
    setProducts,
    addItemToCart,
    removeItemFromCart,
    editItemQuantity,
    cartItems,
    setCartItems,
  }), [
    products,
    total,
    addItemToCart,
    removeItemFromCart,
    editItemQuantity,
    cartItems,
    setCartItems,
  ]);

  return <CartContext.Provider value={ value }>{children}</CartContext.Provider>;
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useCart = () => useContext(CartContext);
