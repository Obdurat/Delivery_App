import { useCart } from '../../../context/CartProvider';

export default function Table() {
  const { products } = useCart();
  console.log('🚀', products);

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
        {products.map((product, index) => (
          <tr key={ index }>
            <td data-testid="customer_checkout__element-order-table-item-number-<index>">
              {index + 1}
            </td>
            <td data-testid="customer_checkout__element-order-table-name-<index>">
              {product.name}
            </td>
            <td data-testid="customer_checkout__element-order-table-quantity-<index>">
              {product.quantity}
            </td>
            <td data-testid="customer_checkout__element-order-table-unit-price-<index>">
              {product.price}
            </td>
            <td data-testid="customer_checkout__element-order-table-sub-total-<index>">
              {Number(product.price * product.quantity).toFixed(2)}
            </td>
            <td>
              <button
                type="button"
                data-testid="customer_checkout__element-order-table-remove-<index>"
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
