import { useFormContext } from 'react-hook-form';

import Select from 'shared/components/Select';
import InputText from 'shared/components/InputText';
import ErrorMessage from 'shared/components/ErrorMessage';

import { onlyNumberErrorMessage, requiredErrorMessage } from '../contants';

import { onlyNumberRegex } from '../regex';

import { OrderInput } from '../types';

export default function InputSupply() {
  const {
    watch,
    formState: { errors },
    control,
  } = useFormContext<OrderInput>();

  return (
    <div>
      물량
      {' '}
      <Select
        name="supply"
        control={control}
        options={[
          { label: '선택', value: '' },
          { label: 'PLT', value: 'PLT' },
          { label: 'BOX', value: 'BOX' },
          { label: 'EA', value: 'EA' },
        ]}
      />
      <InputText
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
      {errors.supplyDetail && <ErrorMessage>{errors.supplyDetail.message}</ErrorMessage>}
    </div>
  );
}
