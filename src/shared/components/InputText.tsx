import { FieldValues, useController } from 'react-hook-form';

import TextField, { TextFieldProps } from '@mui/material/TextField';

import { TControl } from '../types';

type InputTextProps<T extends FieldValues> = TextFieldProps & TControl<T> & {
  maxLength?: number;
};

export default function InputText<T extends FieldValues>({
  control,
  name,
  rules,
  maxLength,
  ...props
}: InputTextProps<T>) {
  const { field: { value, onChange } } = useController({ name, rules, control });

  return (
    <TextField
      name={name}
      value={value}
      onChange={onChange}
      size="small"
      inputProps={{ maxLength }}
      {...props}
    />
  );
}
