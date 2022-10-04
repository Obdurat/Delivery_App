import React from 'react';
import { screen, cleanup, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../App';

const EMAIL_ID = 'common_register__input-email';
const PASSWORD_ID = 'common_register__input-password';
const NAME_ID = 'common_register__input-name';
const REGISTER_BTN = 'common_login__button-register';
const REG_BTN = 'common_register__button-register';

describe('Register page tests', () => {
  beforeEach(() => render(<App />));

  afterEach(cleanup);

  it('Check screen elements', async () => {
    expect(screen.getByTestId(REGISTER_BTN)).toBeInTheDocument();
  });

  it('register success', async () => {
    const btn = screen.getByTestId(REGISTER_BTN);
    userEvent.click(btn);
    await waitFor(() => {
      const nameReg = screen.getByTestId(NAME_ID);
      const emailReg = screen.getByTestId(EMAIL_ID);
      const passwordReg = screen.getByTestId(PASSWORD_ID);
      const regBtn = screen.getByTestId(REG_BTN);

      userEvent.click(btn);
      expect(window.location.pathname).toBe('/register');
      userEvent.type(nameReg, 'Zezin do Interior');
      userEvent.type(emailReg, 'zezin@emasil.com');
      userEvent.type(passwordReg, 'fdasasdasaw');
      userEvent.click(regBtn);
      // expect(window.location.pathname).toBe('/customer/products');
    });
  });
});
