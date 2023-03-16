import { useFormContext } from 'react-hook-form';

import InputAddress from 'shared/components/InputAddress';
import ErrorMessage from 'shared/components/ErrorMessage';

import { requiredErrorMessage } from '../contants';

import { OrderInput } from '../types';

export default function InputWorkAddress() {
  const {
    formState: { errors },
    control,
  } = useFormContext<OrderInput>();

  return (

    <div>
      출근지
      {' '}
      <InputAddress
        name="address"
        control={control}
        rules={{
          required: requiredErrorMessage,
        }}
      />
      {errors.address && <ErrorMessage>{errors.address.message}</ErrorMessage>}
    </div>
  );
}
