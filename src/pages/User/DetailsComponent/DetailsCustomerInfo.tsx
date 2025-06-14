import React from "react";
import { Box } from "@mui/material";

interface DetailsCustomerInfoProps {
  orderNumber: string;
  customerName: string;
  email: string;
  address: string;
  paymentMethod: string;
  statusText: string;
  onStatusClick?: () => void;
}

const DetailsCustomerInfo: React.FC<DetailsCustomerInfoProps> = ({
  orderNumber,
  customerName,
  email,
  address,
  paymentMethod,
  statusText,
  onStatusClick,
}) => {
  return (
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
            {orderNumber}
          </Box>
        </Box>
        <br />
        <Box sx={{ color: "#DB2777", fontSize: "16px", fontWeight: 700 }}>
          نام:{" "}
          <Box
            component="span"
            sx={{ color: "black", fontSize: "16px", fontWeight: 400, ml: 1 }}
          >
            {customerName}
          </Box>
        </Box>
        <br />
        <Box sx={{ color: "#DB2777", fontSize: "16px", fontWeight: 700 }}>
          ایمیل:{" "}
          <Box
            component="span"
            sx={{ color: "black", fontSize: "16px", fontWeight: 400, ml: 1 }}
          >
            {email}
          </Box>
        </Box>
        <br />
        <Box sx={{ color: "#DB2777", fontSize: "16px", fontWeight: 700 }}>
          آدرس:{" "}
          <Box
            component="span"
            sx={{ color: "black", fontSize: "16px", fontWeight: 400, ml: 1 }}
          >
            {address}
          </Box>
        </Box>
        <br />
        <Box sx={{ color: "#DB2777", fontSize: "16px", fontWeight: 700 }}>
          روش پرداخت:{" "}
          <Box
            component="span"
            sx={{ color: "black", fontSize: "16px", fontWeight: 400, ml: 1 }}
          >
            {paymentMethod}
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
        onClick={onStatusClick}
      >
        {statusText}
      </Box>
    </Box>
  );
};

export default DetailsCustomerInfo;
