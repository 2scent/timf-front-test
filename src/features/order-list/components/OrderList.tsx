import { useState } from 'react';

import useOrders from '../hooks/use-orders';

import Pagination from './Pagination';

export default function OrderList() {
  const { data: orders, isLoading, isError } = useOrders();

  const [limit, setLimit] = useState(20);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

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
              <input type="checkbox" />
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
          {orders.slice(offset, offset + limit).map(({
            seqNo, name, phoneNumber, fromDate, toDate, item, supply, address,
          }) => (
            <tr key={seqNo}>
              <td>
                <input type="checkbox" />
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
