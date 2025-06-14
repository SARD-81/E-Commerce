import React from "react";
import { TableRow, TableCell, Button, Typography } from "@mui/material";
import OrderStatusBadge from "./OrderStatusBadge";

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

type OrderRowProps = {
  order: Order;
};

const OrderRow: React.FC<OrderRowProps> = ({ order }) => {
  return (
    <TableRow
      sx={{
        width: "100%",
        backgroundColor: "transparent",
        "& .MuiTableCell-root": {
          border: "none",
        },
      }}
    >
      {/* Product Image */}
      <TableCell
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <img
          src={order.productImage}
          alt={order.product}
          style={{
            width: 64,
            height: 64,
            borderRadius: "4px",
            objectFit: "cover",
          }}
        />
      </TableCell>

      {/* Product Name */}
      <TableCell sx={{ textAlign: "center" }}>
        <Typography fontSize={16} fontWeight={400}>
          {order.product}
        </Typography>
      </TableCell>

      {/* Date */}
      <TableCell sx={{ textAlign: "center" }}>
        <Typography fontSize={16} fontWeight={400}>
          {order.date}
        </Typography>
      </TableCell>

      {/* User */}
      <TableCell sx={{ textAlign: "center" }}>
        <Typography fontSize={16} fontWeight={400}>
          {order.user}
        </Typography>
      </TableCell>

      {/* Price */}
      <TableCell sx={{ textAlign: "center" }}>
        <Typography fontSize={16} fontWeight={400}>
          {order.price}
        </Typography>
      </TableCell>

      {/* Payment Status */}
      <TableCell sx={{ textAlign: "center" }}>
        <OrderStatusBadge type="payment" status={order.paymentStatus} />
      </TableCell>

      {/* Shipping Status */}
      <TableCell sx={{ textAlign: "center" }}>
        <OrderStatusBadge type="shipping" status={order.shippingStatus} />
      </TableCell>

      {/* Action */}
      <TableCell sx={{ textAlign: "center" }}>
        <Button
          variant="contained"
          onClick={() => {}}
          sx={{
            fontSize: 14,
            fontWeight: 400,
            backgroundColor: "#DB2777",
            borderRadius: "8px",
            px: "8px",
            py: "4px",
            "&:hover": { backgroundColor: "#BE185D" },
          }}
        >
          جزئیات
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default OrderRow;
