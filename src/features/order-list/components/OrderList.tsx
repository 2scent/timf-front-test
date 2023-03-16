import useOrders from '../hooks/use-orders';

export default function OrderList() {
  const { data: orders, isLoading } = useOrders();

  if (isLoading) return <h3>로딩 중</h3>;

  return (
    <>
      <h3>주문 목록</h3>
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
          {orders?.map(({
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
    </>
  );
}
