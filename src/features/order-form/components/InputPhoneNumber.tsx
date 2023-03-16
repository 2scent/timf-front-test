import { useFormContext } from 'react-hook-form';

import InputText from 'shared/components/InputText';
import ErrorMessage from 'shared/components/ErrorMessage';

import { phoneNumberErrorMessage, requiredErrorMessage } from '../contants';

import { phoneNumberRegex } from '../regex';

import { OrderInput } from '../types';

import { phoneNumberAutoFormat } from '../utils';

export default function InputPhoneNumber() {
  const {
    setValue,
    formState: { errors },
    control,
  } = useFormContext<OrderInput>();

  return (
    <div>
      휴대폰 번호
      {' '}
      <InputText
        type="tel"
        name="phoneNumber"
        maxLength={13}
        control={control}
        rules={{
          required: requiredErrorMessage,
          pattern: {
            value: phoneNumberRegex,
            message: phoneNumberErrorMessage,
          },
          onChange: (e) => setValue('phoneNumber', phoneNumberAutoFormat(e.target.value)),
        }}
      />
      {errors.phoneNumber && <ErrorMessage>{errors.phoneNumber.message}</ErrorMessage>}
    </div>
  );
}
