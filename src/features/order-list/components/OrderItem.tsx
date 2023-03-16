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
    <tr>
      <td>
        <input
          type="checkbox"
          value={seqNo}
          checked={checked}
          onChange={handleChangeChecked}
        />
      </td>
      <td>{name}</td>
      <td>{phoneNumber}</td>
      <td>
        {`${fromDate} ~ ${toDate}`}
      </td>
      <td>{item}</td>
      <td>{supply}</td>
      <td>{address}</td>
      <td>
        <button
          type="button"
          onClick={handleClickCopy}
        >
          오더복사
        </button>
      </td>
    </tr>
  );
}
