import ReactDatePicker from 'react-datepicker';

import { FieldValues, useController } from 'react-hook-form';

import { TControl } from '../types';

export default function InputDate<T extends FieldValues>({ control, name, rules }: TControl<T>) {
  const { field: { value, onChange } } = useController({ name, rules, control });

  return (
    <ReactDatePicker
      name={name}
      selected={value}
      dateFormat="yyyy-MM-dd"
      onFocus={(e) => e.target.blur()}
      onChange={onChange}
    />
  );
}
