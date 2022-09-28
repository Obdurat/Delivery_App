import Header from '../../components/Header';
import { useCart } from '../../context/CartProvider';
import Table from './components/Table';

export default function Checkout() {
  const { total } = useCart();

  return (
    <div>
      <Header />
      <form>
        Finalizar Pedido
        <fieldset>
          <Table />
          <p
            data-testid="customer_checkout__element-order-total-price"
            name="totalPrice"
          >
            {total.toFixed(2).replace(/\./, ',')}
          </p>
        </fieldset>
      </form>
      <form>
        Detalhes e Endereço para Entrega
        <fieldset>
          <label
            htmlFor="seller"
            name="seller"
          >
            P. Vendedora Responsável
            <select
              data-testid="customer_checkout__select-seller"
              name="orderSeller"
            >
              <option>Fulana</option>
              {/* {sellers.map((seller) => (
                <option key={ seller.id } value={ seller.name }>{ seller.name }</option>
              ))} */}
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
              name="address"
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
              name="addressNumber"
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
