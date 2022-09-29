export default function Table() {
  const users = [{
    id: 1,
    name: 'Delivery App Admin',
    email: 'adm@deliveryapp.com',
    password: 'a4c86edecc5aee06eff8fdeda69e0d04',
    role: 'administrator' },
  {
    id: 2,
    name: 'Fulana Pereira',
    email: 'fulana@deliveryapp.com',
    password: '3c28d2b0881bf46457a853e0b07531c6',
    role: 'seller' },
  {
    id: 3,
    name: 'Cliente Zé Birita',
    email: 'zebirita@email.com',
    password: '1c37466c159755ce1fa181bd247cb925',
    role: 'customer',
  }];

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Type</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {users.filter((elem) => elem.role !== 'administrator')
          .map((user, index) => (
            <tr key={ index }>
              <td
                data-testid={
                  `admin_manage__element-user-table-item-number-${index}`
                }
              >
                {index + 1}
              </td>
              <td
                data-testid={ `admin_manage__element-user-table-name-${index}` }
              >
                {user.name}
              </td>
              <td
                data-testid={ `admin_manage__element-user-table-email-${index}` }
              >
                {user.email}
              </td>
              <td
                data-testid={ `admin_manage__element-user-table-role-${index}` }
              >
                {user.role}
              </td>
              <td>
                <button
                  type="button"
                  data-testid={ `admin_manage__element-user-table-remove-${index}` }
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}
