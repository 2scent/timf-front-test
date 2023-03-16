import React from 'react';

interface OrderListHeaderProps {
  allChecked: boolean;
  anyChecked: boolean;
  onChangeAllChecked: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function OrderListHeader({
  allChecked,
  anyChecked, onChangeAllChecked,
}: OrderListHeaderProps) {
  return (
    <thead>
      <tr>
        <th>
          <input
            type="checkbox"
            checked={allChecked}
            onChange={onChangeAllChecked}
          />
          {!allChecked && anyChecked && <span>-</span>}
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
  );
}
