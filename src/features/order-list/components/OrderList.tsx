import { useEffect, useState } from 'react';

import useOrders from '../hooks/use-orders';

import { Order } from '../types';

import Pagination from './Pagination';
import OrderItem from './OrderItem';

export default function OrderList() {
  const { data: orders, isLoading, isError } = useOrders();

  const [limit, setLimit] = useState(20);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  const [checkedOrders, setCheckedOrders] = useState(new Set<Order>());

  const toggleCheckedOrder = (order: Order, checked: boolean) => {
    const newCheckedOrders = new Set(checkedOrders);

    if (checked) {
      newCheckedOrders.add(order);
      setCheckedOrders(newCheckedOrders);
    } else {
      newCheckedOrders.delete(order);
      setCheckedOrders(newCheckedOrders);
    }
  };

  const [allChecked, setAllChecked] = useState(false);

  const handleChangeAllChecked = ({ target: { checked } }: React.ChangeEvent<HTMLInputElement>) => {
    if (checked) {
      setCheckedOrders(new Set(orders?.slice(offset, offset + limit)));
      setAllChecked(true);
    } else {
      setCheckedOrders(new Set());
      setAllChecked(false);
    }
  };

  useEffect(() => {
    const shownOrdersCount = Math.min(offset + limit, orders?.length ?? Number.MAX_SAFE_INTEGER)
        - offset;

    setAllChecked(checkedOrders.size === shownOrdersCount);
  }, [checkedOrders]);

  useEffect(() => {
    setCheckedOrders(new Set());
    setAllChecked(false);
  }, [limit, page]);

  if (isLoading) return <h3>로딩 중</h3>;

  if (isError) return <h3>에러 발생</h3>;

  return (
    <div>
      <h3>주문 목록</h3>
      <div>
        <span>
          페이지 당 표시할 게시물 수:
          {' '}
        </span>
        <select
          value={limit}
          onChange={({ target: { value } }) => {
            const newLimit = Number(value);

            setLimit(newLimit);

            const pagesCount = Math.ceil(orders.length / newLimit);

            if (page > pagesCount) setPage(pagesCount);
          }}
        >
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </div>
      <table style={{
        width: '100%',
        border: '1px solid black',
      }}
      >
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                checked={allChecked}
                onChange={handleChangeAllChecked}
              />
              {!allChecked && checkedOrders.size > 0 && <span>-</span>}
            </th>
            <th>이름</th>
            <th>휴대폰번호</th>
            <th>날짜</th>
            <th>품목</th>
            <th>물량</th>
            <th>출근지</th>
            <th>오더복사</th>
          </tr>
        </thead>
        <tbody>
          {orders
            .slice(offset, offset + limit)
            .map((order) => (
              <OrderItem
                key={order.seqNo}
                order={order}
                checked={checkedOrders.has(order)}
                toggleCheckedOrder={toggleCheckedOrder}
              />
            ))}
        </tbody>
      </table>
      <Pagination
        total={orders.length}
        limit={limit}
        page={page}
        setPage={setPage}
      />
    </div>
  );
}
