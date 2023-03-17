import styled from '@emotion/styled';

import Checkbox from '@mui/material/Checkbox';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

import { Order } from '../types';

interface OrderItemProps {
  order: Order;
  checked: boolean;
  onChangeChecked: (order: Order, checked: boolean) => void;
  onClickCopy: (order: Order) => void;
}

export default function OrderItem({
  order, checked, onChangeChecked, onClickCopy,
}: OrderItemProps) {
  const {
    seqNo,
    name,
    phoneNumber,
    fromDate,
    toDate,
    item,
    supply,
    address,
  } = order;

  const handleChangeChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChangeChecked(order, e.target.checked);
  };

  const handleClickCopy = () => onClickCopy(order);

  return (
    <TableRow>
      <TableCell
        align="center"
        padding="checkbox"
      >
        <Checkbox
          size="small"
          value={seqNo}
          checked={checked}
          onChange={handleChangeChecked}
        />
      </TableCell>
      <TableCell align="center">
        {name}
      </TableCell>
      <TableCell align="center">
        {phoneNumber}
      </TableCell>
      <TableCell align="center">
        {`${fromDate} ~ ${toDate}`}
      </TableCell>
      <TableCell align="center">
        {item}
      </TableCell>
      <TableCell align="center">
        {supply}
      </TableCell>
      <TableCell align="center">
        {address}
      </TableCell>
      <TableCell align="center">
        <CopyOrderButton
          type="button"
          onClick={handleClickCopy}
        >
          오더복사
        </CopyOrderButton>
      </TableCell>
    </TableRow>
  );
}

const CopyOrderButton = styled.button`
  border: 0;

  background: transparent;

  cursor: pointer;

  text-decoration: underline;
`;
