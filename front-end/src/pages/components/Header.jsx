import React from 'react';
import PropTypes from 'prop-types';

export default function Header({ desc, username }) {
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
        {username}
      </section>
      <button
        data-testid="customer_products__element-navbar-link-logout"
        type="button"
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
