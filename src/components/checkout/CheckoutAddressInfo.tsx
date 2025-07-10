import { Box, Typography } from "@mui/material";
import useCheckoutStore from "../../state-management/stores/useCheckoutStore";

const CheckoutAddressInfo = () => {
  const checkoutStore = useCheckoutStore();

  const makeAddress = () => {
    const address = checkoutStore.returnAddress();
    return `${address.country}، ${address.city}، ${address.address}، ${address.postal}`;
  };
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
        variant="h6"
        sx={{ fontSize: "20px", fontWeight: 500, mb: "24px" }}
      >
        آدرس دریافت
      </Typography>

      {/* User Information */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          mb: "24px",
        }}
      >
        {[
          ["شماره سفارش:", checkoutStore.orderId],
          // ["نام:", addressInfo.name],
          // ["ایمیل:", addressInfo.email],
          ["آدرس:", makeAddress()],
          ["روش پرداخت:", checkoutStore.paymentMethod],
        ].map(([label, value], index) => (
          <Box key={index} sx={{ display: "flex", gap: "10px" }}>
            <Typography
              component="span"
              sx={{
                fontSize: "16px",
                fontWeight: 700,
                color: "#DB2777",
              }}
            >
              {label}
            </Typography>
            <Typography
              component="span"
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

      {/* Status */}
      <Box
        sx={{
          width: "100%",
          border: "1px solid #CED2D7",
          backgroundColor: "#E6E8EB",
          borderRadius: "4px",
          px: "10px",
          py: "8px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography sx={{ fontSize: "16px", fontWeight: 700 }}>
          Status
        </Typography>
      </Box>
    </Box>
  );
};

export default CheckoutAddressInfo;
