import React from 'react';
import { useRoutes } from 'react-router-dom';
import Products from '../pages/Customer';
import Checkout from '../pages/Customer/Checkout';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Seller from '../pages/Seller/orders';
import OrderDetails from '../pages/Seller/orders/orderDetails';
import PrivateRoute from './privateRoute';
import Admin from '../pages/Admin';

function Routes() {
  const routes = useRoutes([
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/',
      element: <PrivateRoute isAuthorized={ false } />,
    },
    {
      path: '/register',
      element: <Register />,
    },
    {
      path: '/seller/orders',
      element: <Seller />,
    },
    {
      path: '/customer/products',
      element: <Products />,
    },
    {
      path: '/customer/checkout',
      element: <Checkout />,
    },
    {
      path: '/seller/orders/:id',
      element: <OrderDetails />,
    },
    {
      path: '/admin/manage/',
      element: <Admin />,
    },
  ]);

  return routes;
}

export default Routes;
