import { Box, Typography } from "@mui/material";
import type { ReactNode } from "react";

const summary = {
  total: "۱۰۰,۰۰۰ تومان",
  shipping: "۱۰,۰۰۰ تومان",
  tax: "۱۰,۰۰۰ تومان",
  final: "۱۲۰,۰۰۰ تومان",
};

const CheckoutSummary = ({ actionButton }: { actionButton?: ReactNode }) => {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 549,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Title */}
      <Typography
        sx={{
          fontSize: "20px",
          fontWeight: 500,
          mb: "24px",
        }}
      >
        خلاصه خرید
      </Typography>

      {/* Payment Information */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        {[
          ["قیمت محصولات:", summary.total],
          ["هزینه ارسال:", summary.shipping],
          ["مالیات :", summary.tax],
          ["مبلغ نهایی :", summary.final],
        ].map(([label, value], index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 700,
                color: "#58616C",
              }}
            >
              {label}
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 400,
              }}
            >
              {value}
            </Typography>
          </Box>
        ))}
      </Box>
<<<<<<< Updated upstream
      {/* Button */}
      {actionButton && <Box sx={{ mt: "32px" }}>{actionButton}</Box>}
=======

      {/* Payment Button */}
      <Button
        variant="contained"
        sx={{
          mt: "32px",
          width: "100%",
          // height: "48px",
          borderRadius: "9999px",
          backgroundColor: "#DB2777",
          fontSize: "20px",
          fontWeight: 700,
          py: "8px",
          px: "32px",
          ":hover": {
            backgroundColor: "#c41f6d",
          },
        }}
      >
        پرداخت
      </Button>
>>>>>>> Stashed changes
    </Box>
  );
};

export default CheckoutSummary;
