import axios from 'axios';

import {
  useForm,
  SubmitHandler,
  FormProvider,
} from 'react-hook-form';

import useAlertModal from 'shared/hooks/use-alert-modal';

import { OrderInput } from 'shared/types';

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

  const { showModal } = useAlertModal(
    {
      title: '등록이 완료 되었습니다',
      content: JSON.stringify(formData),
    },
    [formData],
  );

  const onSubmit: SubmitHandler<OrderInput> = async () => {
    const res = await axios.post('/order');

    if (res.data === 'success') showModal();
  };

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
