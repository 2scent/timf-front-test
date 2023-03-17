import { FieldValues, useController } from 'react-hook-form';

import TextField, { TextFieldProps } from '@mui/material/TextField';

import useDaumPostcodeModal from '../hooks/use-daum-postscode-modal';

import { TControl } from '../types';

type InputAddressProps<T extends FieldValues> = TextFieldProps & TControl<T>;

export default function InputAddress<T extends FieldValues>({
  control,
  name,
  rules,
  ...props
}: InputAddressProps<T>) {
  const { field: { value, onChange } } = useController({ name, rules, control });

  const { showModal } = useDaumPostcodeModal({
    onComplete: (address) => onChange(address.address),
  });

  return (
    <TextField
      type="text"
      name={name}
      value={value}
      onClick={showModal}
      size="small"
      inputProps={{ readOnly: true }}
      {...props}
    />
  );
}
