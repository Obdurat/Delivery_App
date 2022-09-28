import React from 'react';
import { CartProvider } from './CartProvider';
import { SalesProvider } from './SalesProvider';
import { AuthProvider } from './useAuth';

const providers = [AuthProvider, CartProvider, SalesProvider];

const CombineProviders = ({ children }) => providers
  .reduce((AccComponents, CurrComponent) => (
    <AccComponents>
      <CurrComponent>{children}</CurrComponent>
    </AccComponents>
  ));

const ContextProvider = CombineProviders();

export default ContextProvider;
