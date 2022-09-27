import Header from '../../components/Header';
import Table from './components/Table';

export default function Checkout() {
  // const { products, total } = useCart();

  return (
    <div>
      <Header />
      <form>
        <Table />
      </form>
    </div>
  );
}
