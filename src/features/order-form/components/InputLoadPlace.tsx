import { useFormContext } from 'react-hook-form';

import InputText from 'shared/components/InputText';
import ErrorMessage from 'shared/components/ErrorMessage';
import InputDate from 'shared/components/InputDate';
import InputAddress from 'shared/components/InputAddress';

import { nameErrorMessage, requiredErrorMessage } from '../contants';

import { OrderInput } from '../types';

import { nameRegex } from '../regex';

interface InputLoadPlaceProps {
  index: number;
  onDelete: () => void;
}

export default function InputLoadPlace({ index, onDelete }: InputLoadPlaceProps) {
  const {
    formState: { errors },
    control,
  } = useFormContext<OrderInput>();

  return (
    <div>
      <h3>상차지 정보</h3>
      <div style={{ display: 'flex' }}>
        <div>
          <InputText
            type="text"
            name={`loadPlace.${index}.name`}
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
          {errors.loadPlace
            && errors.loadPlace[index]?.name
            && <ErrorMessage>{errors.loadPlace[index]?.name?.message}</ErrorMessage>}
        </div>
        <div>
          <InputDate
            name={`loadPlace.${index}.date`}
            control={control}
            rules={{
              required: requiredErrorMessage,
            }}
          />
          {errors.loadPlace
            && errors.loadPlace[index]?.date
            && <ErrorMessage>{errors.loadPlace[index]?.date?.message}</ErrorMessage>}
        </div>
        <div>
          <InputAddress
            name={`loadPlace.${index}.address`}
            control={control}
            rules={{
              required: requiredErrorMessage,
            }}
          />
          {errors.loadPlace
            && errors.loadPlace[index]?.address
            && <ErrorMessage>{errors.loadPlace[index]?.address?.message}</ErrorMessage>}
        </div>
        {index > 0 && (
          <button type="button" onClick={onDelete}>
            Delete
          </button>
        )}
      </div>
    </div>
  );
}
