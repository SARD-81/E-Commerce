import axios from '../utils/axios';
import type { Order } from '../types/Order';

export const getMyOrders = async (): Promise<Order[]> => {
  const response = await axios.get('/orders/mine');
  return response.data;
};