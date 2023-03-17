import { useFormContext } from 'react-hook-form';

import Grid from '@mui/material/Grid';

import SelectOptions from 'shared/components/SelectOptions';
import InputText from 'shared/components/InputText';
import ErrorMessage from 'shared/components/ErrorMessage';

import { OrderInput } from 'shared/types';

import { onlyNumberErrorMessage, requiredErrorMessage } from '../contants';

import { onlyNumberRegex } from '../regex';

export default function InputSupply() {
  const {
    watch,
    formState: { errors },
    control,
  } = useFormContext<OrderInput>();

  return (
    <Grid container>
      <Grid item xs={2}>
        <strong>물량</strong>
      </Grid>
      <Grid container item xs={10}>
        <Grid item xs={5.75}>
          <SelectOptions
            fullWidth
            name="supply"
            control={control}
            options={[
              { label: '선택', value: '' },
              { label: 'PLT', value: 'PLT' },
              { label: 'BOX', value: 'BOX' },
              { label: 'EA', value: 'EA' },
            ]}
          />
        </Grid>
        <Grid item xs={0.5} />
        <Grid item xs={5.75}>
          <InputText
            fullWidth
            type="text"
            name="supplyDetail"
            control={control}
            disabled={!watch('supply')}
            rules={{
              required: {
                value: !!watch('supply'),
                message: requiredErrorMessage,
              },
              pattern: {
                value: onlyNumberRegex,
                message: onlyNumberErrorMessage,
              },
            }}
          />
        </Grid>
        {errors.supplyDetail && <ErrorMessage>{errors.supplyDetail.message}</ErrorMessage>}
      </Grid>
    </Grid>
  );
}
