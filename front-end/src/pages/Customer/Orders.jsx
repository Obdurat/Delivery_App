import Header from '../../components/Header';
import { useUsers } from '../../context/providers/UserProvider';
import CardOrder from './components/CardOrder';

export default function Orders() {
  const { userOrders } = useUsers();

  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        {userOrders.map((order) => (
          <CardOrder key={ order.id } order={ order } />
        ))}
      </div>
    </>
  );
}
