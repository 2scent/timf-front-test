import { Order } from '../types';

interface OrderItemProps {
  order: Order;
  checked: boolean;
  toggleCheckedOrder: (order: Order, checked: boolean) => void;
}

export default function OrderItem({ order, checked, toggleCheckedOrder }: OrderItemProps) {
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
    toggleCheckedOrder(order, e.target.checked);
  };

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
      <td>오더복사</td>
    </tr>
  );
}
