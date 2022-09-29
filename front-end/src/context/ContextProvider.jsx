import React from 'react';
import { CartProvider } from './providers/CartProvider';
import { SalesProvider } from './providers/SalesProvider';
import { AuthProvider } from './providers/useAuth';
import { UserProvider } from './providers/UserProvider';

const providers = [AuthProvider, CartProvider, SalesProvider, UserProvider];
export default function ContextProvider({ children }) {
  return providers.reduceRight((acc, CurrComponent) => (
    <CurrComponent>{acc}</CurrComponent>
  ), children);
}
