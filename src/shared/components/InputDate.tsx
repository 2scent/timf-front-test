import ReactDatePicker from 'react-datepicker';

import { FieldValues, useController } from 'react-hook-form';

import TextField from '@mui/material/TextField';

import { TControl } from '../types';

type InputDateProps<T extends FieldValues> = TControl<T> & {
  fullWidth?: boolean;
};

export default function InputDate<T extends FieldValues>({
  control,
  name,
  rules,
  fullWidth,
}: InputDateProps<T>) {
  const { field: { value, onChange } } = useController({ name, rules, control });

  return (
    <ReactDatePicker
      name={name}
      selected={value}
      dateFormat="yyyy-MM-dd"
      onFocus={(e) => e.target.blur()}
      onChange={onChange}
      customInput={(
        <TextField
          fullWidth={fullWidth}
          size="small"
          inputProps={{ readonly: true }}
        />
      )}
    />
  );
}
