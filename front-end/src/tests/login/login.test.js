import React from 'react';
import { screen, cleanup, render } from '@testing-library/react';
import App from '../../App';

const EMAIL_ID = 'common_login__input-email';
const PASSWORD_ID = 'common_login__input-password';
const LOGIN_BTN = 'common_login__button-login';
const REGISTER_BTN = 'common_login__button-register';

describe('Login page tests', () => {
  beforeEach(() => render(<App />));

  afterEach(cleanup);

  it('Check screen elements', async () => {
    expect(screen.getByTestId(EMAIL_ID)).toBeInTheDocument();
    expect(screen.getByTestId(PASSWORD_ID)).toBeInTheDocument();
    expect(screen.getByTestId(LOGIN_BTN)).toBeInTheDocument();
    expect(screen.getByTestId(REGISTER_BTN)).toBeInTheDocument();
  });
});
