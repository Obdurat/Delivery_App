import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Header from '../../components/Header';
import { useCart } from '../../context/providers/CartProvider';
// import { useSales } from '../../context/providers/SalesProvider';
import Table from './components/Table';
import ProviderApi from '../../services/api';
import { useAuth } from '../../context/providers/useAuth';

export default function Checkout() {
  const { cartItems, totalCart } = useCart();
  const { user } = useAuth();
  // const { orderId } = useSales();
  const sellers = [{ id: 1, name: 'Fulana' }]; // placeholder
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onClickCheckout = async (data) => {
    const sale = {
      sale: { ...data, totalPrice: totalCart },
      products: cartItems
        .map((item) => ({
          productId: item.id,
          quantity: item.quantity,
        })) };
    const res = await ProviderApi.createSale(user.token, sale);
    // console.log('🚀 ~ res', res);
    if (res.success) {
      navigate(`/customer/orders/${res.data[0].saleId}`);
    }
  };

  return (
    <div>
      <Header />
      <form onSubmit={ handleSubmit(onClickCheckout) }>
        Finalizar Pedido
        <fieldset>
          <Table />
          <p
            data-testid="customer_checkout__element-order-total-price"
            name="totalPrice"
          >
            {totalCart.toFixed(2).replace(/\./, ',')}
          </p>
        </fieldset>
        Detalhes e Endereço para Entrega
        <fieldset>
          <label
            htmlFor="seller"
            name="seller"
          >
            P. Vendedora Responsável
            <select
              data-testid="customer_checkout__select-seller"
              { ...register('sellerId') }
            >
              {sellers.map((seller) => (
                <option key={ seller.id } value={ seller.id }>{ seller.name }</option>
              ))}
            </select>
          </label>
          <label
            htmlFor="address"
            name="address"
          >
            Endereço
            <input
              data-testid="customer_checkout__input-address"
              type="text"
              { ...register('deliveryAdress') }
            />
          </label>
          <label
            htmlFor="addressNumber"
            name="addressNumber"
          >
            Número
            <input
              data-testid="customer_checkout__input-address-number"
              type="text"
              { ...register('deliveryNumber') }
            />
          </label>
          <button
            data-testid="customer_checkout__button-submit-order"
            type="submit"
          >
            Finalizar Pedido
          </button>
        </fieldset>
      </form>
    </div>
  );
}
