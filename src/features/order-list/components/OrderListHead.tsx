import React from 'react';

import { styled } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

const headerTitles = ['이름', '휴대폰번호', '날짜', '품목', '물량', '출근지', '오더복사'];

interface OrderListHeaderProps {
  allChecked: boolean;
  anyChecked: boolean;
  onChangeAllChecked: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function OrderListHead({
  allChecked,
  anyChecked, onChangeAllChecked,
}: OrderListHeaderProps) {
  return (
    <TableHead>
      <TableHeadRow>
        <TableHeadCell
          align="center"
          padding="checkbox"
        >
          <Checkbox
            size="small"
            checked={allChecked}
            indeterminate={!allChecked && anyChecked}
            onChange={onChangeAllChecked}
          />
        </TableHeadCell>
        {headerTitles.map((title, index) => (
          <TableHeadCell
            key={index}
            align="center"
            sx={{ width: 100 }}
          >
            {title}
          </TableHeadCell>
        ))}
      </TableHeadRow>
    </TableHead>
  );
}

const TableHeadRow = styled(TableRow)({
  backgroundColor: '#CECECE',
});

const TableHeadCell = styled(TableCell)({
  fontWeight: 'bold',
});
