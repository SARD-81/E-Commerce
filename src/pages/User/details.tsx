import React from "react";
import {
  Avatar,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

interface OrderItem {
  image: string;
  name: string;
  quantity: number;
  price: number;
}

interface Props {
  orderItems: OrderItem[];
}

const OrderDetailsPage: React.FC<Props> = ({ orderItems }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        gap: 4,
        mt: 4,
        mr: 12,
        px: 4,
        direction: "rtl",
      }}
    >
      {/* Table Container */}
      <Box
        sx={{
          flex: "0 1 900px",
          maxWidth: "800px",
          width: "100%",
        }}
      >
        <Table sx={{ border: "1px solid #ccc", borderRadius: 0 }}>
          <TableHead>
            <TableRow
              sx={{
                display: "flex",
                justifyContent: "space-between",
                borderBottom: "1px solid rgba(224, 224, 224, 1)",
              }}
            >
              {/* Right group (Image & Name) */}
              <Box sx={{ display: "flex", gap: 1, minWidth: "30%" }}>
                <TableCell
                  sx={{
                    flex: "0 0 80px",
                    borderBottom: "none",
                    textAlign: "right",
                  }}
                >
                  عکس
                </TableCell>
                <TableCell
                  sx={{
                    flex: "1 1 auto",
                    borderBottom: "none",
                    textAlign: "right",
                  }}
                >
                  نام محصول
                </TableCell>
              </Box>

              {/* Left group (Quantity, Price, Total Price) */}
              <Box
                sx={{
                  display: "flex",
                  gap: 3,
                  minWidth: "40%",
                  justifyContent: "flex-start",
                }}
              >
                <TableCell
                  sx={{
                    flex: "1 1 0",
                    borderBottom: "none",
                    textAlign: "center",
                  }}
                >
                  تعداد
                </TableCell>
                <TableCell
                  sx={{
                    flex: "1 1 0",
                    borderBottom: "none",
                    textAlign: "center",
                  }}
                >
                  قیمت
                </TableCell>
                <TableCell
                  sx={{
                    flex: "1 1 0",
                    borderBottom: "none",
                    textAlign: "center",
                  }}
                >
                  قیمت نهایی
                </TableCell>
              </Box>
            </TableRow>
          </TableHead>

          <TableBody>
            {orderItems.map((item) => (
              <TableRow
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  "& > *": { borderBottom: "none" },
                }}
              >
                <Box sx={{ display: "flex", gap: 1, minWidth: "30%" }}>
                  <TableCell
                    sx={{
                      flex: "0 0 80px",
                      borderBottom: "none",
                      textAlign: "right",
                    }}
                  >
                    <Avatar src={item.image} alt={item.name} variant="square" />
                  </TableCell>
                  <TableCell
                    sx={{
                      flex: "1 1 auto",
                      borderBottom: "none",
                      textAlign: "right",
                    }}
                  >
                    {item.name}
                  </TableCell>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    gap: 3,
                    minWidth: "40%",
                    justifyContent: "flex-start",
                  }}
                >
                  <TableCell
                    sx={{
                      flex: "1 1 0",
                      borderBottom: "none",
                      textAlign: "center",
                    }}
                  >
                    {item.quantity}
                  </TableCell>
                  <TableCell
                    sx={{
                      flex: "1 1 0",
                      borderBottom: "none",
                      textAlign: "center",
                    }}
                  >
                    {item.price.toLocaleString()}
                  </TableCell>
                  <TableCell
                    sx={{
                      flex: "1 1 0",
                      borderBottom: "none",
                      textAlign: "center",
                    }}
                  >
                    {(item.price * item.quantity).toLocaleString()}
                  </TableCell>
                </Box>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>

      {/* Customer Info Section */}
      <Box
        sx={{
          minWidth: 400,
          whiteSpace: "pre-line",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        {/* Address Section */}
        <Box>
          <Box sx={{ fontSize: "18px", fontWeight: 600 }}>آدرس دریافت</Box>
          <br />
          <br />
          <Box sx={{ color: "#DB2777", fontSize: "16px", fontWeight: 700 }}>
            شماره سفارش:{" "}
            <Box
              component="span"
              sx={{ color: "black", fontSize: "16px", fontWeight: 400, ml: 1 }}
            >
              ۲۹۲۳۹۱۰
            </Box>
          </Box>
          <br />
          <Box sx={{ color: "#DB2777", fontSize: "16px", fontWeight: 700 }}>
            نام:{" "}
            <Box
              component="span"
              sx={{ color: "black", fontSize: "16px", fontWeight: 400, ml: 1 }}
            >
              علی موسوی
            </Box>
          </Box>
          <br />
          <Box sx={{ color: "#DB2777", fontSize: "16px", fontWeight: 700 }}>
            ایمیل:{" "}
            <Box
              component="span"
              sx={{ color: "black", fontSize: "16px", fontWeight: 400, ml: 1 }}
            >
              Robert@gmail.com
            </Box>
          </Box>
          <br />
          <Box sx={{ color: "#DB2777", fontSize: "16px", fontWeight: 700 }}>
            آدرس:{" "}
            <Box
              component="span"
              sx={{ color: "black", fontSize: "16px", fontWeight: 400, ml: 1 }}
            >
              تهران خ آزادی نبش کوچه قنبری پلاک ۱۹۲
            </Box>
          </Box>
          <br />
          <Box sx={{ color: "#DB2777", fontSize: "16px", fontWeight: 700 }}>
            روش پرداخت:{" "}
            <Box
              component="span"
              sx={{ color: "black", fontSize: "16px", fontWeight: 400, ml: 1 }}
            >
              درگاه پرداخت پاسارگاد
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            mt: 3,
            width: "100%",
            maxWidth: "550px",
            backgroundColor: "#E6E8EB",
            borderRadius: "4px",
            paddingY: "8px",
            paddingX: "12px",
            fontSize: "16px",
            fontWeight: 700,
            textAlign: "right",
            cursor: "pointer",
          }}
        >
          Status
        </Box>
        {/* Purchase Summary */}
        <Box
          sx={{
            mt: 4,
            width: "100%",
            maxWidth: "550px",
            fontSize: "16px",
          }}
        >
          <Box component="strong" sx={{ fontSize: "18px", fontWeight: 600 }}>
            خلاصه خرید
          </Box>
          <br />
          <br />

          {/* Each item in the summary */}
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
            <Box sx={{ fontWeight: 700, color: "#58616C" }}>قیمت محصولات:</Box>
            <Box sx={{ fontWeight: 400, color: "black" }}>۱۰۰,۰۰۰ تومان</Box>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
            <Box sx={{ fontWeight: 700, color: "#58616C" }}>هزینه ارسال:</Box>
            <Box sx={{ fontWeight: 400, color: "black" }}>۱۰,۰۰۰ تومان</Box>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
            <Box sx={{ fontWeight: 700, color: "#58616C" }}>مالیات:</Box>
            <Box sx={{ fontWeight: 400, color: "black" }}>۱۰,۰۰۰ تومان</Box>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
            <Box sx={{ fontWeight: 700, color: "#58616C" }}>مبلغ نهایی:</Box>
            <Box sx={{ fontWeight: 400, color: "black" }}>۱۲۰,۰۰۰ تومان</Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default OrderDetailsPage;
