import React from "react";
import {
  Box,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Button,
} from "@mui/material";
import { type IAddressData } from "./AddressForm";
import { useNavigate } from "react-router-dom";

export interface IProduct {
  name: string;
  image: string;
  price: number;
  quantity: number;
}

interface ISummaryProps {
  products: IProduct[];
  addressData: IAddressData;
  paymentMethod: string;
  onPlaceOrder: () => void;
}

const Summary: React.FC<ISummaryProps> = ({
  products,
  addressData,
  paymentMethod,
  onPlaceOrder,
}) => {
  const navigate = useNavigate();
  const subtotal = products.reduce((sum, p) => sum + p.price * p.quantity, 0);
  const shipping = 10000;
  const tax = 10000;
  const total = subtotal + shipping + tax;

  return (
    <Box sx={{ maxWidth: 1000, mx: "auto", mt: 4 }}>
      {/* product table */}
      <Table component={Paper}>
        <TableHead>
          <TableRow>
            <TableCell align="right">عکس</TableCell>
            <TableCell align="right">نام محصول</TableCell>
            <TableCell align="center">تعداد</TableCell>
            <TableCell align="center">قیمت</TableCell>
            <TableCell align="center">قیمت نهایی</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((p, i) => (
            <TableRow key={i}>
              <TableCell>
                <img src={p.image} alt={p.name} width={35} />
              </TableCell>
              <TableCell align="right">{p.name}</TableCell>
              <TableCell align="center">{p.quantity}</TableCell>
              <TableCell align="center">
                {p.price.toLocaleString()} تومان
              </TableCell>
              <TableCell align="center">
                {(p.price * p.quantity).toLocaleString()} تومان
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* summary of order */}
      <Box
        component={Paper}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          p: 2,
          mt: 2,
          bgcolor: "#F2F2F2",
        }}
      >
        <Box>
          <Typography variant="subtitle1">روش پرداخت</Typography>
          <Typography>
            {paymentMethod === "pasargad"
              ? "روش : درگاه پرداخت پاسارگاد"
              : paymentMethod}
          </Typography>
        </Box>

        <Box>
          <Typography variant="subtitle1">آدرس دریافت</Typography>
          <Typography>
            آدرس : {addressData.country} ، {addressData.city} ،{" "}
            {addressData.address} ، {addressData.postal}
          </Typography>
        </Box>

        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: "4rem",
            }}
          >
            <Typography>قیمت محصولات:</Typography>
            <Typography align="right">
              {subtotal.toLocaleString()} تومان
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: "4rem",
            }}
          >
            <Typography>هزینه ارسال:</Typography>
            <Typography align="right">
              {shipping.toLocaleString()} تومان
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: "4rem",
            }}
          >
            <Typography>مالیات:</Typography>
            <Typography align="right">{tax.toLocaleString()} تومان</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: "4rem",
            }}
          >
            <Typography>مبلغ نهایی: </Typography>
            <Typography align="right">
              {total.toLocaleString()} تومان
            </Typography>
          </Box>
        </Box>
      </Box>

      <Button
        variant="contained"
        fullWidth
        sx={{ height: 48, mt: 3, borderRadius: "100px" }}
        onClick={() => {
          onPlaceOrder();
          navigate("/checkout");
        }}
      >
        ثبت سفارش
      </Button>
    </Box>
  );
};

export default Summary;
