import { useFormContext } from 'react-hook-form';

import Grid from '@mui/material/Grid';

import InputAddress from 'shared/components/InputAddress';
import ErrorMessage from 'shared/components/ErrorMessage';

import { OrderInput } from 'shared/types';

import { requiredErrorMessage } from '../contants';

export default function InputWorkAddress() {
  const {
    formState: { errors },
    control,
  } = useFormContext<OrderInput>();

  return (
    <Grid container>
      <Grid item xs={2}>
        <strong>출근지</strong>
      </Grid>
      <Grid item xs={10}>
        <InputAddress
          fullWidth
          name="address"
          control={control}
          rules={{
            required: requiredErrorMessage,
          }}
        />
        {errors.address && <ErrorMessage>{errors.address.message}</ErrorMessage>}
      </Grid>
    </Grid>
  );
}
