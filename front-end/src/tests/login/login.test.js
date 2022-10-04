import React from 'react';
import { screen, cleanup, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../App';
import { users } from '../mocks/loginMock';

const EMAIL_ID = 'common_login__input-email';
const PASSWORD_ID = 'common_login__input-password';
const LOGIN_BTN = 'common_login__button-login';
const REGISTER_BTN = 'common_login__button-register';
const linkOrders = 'customer_products__element-navbar-link-orders';
const linkProducts = 'customer_products__element-navbar-link-products';
const linkFullName = 'customer_products__element-navbar-user-full-name';
const linkLogout = 'customer_products__element-navbar-link-logout';

describe('Customer Login tests', () => {
  beforeEach(() => render(<App />));

  afterEach(cleanup);

  it('Check screen elements', async () => {
    expect(screen.getByTestId(EMAIL_ID)).toBeInTheDocument();
    expect(screen.getByTestId(PASSWORD_ID)).toBeInTheDocument();
    expect(screen.getByTestId(LOGIN_BTN)).toBeInTheDocument();
    expect(screen.getByTestId(REGISTER_BTN)).toBeInTheDocument();
  });

  it('login success', async () => {
    const emailLogin = screen.getByTestId(EMAIL_ID);
    const password = screen.getByTestId(PASSWORD_ID);
    const btn = screen.getByTestId(LOGIN_BTN);

    userEvent.type(emailLogin, users.customer.email);
    userEvent.type(password, users.customer.password);

    await waitFor(() => {
      userEvent.click(btn);
      expect(window.location.pathname).toBe('/customer/products');
      expect(screen.getByTestId(linkOrders)).toBeInTheDocument();
      expect(screen.getByTestId(linkProducts)).toBeInTheDocument();
      expect(screen.getByTestId(linkFullName)).toBeInTheDocument();
      expect(screen.getByTestId(linkLogout)).toBeInTheDocument();
      userEvent.click(screen.getByTestId(linkLogout));
      expect(window.location.pathname).toBe('/login');
    });
  });
});

// describe('Seller Login tests', () => {
//   beforeEach(() => render(<App />));

//   afterEach(cleanup);

//   it('login success', async () => {
//     const emailLogin = screen.getByTestId(EMAIL_ID);
//     const password = screen.getByTestId(PASSWORD_ID);
//     const btn = screen.getByTestId(LOGIN_BTN);

//     userEvent.type(emailLogin, users.seller.email);
//     userEvent.type(password, users.seller.password);

//     await waitFor(() => {
//       userEvent.click(btn);
//       expect(window.location.pathname).toBe('/seller/orders');
//       expect(screen.getByTestId(linkOrders)).toBeInTheDocument();
//       expect(screen.getByTestId(linkProducts)).toBeInTheDocument();
//       expect(screen.getByTestId(linkFullName)).toBeInTheDocument();
//       expect(screen.getByTestId(linkLogout)).toBeInTheDocument();
//       userEvent.click(screen.getByTestId(linkLogout));
//       expect(window.location.pathname).toBe('/login');
//     });
//   });
// });
