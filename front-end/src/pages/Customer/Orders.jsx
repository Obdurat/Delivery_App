import Header from '../../components/Header';
import { useUsers } from '../../context/providers/UserProvider';
import CardOrder from './components/CardOrder';

export default function Orders() {
  // const orders = [
  //   {
  //     id: 1,
  //     userId: 3,
  //     sellerId: 2,
  //     totalPrice: '2.20',
  //     deliveryAdress: 'street',
  //     deliveryNumber: '12345',
  //     saleDate: '2001-08-01T00:00:00.000Z',
  //     status: 'PENDENTE',
  //   },
  //   {
  //     id: 2,
  //     userId: 3,
  //     sellerId: 2,
  //     totalPrice: '2.20',
  //     deliveryAdress: 'strtt',
  //     deliveryNumber: '12345',
  //     saleDate: '2001-08-01T00:00:00.000Z',
  //     status: 'ENTREGUE',
  //   },
  // ];
  const { userOrders } = useUsers();
  console.log(userOrders);

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
