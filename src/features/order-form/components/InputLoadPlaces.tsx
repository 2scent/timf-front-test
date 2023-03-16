import { useFieldArray, useFormContext } from 'react-hook-form';

import InputLoadPlace from './InputLoadPlace';

import { OrderInput } from '../types';

export default function InputLoadPlaces() {
  const { control } = useFormContext<OrderInput>();

  const {
    fields,
    append,
    remove,
  } = useFieldArray({
    control,
    name: 'loadPlace',
  });

  return (
    <div>
      {fields.map((item, index) => (
        <InputLoadPlace
          key={item.id}
          index={index}
          onDelete={() => remove(index)}
        />
      ))}
      {fields.length < 3 && (
        <button
          type="button"
          onClick={() => append({
            name: '',
            date: '',
            address: '',
          })}
        >
          추가
        </button>
      )}
    </div>
  );
}
