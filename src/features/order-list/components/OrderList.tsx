import { useEffect, useState } from 'react';

import axios from 'axios';

import { useFormContext } from 'react-hook-form';

import useAlertModal from 'shared/hooks/use-alert-modal';

import { OrderInput } from 'shared/types';

import useChecks from '../hooks/use-checks';
import useOrders from '../hooks/use-orders';
import usePagination from '../hooks/use-pagintaion';

import { Order } from '../types';

import OrderItem from './OrderItem';
import OrderListHeader from './OrderListHeader';
import Pagination from './Pagination';

export default function OrderList() {
  const { data: orders, isLoading, isError } = useOrders();

  const {
    limit,
    page,
    offset,
    totalPagesCount,
    shownItemsCount: shownOrdersCount,
    changeLimit,
    setPage,
  } = usePagination({
    defaultLimit: 20,
    totalItemsCount: orders?.length,
  });

  const handleChangeLimit = ({ target: { value } }: React.ChangeEvent<HTMLSelectElement>) => {
    changeLimit(Number(value));
  };

  const {
    checks: checkedOrders,
    setChecks: setCheckedOrders,
    toggleCheck: toggleCheckedOrder,
  } = useChecks<Order>();

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
    setAllChecked(checkedOrders.size === shownOrdersCount);
  }, [checkedOrders, shownOrdersCount]);

  useEffect(() => {
    setCheckedOrders(new Set());
    setAllChecked(false);
  }, [limit, page]);

  const { showModal } = useAlertModal(
    {
      title: '삭제가 완료 되었습니다',
      content: JSON.stringify(
        Array.from(checkedOrders)
          .map(({ seqNo }) => seqNo)
          .sort((a, b) => a - b),
      ),
    },
    [checkedOrders],
  );

  const handleClickDelete = async () => {
    if (!checkedOrders.size) {
      // eslint-disable-next-line no-alert
      alert('선택된 테이블 행이 없습니다');
      return;
    }

    const res = await axios.delete('/order');

    if (res.data === 'success') showModal();
  };

  const { reset } = useFormContext<OrderInput>();

  const handleClickCopy = (order: Order) => {
    const {
      name,
      phoneNumber,
      fromDate,
      toDate,
      item,
      itemDetail,
      supply,
      supplyDetail,
      address,
      loadPlace,
    } = order;

    reset({
      name,
      phoneNumber,
      fromDate: new Date(fromDate),
      toDate: new Date(toDate),
      item,
      itemDetail,
      supply,
      supplyDetail,
      address,
      loadPlace: loadPlace.map((place) => ({
        name: place.name,
        date: new Date(place.date),
        address: place.address,
      })),
    });
  };

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
          onChange={handleChangeLimit}
        >
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </div>
      <button
        type="button"
        onClick={handleClickDelete}
      >
        삭제
      </button>
      <table style={{
        width: '100%',
        border: '1px solid black',
      }}
      >
        <OrderListHeader
          allChecked={allChecked}
          anyChecked={!!checkedOrders.size}
          onChangeAllChecked={handleChangeAllChecked}
        />
        <tbody>
          {orders
            .slice(offset, offset + limit)
            .map((order) => (
              <OrderItem
                key={order.seqNo}
                order={order}
                checked={checkedOrders.has(order)}
                onChangeChecked={toggleCheckedOrder}
                onClickCopy={handleClickCopy}
              />
            ))}
        </tbody>
      </table>
      <Pagination
        totalPagesCount={totalPagesCount}
        page={page}
        setPage={setPage}
      />
    </div>
  );
}
