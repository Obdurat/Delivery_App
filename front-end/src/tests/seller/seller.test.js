/* eslint-disable max-len */
import React from 'react';
import { screen, cleanup, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../App';
import { seller, users } from '../mocks/loginMock';
import { saveUser } from '../../utils/localStorage';
import { orders } from '../mocks/sellerMock';

const EMAIL_ID = 'common_login__input-email';
const PASSWORD_ID = 'common_login__input-password';
const LOGIN_BTN = 'common_login__button-login';
const linkOrders = 'customer_products__element-navbar-link-orders';
const linkFullName = 'customer_products__element-navbar-user-full-name';
const linkLogout = 'customer_products__element-navbar-link-logout';

const ORDER_ID = 'seller_orders__element-order-id-';
const STATUS = 'seller_orders__element-delivery-status-';
const DATE = 'seller_orders__element-order-date-';
const PRICE = 'seller_orders__element-card-price-';
const ADDRESS = 'seller_orders__element-card-address-';
const ORDER_ID_DETAILS = 'seller_order_details__element-order-details-label-order-id';
const ORDER_STATUS_BTN = 'seller_order_details__button-preparing-check';
// const DELIVERY_STATUS = 'seller_order_details__element-order-details-label-delivery-status';

describe('Seller page tests', () => {
  beforeEach(() => render(<App />));

  afterEach(cleanup);

  it('seller login success', async () => {
    saveUser(seller);
    const emailLogin = screen.getByTestId(EMAIL_ID);
    const password = screen.getByTestId(PASSWORD_ID);
    const btn = screen.getByTestId(LOGIN_BTN);

    userEvent.type(emailLogin, users.seller.email);
    userEvent.type(password, users.seller.password);

    await waitFor(() => {
      userEvent.click(btn);
      expect(window.location.pathname).toBe('/seller/orders');
      expect(screen.getByTestId(linkOrders)).toBeInTheDocument();
      expect(screen.getByTestId(linkFullName)).toBeInTheDocument();
      expect(screen.getByTestId(linkLogout)).toBeInTheDocument();
      userEvent.click(screen.getByTestId(linkLogout));
      expect(window.location.pathname).toBe('/login');
    });
  });

  it('check orders list', async () => {
    saveUser(seller);
    const emailLogin = screen.getByTestId(EMAIL_ID);
    const password = screen.getByTestId(PASSWORD_ID);
    const btn = screen.getByTestId(LOGIN_BTN);

    userEvent.type(emailLogin, users.seller.email);
    userEvent.type(password, users.seller.password);

    await waitFor(() => {
      userEvent.click(btn);
      orders.forEach(({ id }) => {
        expect(screen.getByTestId(`${ORDER_ID}${id}`)).toBeInTheDocument();
        expect(screen.getByTestId(`${STATUS}${id}`)).toBeInTheDocument();
        expect(screen.getByTestId(`${DATE}${id}`)).toBeInTheDocument();
        expect(screen.getByTestId(`${PRICE}${id}`)).toBeInTheDocument();
        expect(screen.getByTestId(`${ADDRESS}${id}`)).toBeInTheDocument();
      });
      userEvent.click(screen.getByTestId(linkLogout));
    });
  });

  it('check order details', async () => {
    saveUser(seller);
    const emailLogin = screen.getByTestId(EMAIL_ID);
    const password = screen.getByTestId(PASSWORD_ID);
    const btn = screen.getByTestId(LOGIN_BTN);

    userEvent.type(emailLogin, users.seller.email);
    userEvent.type(password, users.seller.password);

    await waitFor(() => {
      userEvent.click(btn);
      const orderLink = screen.getByTestId(`${ORDER_ID}${orders[0].id}`);
      userEvent.click(orderLink);
      expect(screen.getByTestId(ORDER_ID_DETAILS)).toBeInTheDocument();
      expect(screen.getByTestId(ORDER_STATUS_BTN)).toBeInTheDocument();
      // const statusBtn = screen.getByTestId(ORDER_STATUS_BTN);
      // userEvent.click(statusBtn);
      // const deliveryStatus = screen.getByTestId(DELIVERY_STATUS);
      // expect(deliveryStatus).toHaveTextContent('Preparando');
    });
  });
});
