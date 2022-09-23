import React from 'react';
import { useRoutes } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
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
  ]);

  return routes;
}

export default Routes;
