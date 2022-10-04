import PropTypes from 'prop-types';

export default function OrderProducts({ products }) {
  const prefix = 'seller_order_details__element';
  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor Unitário</th>
          <th>Sub-Total</th>
        </tr>
      </thead>
      <tbody>
        {products?.map((product, index) => (
          <tr key={ index }>
            <td data-testid={ `${prefix}-order-table-item-number-${index}` }>
              {index + 1}
            </td>
            <td data-testid={ `${prefix}-order-table-name-${index}` }>
              {product.name}
            </td>
            <td data-testid={ `${prefix}-order-table-quantity-${index}` }>
              {product.salesProducts.quantity}
            </td>
            <td data-testid={ `${prefix}-order-table-unit-price-${index}` }>
              {product.price}
            </td>
            <td data-testid={ `${prefix}-order-table-sub-total-${index}` }>
              {Number(product.price * product.salesProducts.quantity).toFixed(2)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

OrderProducts.propTypes = {
  products: PropTypes.array,
}.isRequired;
