import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useAuth } from '../../context/providers/useAuth';
import ProviderApi from '../../services/api';
import Header from '../../components/Header';
import UsersList from './components/UsersList';
import { useUsers } from '../../context/providers/UserProvider';

const SIX = 6;

const validationSchema = Yup.object().shape({
  name: Yup.string().min(SIX * 2).required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required().min(SIX).required('Required'),
  role: Yup.string().oneOf(['administrator', 'seller', 'customer']),
});

export default function Manage() {
  const roles = ['seller', 'customer', 'administrator'];
  const { user } = useAuth();
  const { setRefresh } = useUsers();

  const { handleSubmit,
    register, formState: {
      isValid,
      isDirty },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data) => {
    const res = await ProviderApi.adminRegister(user.token, data);
    if (!res.success) {
      setError(res.data.message);
    } else {
      setStatus(res.success);
    }
  };

  return (
    <div>
      <Header />
      <div
        data-testid="admin_manage__element-invalid-register"
        style={ { visibility: (!isValid ? 'hidden' : 'visible') } }
      >
        Registro Invalido
      </div>
      <form onSubmit={ handleSubmit(onSubmit) }>
        <label htmlFor="name">
          Name
          <input
            { ...register('name') }
            data-testid="admin_manage__input-name"
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            { ...register('email') }
            data-testid="admin_manage__input-email"
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            { ...register('password') }
            data-testid="admin_manage__input-password"
          />
        </label>
        <label htmlFor="role">
          Tipo
          <select
            { ...register('role') }
            data-testid="admin_manage__select-role"
          >
            {roles.map((role) => (
              <option value={ role } key={ Math.random() }>
                {role}
              </option>
            ))}
          </select>
        </label>
        <button
          type="submit"
          disabled={ !isDirty || !isValid }
          data-testid="admin_manage__button-register"
          onClick={ () => setRefresh(true) }
        >
          register
        </button>
      </form>
      <section>
        <h4>Lista de usuários</h4>
        <UsersList />
      </section>
    </div>
  );
}
