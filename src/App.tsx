import { OrderForm } from 'features/order-form';
import { OrderList } from 'features/order-list';

export default function App() {
  return (
    <>
      <OrderForm />
      <hr />
      <OrderList />
    </>
  );
}
