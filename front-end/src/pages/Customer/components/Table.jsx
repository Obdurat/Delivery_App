import { useCart } from '../../../context/CartProvider';

export default function Table() {
  const { cartItems } = useCart();

  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor Unitário</th>
          <th>Sub-Total</th>
          <th>Remover Item</th>
        </tr>
      </thead>
      <tbody>
        {cartItems.map((product, index) => (
          <tr key={ index }>
            <td
              data-testid={
                `customer_checkout__element-order-table-item-number-${index}`
              }
            >
              {index + 1}
            </td>
            <td
              data-testid={ `customer_checkout__element-order-table-name-${index}` }
            >
              {product.name}
            </td>
            <td
              data-testid={ `customer_checkout__element-order-table-quantity-${index}` }
            >
              {product.quantity}
            </td>
            <td
              data-testid={ `customer_checkout__element-order-table-unit-price-${index}` }
            >
              {(product.price).replace(/\./, ',')}
              {console.log('🚀 ~ product.price', typeof product.price)}
            </td>
            <td
              data-testid={ `customer_checkout__element-order-table-sub-total-${index}` }
            >
              {(product.price * product.quantity).toFixed(2).replace(/\./, ',')}
            </td>
            <td>
              <button
                type="button"
                data-testid={ `customer_checkout__element-order-table-remove-${index}` }
              >
                Remover
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
