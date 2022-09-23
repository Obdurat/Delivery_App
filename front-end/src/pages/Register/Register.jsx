import React from 'react';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import ProviderApi from '../../services/api';

const SIX = 6;

const validationSchema = Yup.object().shape({
  name: Yup.string().min(SIX * 2).required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required().min(SIX).required('Required'),
});
export default function Register() {
  const { handleSubmit,
    register, formState: {
      isValid,
      errors,
      isDirty },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(validationSchema),
  });

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const res = await ProviderApi.register(data);
    console.log(res);
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
        <label htmlFor="name">
          Name
          <input
            { ...register('name') }
            data-testid="common_register__input-name"
          />
          {errors.name?.message && (
            <div data-testid="common_register__element-invalid-name">
              {errors.name.message}

            </div>
          )}
        </label>
        <label htmlFor="email">
          Email
          <input
            { ...register('email') }
            data-testid="common_register__input-email"
          />
          {errors.email?.message && (
            <div data-testid="common_register__element-invalid-email">
              {errors.email.message}

            </div>
          )}
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            { ...register('password') }
            data-testid="common_register__input-password"
          />
          {errors.password?.message && (
            <div data-testid="common_register__element-invalid-email">
              {errors.password.message}
            </div>
          )}
        </label>
        <button
          disabled={ !isDirty || !isValid }
          type="submit"
          data-testid="common_register__button-register"
        >
          register
        </button>
        <button type="button" onClick={ () => navigate('/login') }>
          ja tenho conta
        </button>
      </form>
    </div>
  );
}
