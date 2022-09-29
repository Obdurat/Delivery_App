import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import Header from '../../../components/Header';
import { useSales } from '../../../context/providers/SalesProvider';
import { useUsers } from '../../../context/providers/UserProvider';
import OrderProducts from '../../Seller/orders/components/OrderProducts';

export default function CustomerOrderDetails() {
  const { findSeller, detailsOrder, setOrderId } = useUsers();
  const { updateOrderStatus } = useSales();
  const { id } = useParams();

  const {
    sellerId,
    status,
    saleDate,
    totalPrice,
    products,
  } = detailsOrder;

  useEffect(() => {
    setOrderId(id);
  }, [setOrderId, id]);

  const statusBtn = async ({ target }) => {
    await updateOrderStatus({ status: target.value }, id);
  };

  return (
    <>
      <Header />
      { detailsOrder
      && (
        <div>
          <div
            data-testid="customer_order_details__element-order-details-label-order-id"
          >
            { id }
          </div>
          <div
            data-testid="customer_order_details__element-order-details-label-seller-name"
          >
            { findSeller(sellerId)[0].name }
          </div>
          <div
            data-testid="customer_order_details__element-order-details-label-order-date"
          >
            { moment(saleDate).format('DD/MM/YYYY') }
          </div>
          <div
            data-testid="customer_order_details__
              element-order-details-label-delivery-status"
          >
            { status }
          </div>
          <button
            type="button"
            value="Preparando"
            data-testid="customer_order_details__button-preparing-check"
            onClick={ statusBtn }
            disabled={ status !== 'Pendente' }
          >
            Preparar Pedido
          </button>
          <button
            type="button"
            value="Em Trânsito"
            data-testid="customer_order_details__button-dispatch-check"
            onClick={ statusBtn }
            disabled={ status !== 'Preparando' }
          >
            Saiu para Entrega
          </button>
          <OrderProducts products={ products } />
          <div
            data-testid="customer_order_details__element-order-total-price"
          >
            {Number(totalPrice).toFixed(2).replace(/\./, ',')}
          </div>
        </div>
      )}
    </>
  );
}
