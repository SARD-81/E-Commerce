import { Box, Button } from "@mui/material";
import CheckoutAddressInfo from "../../components/checkout/CheckoutAddressInfo";
import CheckoutSummary from "../../components/checkout/CheckoutSummary";
import CheckoutOrderTable from "../../components/checkout/CheckoutOrderTable";

const Checkout = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 7,
        px: 3,
      }}
    >
      <Box sx={{ width: "50%" }}>
        <CheckoutOrderTable />
      </Box>
      <Box
        sx={{ display: "flex", flexDirection: "column", gap: 4, width: "50%" }}
      >
        <CheckoutAddressInfo />
        <CheckoutSummary
          actionButton={
            <Button
              variant="contained"
              sx={{
                width: "100%",
                height: "48px",
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
          }
        />
      </Box>
    </Box>
  );
};

export default Checkout;
