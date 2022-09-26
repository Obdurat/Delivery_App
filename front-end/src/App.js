import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { CartProvider } from './context/CartProvider';
import { AuthProvider } from './context/useAuth';
import Routes from './routes/index.routes';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
