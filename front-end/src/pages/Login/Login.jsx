import React from 'react';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

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

  const onSubmit = (data) => {
    console.log(data);
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
          {errors.email?.message && (
            <div data-testid="common_login__element-invalid-email">
              {errors.email.message}

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
        <button type="button" data-testid="common_login__button-register">
          Ainda não tenho conta
        </button>
      </form>
    </div>
  );
}
