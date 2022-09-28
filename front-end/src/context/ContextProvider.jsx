import React from 'react';
import { CartProvider } from './providers/CartProvider';
import { SalesProvider } from './providers/SalesProvider';
import { AuthProvider } from './providers/useAuth';

const providers = [AuthProvider, CartProvider, SalesProvider];
export default function ContextProvider({ children }) {
  return providers.reduceRight((acc, CurrComponent) => (
    <CurrComponent>{acc}</CurrComponent>
  ), children);
}
