import { useFormContext } from 'react-hook-form';

import ErrorMessage from 'shared/components/ErrorMessage';
import InputText from 'shared/components/InputText';
import Select from 'shared/components/Select';

import { OrderInput } from 'shared/types';

import { requiredErrorMessage } from '../contants';

export default function InputItem() {
  const {
    watch,
    formState: { errors },
    control,
  } = useFormContext<OrderInput>();

  return (
    <div>
      품목
      {' '}
      <Select
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
      <InputText
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
      {(errors.item && <ErrorMessage>{errors.item.message}</ErrorMessage>)
        || (errors.itemDetail && <ErrorMessage>{errors.itemDetail.message}</ErrorMessage>)}
    </div>
  );
}
