import { FieldValues, useController } from 'react-hook-form';

import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';

import { TControl } from '../types';

export interface Option {
  label: string;
  value: string;
}

type SelectOptionsProps<T extends FieldValues> = TControl<T> & {
  options: Option[];
  fullWidth?: boolean;
};

export default function SelectOptions<T extends FieldValues>({
  name,
  rules,
  control,
  options,
  fullWidth,
}: SelectOptionsProps<T>) {
  const {
    field: { value, onChange },
  } = useController({
    name,
    rules,
    control,
  });

  return (
    <FormControl
      fullWidth={fullWidth}
      size="small"
    >
      <Select
        name={name}
        value={value}
        onChange={onChange}
        displayEmpty
      >
        {options.map(({ label, value: optionValue }, index) => (
          <MenuItem
            key={index}
            value={optionValue}
          >
            {label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
