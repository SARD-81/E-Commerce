import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  Paper,
  Box,
} from "@mui/material";
import OrderRow from "../../components/AdminOrders/OrderRow";

type Order = {
  id: string;
  user: string;
  product: string;
  productImage: string;
  category: string;
  price: string;
  date: string;
  paymentStatus: "paid" | "unpaid";
  shippingStatus: "sent" | "being_sent" | "not_sent";
};

const ordersData: Order[] = [
  {
    id: "1",
    user: "محمد رضایی",
    product: "Apple iPhone 14 Pro",
    productImage: "/images/iphone.png",
    category: "کالای دیجیتال",
    price: "99,000,000",
    date: "۱۴۰۳/۰۳/۱۰",
    paymentStatus: "paid",
    shippingStatus: "being_sent",
  },
  {
    id: "2",
    user: "سارا احمدی",
    product: "Apple MacBook Air M2",
    productImage: "/images/macbook.png",
    category: "کالای دیجیتال",
    price: "120,000,000",
    date: "۱۴۰۳/۰۲/۲۵",
    paymentStatus: "unpaid",
    shippingStatus: "not_sent",
  },
];

const Orders = () => {
  return (
    <Box sx={{ padding: 4, direction: "rtl" }}>
      <TableContainer
        component={Paper}
        elevation={0}
        sx={{ boxShadow: "none" }}
      >
        <Table
          sx={{
            borderCollapse: "separate",
            borderSpacing: "0 8px",
            "& .MuiTableCell-root": { border: "none", padding: "12px 16px" },
          }}
        >
          <TableHead>
            <TableRow
              sx={{
                "& .MuiTableCell-root": {
                  borderBottom: "1px solid #E0E0E0",
                },
              }}
            >
              <TableCell align="center" sx={{ fontSize: 16 }}>
                عکس
              </TableCell>
              <TableCell align="center" sx={{ fontSize: 16 }}>
                نام محصول
              </TableCell>
              <TableCell align="center" sx={{ fontSize: 16 }}>
                تاریخ
              </TableCell>
              <TableCell align="center" sx={{ fontSize: 16 }}>
                کاربر
              </TableCell>
              <TableCell align="center" sx={{ fontSize: 16 }}>
                قیمت نهایی
              </TableCell>
              <TableCell align="center" sx={{ fontSize: 16 }}>
                پرداخت
              </TableCell>
              <TableCell align="center" sx={{ fontSize: 16 }}>
                ارسال
              </TableCell>
              <TableCell align="center" sx={{ fontSize: 16 }}>
                عملیات
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {ordersData.map((order) => (
              <OrderRow key={order.id} order={order} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Orders;
