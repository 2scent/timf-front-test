import { useFormContext } from 'react-hook-form';

import InputText from 'shared/components/InputText';
import ErrorMessage from 'shared/components/ErrorMessage';

import { nameErrorMessage, requiredErrorMessage } from '../contants';

import { nameRegex } from '../regex';

import { OrderInput } from '../types';

export default function InputName() {
  const {
    formState: { errors },
    control,
  } = useFormContext<OrderInput>();

  return (
    <div>
      <span>이름</span>
      {' '}
      <InputText
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
    </div>
  );
}
