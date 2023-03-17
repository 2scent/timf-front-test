import { useFieldArray, useFormContext } from 'react-hook-form';

import styled from '@emotion/styled';

import Grid from '@mui/material/Grid';

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
    <Grid
      container
      spacing={3}
    >
      {fields.map((item, index) => (
        <Grid item xs={12} sm={4}>
          <InputLoadPlace
            key={item.id}
            index={index}
            onDelete={() => remove(index)}
          />
        </Grid>
      ))}
      {fields.length < 3 && (
        <Grid item xs={12} sm={4}>
          <AddButton
            type="button"
            onClick={() => append({
              name: '',
              date: undefined,
              address: '',
            })}
          >
            +
          </AddButton>
        </Grid>
      )}
    </Grid>
  );
}

const AddButton = styled.button`
  border: 1px solid #dee2e6;
  border-radius: .375rem;
  width: 100%;
  height: 100%;

  background-color: white;
  cursor: pointer;
  
  font-size: 2rem;

`;
