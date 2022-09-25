import React from 'react';
import { useRoutes } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Products from '../pages/Products';
import Register from '../pages/Register/Register';
import Seller from '../pages/Seller';
import PrivateRoute from './privateRoute';

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
  ]);

  return routes;
}

export default Routes;
