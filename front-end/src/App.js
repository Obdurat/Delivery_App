import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { CartProvider } from './context/CartProvider';
import { SalesProvider } from './context/SalesProvider';
import { AuthProvider } from './context/useAuth';
import Routes from './routes/index.routes';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <SalesProvider>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </SalesProvider>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
