import { Button } from "@mui/material";

const AddToCartButton = () => (
  <Button
    variant="contained"
    size="small"
    sx={{
      backgroundColor: "#DB2777",
      px: 2,
      borderRadius: "10px",
      py: 1,
      fontSize: "0.75rem",
      alignSelf: "flex-start",
    }}
  >
    افزودن به سبد خرید
  </Button>
);

export default AddToCartButton;
