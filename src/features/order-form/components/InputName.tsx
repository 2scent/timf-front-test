import { useFormContext } from 'react-hook-form';

import Grid from '@mui/material/Grid';

import InputText from 'shared/components/InputText';
import ErrorMessage from 'shared/components/ErrorMessage';

import { OrderInput } from 'shared/types';

import { nameErrorMessage, requiredErrorMessage } from '../contants';

import { nameRegex } from '../regex';

export default function InputName() {
  const {
    formState: { errors },
    control,
  } = useFormContext<OrderInput>();

  return (
    <Grid container>
      <Grid item xs={2}>
        <strong>이름</strong>
      </Grid>
      <Grid item xs={10}>
        <InputText
          fullWidth
          type="text"
          name="name"
          maxLength={20}
          control={control}
          rules={{
            required: requiredErrorMessage,
            pattern: {
              value: nameRegex,
              message: nameErrorMessage,
            },
          }}
        />
        {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
      </Grid>
    </Grid>
  );
}
