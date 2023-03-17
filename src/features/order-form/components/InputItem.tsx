import { useFormContext } from 'react-hook-form';

import Grid from '@mui/material/Grid';

import ErrorMessage from 'shared/components/ErrorMessage';
import InputText from 'shared/components/InputText';
import SelectOptions from 'shared/components/SelectOptions';

import { OrderInput } from 'shared/types';

import { requiredErrorMessage } from '../contants';

export default function InputItem() {
  const {
    watch,
    formState: { errors },
    control,
  } = useFormContext<OrderInput>();

  return (
    <Grid container>
      <Grid item xs={2}>
        <strong>품목</strong>
      </Grid>
      <Grid container item xs={10}>
        <Grid item xs={5.75}>
          <SelectOptions
            fullWidth
            name="item"
            control={control}
            rules={{
              required: requiredErrorMessage,
            }}
            options={[
              { label: '선택', value: '' },
              { label: '냉장품', value: '냉장품' },
              { label: '냉동품', value: '냉동품' },
              { label: '직접입력', value: '직접입력' },
            ]}
          />
        </Grid>
        <Grid item xs={0.5} />
        <Grid item xs={5.75}>
          <InputText
            fullWidth
            type="text"
            name="itemDetail"
            control={control}
            disabled={watch('item') !== '직접입력'}
            rules={{
              required: {
                value: watch('item') === '직접입력',
                message: requiredErrorMessage,
              },
            }}
          />
        </Grid>
        {(errors.item && <ErrorMessage>{errors.item.message}</ErrorMessage>)
        || (errors.itemDetail && <ErrorMessage>{errors.itemDetail.message}</ErrorMessage>)}
      </Grid>
    </Grid>
  );
}
