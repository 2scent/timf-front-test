import { FieldValues, useController } from 'react-hook-form';

import { TControl } from '../types';

type InputTextProps<T extends FieldValues> = React.ComponentPropsWithoutRef<'input'> & TControl<T> ;

export default function InputText<T extends FieldValues>({
  control,
  name,
  rules,
  ...props
}: InputTextProps<T>) {
  const { field: { value, onChange } } = useController({ name, rules, control });

  return (
    <input
      name={name}
      value={value}
      onChange={onChange}
      {...props}
    />
  );
}
