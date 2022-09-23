import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/useAuth';

export default function Header({ desc }) {
  const { user, setUser } = useAuth();

  const navigate = useNavigate();

  return (
    <>
      <section
        data-testid="customer_products__element-navbar-link-orders"
      >
        {desc}
      </section>
      <section
        data-testid="customer_products__element-navbar-user-full-name"
      >
        {user.user.name}
      </section>
      <button
        data-testid="customer_products__element-navbar-link-logout"
        type="button"
        onClick={ () => {
          setUser({});
          navigate('/login');
        } }
      >
        Sair
      </button>
    </>
  );
}

Header.propTypes = {
  desc: PropTypes.string,
  username: PropTypes.string,
}.isRequired;
