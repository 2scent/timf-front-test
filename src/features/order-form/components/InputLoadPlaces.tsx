import { useFieldArray, useFormContext } from 'react-hook-form';

import { OrderInput } from 'shared/types';

import InputLoadPlace from './InputLoadPlace';

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
            date: undefined,
            address: '',
          })}
        >
          추가
        </button>
      )}
    </div>
  );
}
