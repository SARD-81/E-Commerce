import React from "react";
import { Box } from "@mui/material";

interface DetailsSummaryProps {
  productsPrice: string;
  shippingCost: string;
  tax: string;
  totalPrice: string;
}

const DetailsSummary: React.FC<DetailsSummaryProps> = ({
  productsPrice,
  shippingCost,
  tax,
  totalPrice,
}) => {
  return (
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
        <Box sx={{ fontWeight: 400, color: "black" }}>{productsPrice}</Box>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
        <Box sx={{ fontWeight: 700, color: "#58616C" }}>هزینه ارسال:</Box>
        <Box sx={{ fontWeight: 400, color: "black" }}>{shippingCost}</Box>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
        <Box sx={{ fontWeight: 700, color: "#58616C" }}>مالیات:</Box>
        <Box sx={{ fontWeight: 400, color: "black" }}>{tax}</Box>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
        <Box sx={{ fontWeight: 700, color: "#58616C" }}>مبلغ نهایی:</Box>
        <Box sx={{ fontWeight: 400, color: "black" }}>{totalPrice}</Box>
      </Box>
    </Box>
  );
};

export default DetailsSummary;
