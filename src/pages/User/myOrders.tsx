import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Box,
  styled,
  CircularProgress,
  Typography
} from "@mui/material";
import { getMyOrders } from "../../api/orderService";
import type { Order } from "../../types/Order";
import { useNavigate } from "react-router-dom";

// Status styles
const statusStyles = {
  shipped: {
    backgroundColor: "#00B8D9",
    color: "white",
    borderRadius: "12px",
    padding: "2px 10px",
    display: "inline-block",
  },
  delivered: {
    backgroundColor: "#22C55E",
    color: "white",
    borderRadius: "12px",
    padding: "2px 10px",
    display: "inline-block",
  },
  pending: {
    backgroundColor: "#FF9800",
    color: "white",
    borderRadius: "12px",
    padding: "2px 10px",
    display: "inline-block",
  },
  cancelled: {
    backgroundColor: "#B71D18",
    color: "white",
    borderRadius: "12px",
    padding: "2px 10px",
    display: "inline-block",
  },
};

const statusTranslations = {
  shipped: "در حال ارسال",
  delivered: "تحویل شده",
  pending: "در انتظار پرداخت",
  cancelled: "لغو شده",
};

const paymentStatusTranslations = {
  paid: "پرداخت شده",
  unpaid: "پرداخت نشده",
};

// Styled components
const PageContainer = styled("div")({
  padding: "2rem",
  direction: "rtl",
});

const StyledTableCell = styled(TableCell)({
  fontWeight: 400,
  fontSize: 16,
});

const ActionButton = styled(Button)({
  backgroundColor: "#DB2777",
  color: "white",
  borderRadius: "8px",
  padding: "3px 3px",
  "&:hover": {
    backgroundColor: "#BE185D",
  },
});

const MyOrders: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const data = await getMyOrders();
        setOrders(data);
        setLoading(false);
      } catch (err) {
        setError('خطا در دریافت سفارشات');
        setLoading(false);
        console.log(err)
      }
    };

    fetchOrders();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fa-IR');
  };

  if (loading) {
    return (
      <PageContainer>
        <Box display="flex" justifyContent="center" alignItems="center" height="300px">
          <CircularProgress />
        </Box>
      </PageContainer>
    );
  }

  if (error) {
    return (
      <PageContainer>
        <Typography variant="h6" color="error" align="center">
          {error}
        </Typography>
      </PageContainer>
    );
  }

  if (orders.length === 0) {
    return (
      <PageContainer>
        <Typography variant="h6" align="center">
          سفارشی یافت نشد
        </Typography>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <TableContainer
        component={Paper}
        elevation={0}
        sx={{
          width: "1000px",
          margin: "auto",
          direction: "rtl",
          background: "transparent",
          boxShadow: "none",
        }}
      >
        <Table
          sx={{
            minWidth: "100%",
            borderCollapse: "separate",
            borderSpacing: "0 8px",
            "& .MuiTableCell-root": {
              border: "none",
              padding: "12px 16px",
            },
          }}
          aria-label="orders table"
        >
          <TableHead>
            <TableRow
              sx={{
                "& .MuiTableCell-root": {
                  backgroundColor: "transparent",
                  fontWeight: 400,
                  paddingBottom: "16px",
                },
              }}
            >
              <StyledTableCell
                sx={{
                  width: "10%",
                  paddingRight: "25px",
                  textAlign: "right",
                }}
              >
                عکس
              </StyledTableCell>
              <StyledTableCell sx={{ width: "20%", textAlign: "right" }}>
                نام محصول
              </StyledTableCell>
              <StyledTableCell sx={{ width: "14%", textAlign: "center" }}>
                تاریخ
              </StyledTableCell>
              <StyledTableCell sx={{ width: "14%", textAlign: "center" }}>
                قيمت نهایی
              </StyledTableCell>
              <StyledTableCell sx={{ width: "14%", textAlign: "center" }}>
                پرداخت
              </StyledTableCell>
              <StyledTableCell sx={{ width: "14%", textAlign: "center" }}>
                وضعیت ارسال
              </StyledTableCell>
              <StyledTableCell sx={{ width: "14%", textAlign: "center" }}>
                عملیات
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.flatMap(order => 
              order.orderItems.map((item, index) => (
                <TableRow
                  key={`${order._id}-${index}`}
                  sx={{
                    backgroundColor: "rgba(255, 255, 255, 0.7)",
                    borderRadius: "8px",
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.9)",
                    },
                  }}
                >
                  {/* Product Image */}
                  <TableCell
                    sx={{
                      paddingRight: "16px",
                      textAlign: "right",
                      "& > div": {
                        display: "inline-flex",
                        justifyContent: "flex-end",
                      },
                    }}
                  >
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <img
                        src={item.image}
                        alt={item.name}
                        style={{
                          width: "50px",
                          height: "50px",
                          objectFit: "cover",
                          borderRadius: "4px",
                        }}
                      />
                    </Box>
                  </TableCell>

                  {/* Product name */}
                  <TableCell sx={{ textAlign: "right" }}>
                    {item.name}
                  </TableCell>

                  {/* Other data */}
                  <TableCell sx={{ textAlign: "center" }}>
                    {formatDate(order.createdAt)}
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    {item.price.toLocaleString('fa-IR')} تومان
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    <span
                      style={{
                        backgroundColor: order.isPaid ? "#22C55E" : "#B71D18",
                        color: "white",
                        borderRadius: "12px",
                        padding: "2px 10px",
                        display: "inline-block",
                      }}
                    >
                      {order.isPaid
                        ? paymentStatusTranslations.paid
                        : paymentStatusTranslations.unpaid}
                    </span>
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    <span style={statusStyles[order.shippingStatus]}>
                      {statusTranslations[order.shippingStatus]}
                    </span>
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    <ActionButton
                      variant="contained"
                      onClick={() => navigate(`/order-details/${order._id}`)}
                      sx={{ textAlign: "center" }}
                    >
                      جزئیات
                    </ActionButton>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </PageContainer>
  );
};

export default MyOrders;