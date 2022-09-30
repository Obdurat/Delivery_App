import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import ProviderApi from '../../services/api';
import { useAuth } from '../../context/providers/useAuth';
import { statusCode } from '../../utils/constants';
import { saveUser, getFromLocalStorage } from '../../utils/localStorage';

const SIX = 6;
const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required().min(SIX).required('Required'),
});
export default function Login() {
  const { handleSubmit,
    register, formState: { isValid, errors, isDirty } } = useForm({
    mode: 'onChange',
    resolver: yupResolver(validationSchema),
  });

  const [errorEmail, setErrorEmail] = useState('');

  const { setUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const userValid = getFromLocalStorage('user');
    if (userValid) {
      (() => {
        setUser({ ...userValid });
        const { role } = userValid;
        const redirectOptions = {
          administrator: '/admin/manage',
          seller: '/seller/orders',
          customer: '/customer/products',
        };
        navigate(redirectOptions[role]);
      })();
    }
  }, [navigate, setUser]);

  const onSubmit = async (data) => {
    const res = await ProviderApi.login(data);

    if (res.code === statusCode.NOT_FOUND) {
      setErrorEmail('Usuário não existe');
    }

    if (res.success) {
      setUser({ ...res.data.user, token: res.data.token });
      const { role } = res.data.user;

      const redirectOptions = {
        administrator: '/admin/manage',
        seller: '/seller/orders',
        customer: '/customer/products',
      };

      saveUser({
        name: res.data.user.name,
        email: res.data.user.email,
        role,
        token: res.data.token,
      });

      navigate(redirectOptions[role]);
    }
  };

  return (
    <div>
      <form
        style={ {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '0 auto',
          width: '600px',
        } }
        onSubmit={ handleSubmit(onSubmit) }
      >
        <label htmlFor="email">
          Email
          <input
            { ...register('email') }
            data-testid="common_login__input-email"
          />
          {(errorEmail) && (
            <div data-testid="common_login__element-invalid-email">
              {errorEmail}
            </div>
          )}
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            { ...register('password') }
            data-testid="common_login__input-password"
          />
          {errors.password?.message && (
            <div data-testid="common_login__element-invalid-email">
              {errors.password.message}

            </div>
          )}
        </label>
        <button
          disabled={ !isDirty || !isValid }
          type="submit"
          data-testid="common_login__button-login"
        >
          Login
        </button>
        <button
          type="button"
          onClick={ () => navigate('/register') }
          data-testid="common_login__button-register"
        >
          Ainda não tenho conta
        </button>
      </form>
    </div>
  );
}
