/* eslint-disable max-len */
import React from 'react';
import { screen, cleanup, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../App';
import { users, customer } from '../mocks/loginMock';
import { saveUser } from '../../utils/localStorage';
import products from '../mocks/productsMock';
import { sales } from '../mocks/customerMock';

const EMAIL_ID = 'common_login__input-email';
const PASSWORD_ID = 'common_login__input-password';
const LOGIN_BTN = 'common_login__button-login';
const linkOrders = 'customer_products__element-navbar-link-orders';
const linkFullName = 'customer_products__element-navbar-user-full-name';
const linkLogout = 'customer_products__element-navbar-link-logout';
const linkProducts = 'customer_products__element-navbar-link-products';

const CART_BTN = 'customer_products__button-cart';
const CART_VALUE = 'customer_products__checkout-bottom-value';
const ORDER_ID = 'customer_orders__element-order-id-';
const STATUS = 'customer_orders__element-delivery-status-';
const DATE = 'customer_orders__element-order-date-';
const PRICE = 'customer_orders__element-card-price-id-';
const ORDER_ID_DETAILS = 'customer_order_details__element-order-details-label-order-id';
const SELLER_NAME = 'customer_order_details__element-order-details-label-seller-name';
const ORDER_DATE = 'customer_order_details__element-order-details-label-order-date';
const DELIVERY_STATUS = 'customer_order_details__element-order-details-label-delivery-status';
const DELIVERY_CHECK_BTN = 'customer_order_details__button-delivery-check';
const ORDER_TOTAL_PRICE = 'customer_order_details__element-order-total-price';

const CARD_PRICE = 'customer_products__element-card-price-';
const CARD_TITLE = 'customer_products__element-card-title-';
const BG_IMAGE = 'customer_products__img-card-bg-image-';
const RM_ITEM = 'customer_products__button-card-rm-item-';
const CARD_QUANTITY = 'customer_products__input-card-quantity-';
const ADD_ITEM = 'customer_products__button-card-add-item-';

const ITEM_NUMBER = 'customer_checkout__element-order-table-item-number-0';
const ITEM_NAME = 'customer_checkout__element-order-table-name-0';
const ITEM_QUANTITY = 'customer_checkout__element-order-table-quantity-0';
const ITEM_PRICE = 'customer_checkout__element-order-table-unit-price-0';
const CART_SUB_TOTAL = 'customer_checkout__element-order-table-sub-total-0';
const REMOVE_BTN = 'customer_checkout__element-order-table-remove-0';
const CART_TOTAL_PRICE = 'customer_checkout__element-order-total-price';
const SUBMIT_BTN = 'customer_checkout__button-submit-order';
const INPUT_ADDRESS = 'customer_checkout__input-address';
const INPUT_ADDRESS_NUMBER = 'customer_checkout__input-address-number';

describe('Customer page tests', () => {
  beforeEach(() => render(<App />));

  afterEach(cleanup);

  it('customer login success', async () => {
    saveUser(customer);
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
      expect(screen.getByTestId(CART_BTN)).toBeInTheDocument();
      expect(screen.getByTestId(CART_VALUE)).toBeInTheDocument();
      userEvent.click(screen.getByTestId(linkLogout));
      expect(window.location.pathname).toBe('/login');
    });
  });

  it('check products list', async () => {
    saveUser(customer);
    const emailLogin = screen.getByTestId(EMAIL_ID);
    const password = screen.getByTestId(PASSWORD_ID);
    const btn = screen.getByTestId(LOGIN_BTN);

    userEvent.type(emailLogin, users.customer.email);
    userEvent.type(password, users.customer.password);

    await waitFor(() => {
      userEvent.click(btn);
      products.forEach((_item, index) => {
        expect(screen.getByTestId(`${CARD_PRICE}${index + 1}`)).toBeInTheDocument();
        expect(screen.getByTestId(`${CARD_TITLE}${index + 1}`)).toBeInTheDocument();
        expect(screen.getByTestId(`${BG_IMAGE}${index + 1}`)).toBeInTheDocument();
        expect(screen.getByTestId(`${RM_ITEM}${index + 1}`)).toBeInTheDocument();
        expect(screen.getByTestId(`${CARD_QUANTITY}${index + 1}`)).toBeInTheDocument();
        expect(screen.getByTestId(`${ADD_ITEM}${index + 1}`)).toBeInTheDocument();
      });
    });
    userEvent.click(screen.getByTestId(linkLogout));
  });

  it('check orders list', async () => {
    saveUser(customer);
    const emailLogin = screen.getByTestId(EMAIL_ID);
    const password = screen.getByTestId(PASSWORD_ID);
    const btn = screen.getByTestId(LOGIN_BTN);

    userEvent.type(emailLogin, users.customer.email);
    userEvent.type(password, users.customer.password);

    await waitFor(() => {
      userEvent.click(btn);
      const ordersBtn = screen.getByTestId(linkOrders);
      userEvent.click(ordersBtn);
      sales.forEach(({ id }) => {
        expect(screen.getByTestId(`${ORDER_ID}${id}`)).toBeInTheDocument();
        expect(screen.getByTestId(`${STATUS}${id}`)).toBeInTheDocument();
        expect(screen.getByTestId(`${DATE}${id}`)).toBeInTheDocument();
        expect(screen.getByTestId(`${PRICE}${id}`)).toBeInTheDocument();
      });
    });
    userEvent.click(screen.getByTestId(linkLogout));
  });

  it('check order details', async () => {
    saveUser(customer);
    const emailLogin = screen.getByTestId(EMAIL_ID);
    const password = screen.getByTestId(PASSWORD_ID);
    const btn = screen.getByTestId(LOGIN_BTN);

    userEvent.type(emailLogin, users.customer.email);
    userEvent.type(password, users.customer.password);

    await waitFor(() => {
      userEvent.click(btn);
      const ordersBtn = screen.getByTestId(linkOrders);
      userEvent.click(ordersBtn);
      const orderLink = screen.getByTestId(`${ORDER_ID}${sales[0].id}`);
      userEvent.click(orderLink);
      expect(screen.getByTestId(ORDER_ID_DETAILS)).toBeInTheDocument();
      expect(screen.getByTestId(SELLER_NAME)).toBeInTheDocument();
      expect(screen.getByTestId(ORDER_DATE)).toBeInTheDocument();
      expect(screen.getByTestId(DELIVERY_STATUS)).toBeInTheDocument();
      expect(screen.getByTestId(DELIVERY_CHECK_BTN)).toBeInTheDocument();
      expect(screen.getByTestId(ORDER_TOTAL_PRICE)).toBeInTheDocument();
    });
    userEvent.click(screen.getByTestId(linkLogout));
  });

  it('test order CREATE/checkout', async () => {
    saveUser(customer);
    const emailLogin = screen.getByTestId(EMAIL_ID);
    const password = screen.getByTestId(PASSWORD_ID);
    const btn = screen.getByTestId(LOGIN_BTN);

    userEvent.type(emailLogin, users.customer.email);
    userEvent.type(password, users.customer.password);

    await waitFor(() => {
      userEvent.click(btn);
      const addBtn = screen.getByTestId(`${ADD_ITEM}1`);
      const removeCartItem = screen.getByTestId(`${RM_ITEM}1`);
      userEvent.click(addBtn);
      userEvent.click(addBtn);
      userEvent.click(removeCartItem);
      const checkoutBtn = screen.getByTestId(CART_BTN);
      userEvent.click(checkoutBtn);
      const input1 = screen.getByTestId(INPUT_ADDRESS);
      const input2 = screen.getByTestId(INPUT_ADDRESS_NUMBER);
      const rmBtn = screen.getByTestId(REMOVE_BTN);
      expect(screen.getByTestId(ITEM_NUMBER)).toBeInTheDocument();
      expect(screen.getByTestId(ITEM_NAME)).toBeInTheDocument();
      expect(screen.getByTestId(ITEM_QUANTITY)).toBeInTheDocument();
      expect(screen.getByTestId(ITEM_PRICE)).toBeInTheDocument();
      expect(screen.getByTestId(CART_SUB_TOTAL)).toBeInTheDocument();
      expect(rmBtn).toBeInTheDocument();
      expect(screen.getByTestId(CART_TOTAL_PRICE)).toBeInTheDocument();
      expect(screen.getByTestId(SUBMIT_BTN)).toBeInTheDocument();
      userEvent.click(rmBtn);
      expect(rmBtn).not.toBeInTheDocument();
      userEvent.type(input1, 'street secret');
      userEvent.type(input2, '66');
      const submitBtn = screen.getByTestId(SUBMIT_BTN);
      userEvent.click(submitBtn);
      // expect(window.location.pathname).toBe('customer/orders/');
    });
    userEvent.click(screen.getByTestId(linkLogout));
  });
});
