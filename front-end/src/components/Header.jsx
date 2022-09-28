import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/providers/useAuth';

export default function Header() {
  const { user, setUser } = useAuth();

  const titles = {
    customer: 'Meus Pedidos',
    seller: 'Pedidos',
    administrator: 'Gerenciar usuários',
  };

  const navigate = useNavigate();

  return (
    <>
      <button
        type="button"
        data-testid="customer_products__element-navbar-link-orders"
      >
        {
          titles[user?.role]
        }
      </button>

      {
        user?.role === 'customer' && (
          <button
            type="button"
            data-testid="customer_products__element-navbar-link-products"
          >
            Produtos
          </button>
        )
      }
      <section
        data-testid="customer_products__element-navbar-user-full-name"
      >
        {user.name}
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
