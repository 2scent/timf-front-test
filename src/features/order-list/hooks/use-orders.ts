import { AxiosError } from 'axios';

import { useQuery, UseQueryResult } from '@tanstack/react-query';

import fetchOrders from '../api/fetch-orders';

import { Order } from '../types';

export default function useOrders(): UseQueryResult<Order[], AxiosError> {
  return useQuery(
    ['orders'],
    fetchOrders,
  );
}
