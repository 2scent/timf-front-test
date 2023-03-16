import { FormProvider, useForm } from 'react-hook-form';

import { OrderInput } from 'shared/types';

import { OrderForm } from 'features/order-form';
import { OrderList } from 'features/order-list';

const defaultValues: OrderInput = {
  name: '',
  phoneNumber: '',
  fromDate: undefined,
  toDate: undefined,
  item: '',
  itemDetail: '',
  supply: '',
  supplyDetail: '',
  address: '',
  loadPlace: [{
    name: '',
    date: undefined,
    address: '',
  }],
};

export default function App() {
  const methods = useForm<OrderInput>({
    defaultValues,
  });

  return (
    <FormProvider {...methods}>
      <OrderForm />
      <hr />
      <OrderList />
    </FormProvider>
  );
}
