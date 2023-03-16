import {
  useForm,
  SubmitHandler,
  FormProvider,
} from 'react-hook-form';

import useDataModal from '../hooks/use-data-modal';

import { OrderInput } from '../types';

import InputName from './InputName';
import InputPhoneNumber from './InputPhoneNumber';
import InputOrderDate from './InputOrderDate';
import InputItem from './InputItem';
import InputSupply from './InputSupply';
import InputWorkAddress from './InputWorkAddress';
import InputLoadPlaces from './InputLoadPlaces';

const defaultValues: OrderInput = {
  name: '',
  phoneNumber: '',
  fromDate: '',
  toDate: '',
  item: '',
  itemDetail: '',
  supply: '',
  supplyDetail: '',
  address: '',
  loadPlace: [{
    name: '',
    date: '',
    address: '',
  }],
};

export default function OrderForm() {
  const methods = useForm<OrderInput>({
    defaultValues,
  });

  const formData = methods.watch();

  const { showModal } = useDataModal(
    { data: JSON.stringify(formData) },
    [formData],
  );

  const onSubmit: SubmitHandler<OrderInput> = () => showModal();

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <InputName />
        <InputPhoneNumber />
        <InputOrderDate />
        <InputItem />
        <InputSupply />
        <InputWorkAddress />
        <InputLoadPlaces />
        <div>
          <button type="submit">등록</button>
        </div>
      </form>
    </FormProvider>
  );
}
