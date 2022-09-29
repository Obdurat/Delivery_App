import React, { useEffect } from 'react';
import Header from '../../../components/Header';
// import { useSales } from '../../../context/providers/SalesProvider';
import { useUsers } from '../../../context/providers/UserProvider';

export default function CustomerOrderDetails() {
  const { detailsOrders, setOrderId } = useUsers();
  // const { updateOrderStatus } = useSales();

  // const seller = users.filter((item) => item.id === detailsOrders.sellerId);

  useEffect(() => {
    if (detailsOrders?.id) {
      setOrderId(detailsOrders.id);
    }
  }, [setOrderId, detailsOrders]);

  // const statusBtn = async ({ target }) => {
  //   await updateOrderStatus({ status: target.value }, detailsOrders.id);
  // };

  // const prefix = 'customer_order_details__element';

  return (
    <>
      <Header />
      <p>{detailsOrders}</p>
      { detailsOrders
      && (
        <div>
          <div
            data-testid="customer_order_details__element-order-details-label-order-id"
          >
            tekfgkld
          </div>
          {/* <div
            data-testid="customer_order_details__element-order-details-label-seller-name"
          >
            { detailsOrders.id }
          </div>
          <div
            data-testid="customer_order_details__element-order-details-label-order-date"
          >
            { moment(detailsOrders.saleDate).format('DD/MM/YYYY') }
          </div>
          <div
            data-testid="customer_order_details__
              element-order-details-label-delivery-status"
          >
            { detailsOrders.status }
          </div>
          <button
            type="button"
            value="Preparando"
            data-testid="customer_order_details__button-preparing-check"
            onClick={ statusBtn }
            disabled={ detailsOrders.status !== 'Pendente' }
          >
            Preparar Pedido
          </button>
          <button
            type="button"
            value="Em Trânsito"
            data-testid="customer_order_details__button-dispatch-check"
            onClick={ statusBtn }
            disabled={ detailsOrders.status !== 'Preparando' }
          >
            Saiu para Entrega
          </button>
          <div
            data-testid="customer_order_details__element-order-total-price"
          >
            {Number(detailsOrders.totalPrice).toFixed(2).replace(/\./, ',')}
          </div> */}
        </div>
      )}
    </>
  );
}
