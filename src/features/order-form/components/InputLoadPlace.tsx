import { useFormContext } from 'react-hook-form';

import styled from '@emotion/styled';

import Box from '@mui/material/Box';

import InputText from 'shared/components/InputText';
import ErrorMessage from 'shared/components/ErrorMessage';
import InputDate from 'shared/components/InputDate';
import InputAddress from 'shared/components/InputAddress';

import { OrderInput } from 'shared/types';

import { nameErrorMessage, requiredErrorMessage } from '../contants';

import { nameRegex } from '../regex';

interface InputLoadPlaceProps {
  index: number;
  onDelete: () => void;
}

export default function InputLoadPlace({ index, onDelete }: InputLoadPlaceProps) {
  const {
    formState: { errors },
    control,
  } = useFormContext<OrderInput>();

  return (
    <Box
      sx={{
        position: 'relative',

        border: '1px solid #dee2e6',
        borderRadius: '.375rem',
        p: '1rem',
      }}
    >
      <Title>상차지 정보</Title>
      <Box
        sx={{
          flexDirection: 'column',
          gap: '1rem',
          display: 'flex',
        }}
      >
        <div>
          <strong>담당자</strong>
          <InputText
            fullWidth
            type="text"
            name={`loadPlace.${index}.name`}
            maxLength={20}
            control={control}
            rules={{
              required: requiredErrorMessage,
              pattern: {
                value: nameRegex,
                message: nameErrorMessage,
              },
            }}
          />
          {errors.loadPlace
            && errors.loadPlace[index]?.name
            && <ErrorMessage>{errors.loadPlace[index]?.name?.message}</ErrorMessage>}
        </div>
        <div>
          <strong>날짜</strong>
          <InputDate
            fullWidth
            name={`loadPlace.${index}.date`}
            control={control}
            rules={{
              required: requiredErrorMessage,
            }}
          />
          {errors.loadPlace
            && errors.loadPlace[index]?.date
            && <ErrorMessage>{errors.loadPlace[index]?.date?.message}</ErrorMessage>}
        </div>
        <div>
          <strong>상차지</strong>
          <InputAddress
            fullWidth
            name={`loadPlace.${index}.address`}
            control={control}
            rules={{
              required: requiredErrorMessage,
            }}
          />
          {errors.loadPlace
            && errors.loadPlace[index]?.address
            && <ErrorMessage>{errors.loadPlace[index]?.address?.message}</ErrorMessage>}
        </div>
        {index > 0 && (
          <DeleteButton
            type="button"
            onClick={onDelete}
          >
            ❌
          </DeleteButton>
        )}
      </Box>
    </Box>
  );
}

const Title = styled.p`
  margin: 0;
  margin-bottom: 1rem;
  padding: 0;

  font-size: 1.25rem;
`;

const DeleteButton = styled.button`
  position: absolute;
  right: 1rem;
  top: 1rem;

  border: 0;
  padding: 0;

  background-color: transparent;
  cursor: pointer;
`;
