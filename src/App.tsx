import { FormProvider, useForm } from 'react-hook-form';

import Box from '@mui/material/Box';

import Header from 'shared/components/Header';

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
    <>
      <Header />
      <Box component="main" sx={{ p: 2 }}>
        <FormProvider {...methods}>
          <OrderForm />
          <OrderList />
        </FormProvider>
      </Box>
    </>
  );
}
