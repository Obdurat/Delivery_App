/* eslint-disable max-len */
import React from 'react';
import { screen, cleanup, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../App';
import { users, administrator } from '../mocks/loginMock';
import { saveUser } from '../../utils/localStorage';
import allUsers from '../mocks/adminMock';

const EMAIL_ID = 'common_login__input-email';
const PASSWORD_ID = 'common_login__input-password';
const LOGIN_BTN = 'common_login__button-login';
const linkOrders = 'customer_products__element-navbar-link-orders';
const linkFullName = 'customer_products__element-navbar-user-full-name';
const linkLogout = 'customer_products__element-navbar-link-logout';

const ITEM_NUMBER = 'admin_manage__element-user-table-item-number-';
const USER_NAME = 'admin_manage__element-user-table-name-';
const USER_EMAIL = 'admin_manage__element-user-table-email-';
const USER_ROLE = 'admin_manage__element-user-table-role-';
const RM_USER_BTN = 'admin_manage__element-user-table-remove-';

describe('Customer page tests', () => {
  beforeEach(() => render(<App />));

  afterEach(cleanup);

  describe('Admin Login tests', () => {
    it('admin login success', async () => {
      saveUser(administrator);
      const emailLogin = screen.getByTestId(EMAIL_ID);
      const password = screen.getByTestId(PASSWORD_ID);
      const btn = screen.getByTestId(LOGIN_BTN);

      userEvent.type(emailLogin, users.administrator.email);
      userEvent.type(password, users.administrator.password);

      await waitFor(() => {
        userEvent.click(btn);
        expect(window.location.pathname).toBe('/admin/manage');
        expect(screen.getByTestId(linkOrders)).toBeInTheDocument();
        expect(screen.getByTestId(linkFullName)).toBeInTheDocument();
        expect(screen.getByTestId(linkLogout)).toBeInTheDocument();
        userEvent.click(screen.getByTestId(linkLogout));
        expect(window.location.pathname).toBe('/login');
      });
    });
  });

  it('check users list', async () => {
    saveUser(administrator);
    const emailLogin = screen.getByTestId(EMAIL_ID);
    const password = screen.getByTestId(PASSWORD_ID);
    const btn = screen.getByTestId(LOGIN_BTN);

    userEvent.type(emailLogin, users.administrator.email);
    userEvent.type(password, users.administrator.password);

    await waitFor(() => {
      userEvent.click(btn);
      const removeUser = screen.getByTestId(`${RM_USER_BTN}1`);
      allUsers.filter((elem) => elem.role !== 'administrator').forEach((_item, index) => {
        expect(screen.getByTestId(`${ITEM_NUMBER}${index}`)).toBeInTheDocument();
        expect(screen.getByTestId(`${USER_NAME}${index}`)).toBeInTheDocument();
        expect(screen.getByTestId(`${USER_EMAIL}${index}`)).toBeInTheDocument();
        expect(screen.getByTestId(`${USER_ROLE}${index}`)).toBeInTheDocument();
        expect(screen.getByTestId(`${RM_USER_BTN}${index}`)).toBeInTheDocument();
      });
      userEvent.click(removeUser);
      expect(screen.getByTestId(`${ITEM_NUMBER}1`)).not.toBeInTheDocument();
    });
    userEvent.click(screen.getByTestId(linkLogout));
  });
});
