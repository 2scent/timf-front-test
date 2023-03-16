import {
  Control,
  FieldPath,
  FieldValues,
  RegisterOptions,
} from 'react-hook-form';

export interface TControl<T extends FieldValues> {
  control: Control<T>;
  name: FieldPath<T>;
  rules?: Omit<RegisterOptions<T>, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>;
}
