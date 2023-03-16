import { useFormContext } from 'react-hook-form';

import InputDate from 'shared/components/InputDate';
import ErrorMessage from 'shared/components/ErrorMessage';

import { requiredErrorMessage } from '../contants';

import { OrderInput } from '../types';

export default function InputOrderDate() {
  const {
    getValues,
    formState: { errors },
    control,
  } = useFormContext<OrderInput>();

  return (
    <div>
      날짜
      {' '}
      <InputDate
        name="fromDate"
        control={control}
        rules={{
          required: requiredErrorMessage,
        }}
      />
      ~
      <InputDate
        name="toDate"
        control={control}
        rules={{
          required: requiredErrorMessage,
          validate: (to) => {
            if (!getValues('fromDate')) return undefined;

            const fromDate = new Date(getValues('fromDate'));
            const toDate = new Date(to as string);

            return toDate > fromDate ? undefined : '시작날짜 보다 종료날짜가 더 크도록 입력 해주세요';
          },
        }}
      />
      {(errors.fromDate && <ErrorMessage>{errors.fromDate.message}</ErrorMessage>)
        || (errors.toDate && <ErrorMessage>{errors.toDate.message}</ErrorMessage>)}
    </div>
  );
}
