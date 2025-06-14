import { Box } from "@mui/material";
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
        p: 3,
        minHeight: "100vh",
      }}
    >
      <Box sx={{ width: "50%" }}>
        <CheckoutOrderTable />
      </Box>
      <Box
        sx={{ display: "flex", flexDirection: "column", gap: 4, width: "50%" }}
      >
        <CheckoutAddressInfo />
        <CheckoutSummary />
      </Box>
    </Box>
  );
};

export default Checkout;
