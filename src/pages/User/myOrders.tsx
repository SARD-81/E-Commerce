import React from "react";
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
} from "@mui/material";

// Type definitions
type Order = {
  product: string;
  productImage: string;
  category: string;
  price: string;
  date: string;
  paymentStatus: boolean;
  shippingAddress: string;
  paymentMethod: string;
  shippingStatus: "sent" | "being_sent" | "not_sent";
};
const statusStyles = {
  sent: {
    backgroundColor: "#22C55E",
    color: "white",
    borderRadius: "12px",
    padding: "2px 10px",
    display: "inline-block",
  },
  being_sent: {
    backgroundColor: "#00B8D9",
    color: "white",
    borderRadius: "12px",
    padding: "2px 10px",
    display: "inline-block",
  },
  not_sent: {
    backgroundColor: "#B71D18",
    color: "white",
    borderRadius: "12px",
    padding: "2px 10px",
    display: "inline-block",
  },
};
const paymentStatusStyles = {
  paid: {
    backgroundColor: "#22C55E",
    color: "white",
    borderRadius: "12px",
    padding: "2px 10px",
    display: "inline-block",
  },
  unpaid: {
    backgroundColor: "#B71D18",
    color: "white",
    borderRadius: "12px",
    padding: "2px 10px",
    display: "inline-block",
  },
};

const paymentStatusTranslations = {
  paid: "پرداخت شده",
  unpaid: "پرداخت نشده",
};
const statusTranslations = {
  sent: "ارسال شده",
  being_sent: "در حال ارسال",
  not_sent: "ارسال نشده",
};

// Sample data
const ordersData: Order[] = [
  {
    product: "Apple iPhone 14 Pro",
    productImage: "./src/assets/appleIphone.jpg",
    category: "خدمات",
    price: "999.00",
    date: "۱۴-۱/۰۴/۳۱",
    paymentStatus: true,
    shippingAddress: "123 Example St, Tehran, Iran",
    paymentMethod: "Credit Card",
    shippingStatus: "being_sent",
  },
  {
    product: "Apple MacBook Air M2",
    productImage: "./src/assets/appleMacBook.jpg",
    category: "خدمات",
    price: "999.00",
    date: "۱۴-۱/۰۴/۳۱",
    paymentStatus: false,
    shippingAddress: "123 Example St, Tehran, Iran",
    paymentMethod: "Credit Card",
    shippingStatus: "sent",
  },
  {
    product: "Apple iPad Pro 12.9-inch",
    productImage: "./src/assets/appleIpad.jpg",
    category: "خدمات",
    price: "999.00",
    date: "۱۴-۱/۰۴/۳۱",
    paymentStatus: false,
    shippingAddress: "123 Example St, Tehran, Iran",
    paymentMethod: "Credit Card",
    shippingStatus: "not_sent",
  },
  // ... (other orders)
];

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
            {ordersData.map((order, index) => (
              <TableRow
                key={index}
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
                      src={order.productImage}
                      alt={order.product}
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
                  {order.product}
                </TableCell>

                {/* Other data */}
                <TableCell sx={{ textAlign: "center" }}>{order.date}</TableCell>
                <TableCell sx={{ textAlign: "center" }}>
                  {order.price}
                </TableCell>
                <TableCell sx={{ textAlign: "center" }}>
                  <span
                    style={
                      order.paymentStatus
                        ? paymentStatusStyles.paid
                        : paymentStatusStyles.unpaid
                    }
                  >
                    {order.paymentStatus
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
                    onClick={() => {}}
                    sx={{ textAlign: "center" }}
                  >
                    جزئیات
                  </ActionButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </PageContainer>
  );
};

export default MyOrders;
