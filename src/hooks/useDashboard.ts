import { useQuery } from '@tanstack/react-query';
import server from '../utils/axios';

interface DashboardStats {
  totalSales: number;
  customerCount: number;
  orderCount: number;
}

interface SalesData {
  date: string;
  amount: number;
}

export const useDashboardStats = () => {
  return useQuery<DashboardStats>({
    queryKey: ['dashboard-stats'],
    queryFn: async () => {
      const [salesRes, usersRes, ordersRes] = await Promise.all([
        server.get('/orders/total-sales'),
        server.get('/users?isAdmin=false'),
        server.get('/orders')
      ]);
      
      return {
        totalSales: salesRes.data.totalSales || 0,
        customerCount: usersRes.data.length || 0,
        orderCount: ordersRes.data.length || 0
      };
    },
    staleTime: 1000 * 60 * 5
  });
};

export const useSalesData = (days = 6) => {
  return useQuery<SalesData[]>({
    queryKey: ['sales-data', days],
    queryFn: async () => {
      const response = await server.get('/orders/total-sales-by-date');
      return response.data.slice(0, days).reverse();
    },
    select: (data) => {
      return data.map((item, index) => ({
        date: `${days - index}`,
        amount: item.amount
      }));
    }
  });
};