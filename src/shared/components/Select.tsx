import { FieldValues, useController } from 'react-hook-form';

import { TControl } from '../types';

export interface Option {
  label: string;
  value: string;
}

type CustomSelectProps = {
  options: Option[];
};

type TProps<T extends FieldValues> = CustomSelectProps & TControl<T>;

export default function Select<T extends FieldValues>({
  name,
  rules,
  control,
  options,
}: TProps<T>) {
  const {
    field: { value, onChange },
  } = useController({
    name,
    rules,
    control,
  });

  return (
    <select
      name={name}
      value={value}
      onChange={onChange}
    >
      {options.map(({ label, value: optionValue }, index) => (
        <option
          key={index}
          value={optionValue}
        >
          {label}
        </option>
      ))}
    </select>
  );
}
