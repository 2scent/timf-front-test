import axios from 'axios';

import {
  SubmitHandler,
  useFormContext,
} from 'react-hook-form';

import Grid from '@mui/material/Grid';

import useAlertModal from 'shared/hooks/use-alert-modal';

import Button from 'shared/components/Button';

import { OrderInput } from 'shared/types';

import InputName from './InputName';
import InputPhoneNumber from './InputPhoneNumber';
import InputOrderDate from './InputOrderDate';
import InputItem from './InputItem';
import InputSupply from './InputSupply';
import InputWorkAddress from './InputWorkAddress';
import InputLoadPlaces from './InputLoadPlaces';

export default function OrderForm() {
  const { watch, handleSubmit } = useFormContext<OrderInput>();

  const formData = watch();

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        <Grid
          item
          xs={5}
          sx={{
            flexDirection: 'column',
            gap: '1rem',
            display: 'flex',
            mb: '1rem',
          }}
        >
          <InputName />
          <InputPhoneNumber />
          <InputOrderDate />
          <InputItem />
          <InputSupply />
          <InputWorkAddress />
        </Grid>
        <Grid item xs={7}>
          <InputLoadPlaces />
        </Grid>
      </Grid>
      <div>
        <Button type="submit">등록</Button>
      </div>
    </form>
  );
}
