import { FieldValues, useController } from 'react-hook-form';

import useDaumPostcodeModal from '../hooks/use-daum-postscode-modal';

import { TControl } from '../types';

export default function InputAddress<T extends FieldValues>({ control, name, rules }: TControl<T>) {
  const { field: { value, onChange } } = useController({ name, rules, control });

  const { showModal } = useDaumPostcodeModal({
    onComplete: (address) => onChange(address.address),
  });

  return (
    <input
      type="text"
      name={name}
      value={value}
      readOnly
      onClick={showModal}
    />
  );
}
