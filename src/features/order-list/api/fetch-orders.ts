import axios from 'axios';
import { Order } from '../types';

export default async function fetchOrders(): Promise<Order[]> {
  const url = '/orders';

  const response = await axios.get<Order[]>(url);

  return response.data;
}
