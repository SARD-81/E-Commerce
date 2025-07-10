import {
  Box,
  Typography,
  Button,
  IconButton,
  Paper,
  Divider,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useCartStore } from "../../state-management/stores/useCartStore";
import { useNavigate } from "react-router-dom";
import type { ProductResponseType } from "../../types/Product";
import { toast } from "react-toastify";

// Define CartItem type with category instead of brand
type CartItem = ProductResponseType & {
  quantity: number;
};

const Cart = () => {
  const { items, removeItem, updateQuantity, clearCart } = useCartStore();
  const navigate = useNavigate();

  const handleRemoveItem = (item: CartItem) => {
    removeItem(item._id);
    toast.info(`"${item.name}" از سبد خرید حذف شد`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      rtl: true,
    });
  };

  // Create a function for clearing cart
  const handleClearCart = () => {
    clearCart();
    toast.warning("سبد خرید پاک شد", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      rtl: true,
    });
  };

  // Create a function for updating quantity
  const handleUpdateQuantity = (item: CartItem, newQuantity: number) => {
    updateQuantity(item._id, newQuantity);
    if (newQuantity < item.quantity) {
      toast.info(`تعداد "${item.name}" کاهش یافت`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        rtl: true,
      });
    } else {
      toast.success(`تعداد "${item.name}" افزایش یافت`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        rtl: true,
      });
    }
  };

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 0;
  const total = subtotal + shipping;

  return (
    <Box
      sx={{ padding: "32px", backgroundColor: "#EEEFF1", minHeight: "100vh" }}
    >
      <Typography
        variant="h4"
        component="h1"
        sx={{ marginBottom: "32px", textAlign: "center" }}
      >
        سبد خرید
      </Typography>

      {items.length === 0 ? (
        <Box sx={{ textAlign: "center", py: 8 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            سبد خرید شما خالی است
          </Typography>
          <Button
            variant="contained"
            onClick={() => navigate("/shop")}
            sx={{ backgroundColor: "#DB2777", color: "white" }}
          >
            بازگشت به فروشگاه
          </Button>
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
          }}
        >
          {/* Cart Items */}
          <Box sx={{ flex: 2 }}>
            <Paper sx={{ padding: "16px", borderRadius: "8px" }}>
              {items.map((item: CartItem) => (
                <Box key={item._id} sx={{ mb: 3 }}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box
                      component="img"
                      src={item.image}
                      alt={item.name}
                      sx={{
                        width: "80px",
                        height: "80px",
                        objectFit: "cover",
                        borderRadius: "4px",
                      }}
                    />

                    <Box sx={{ flex: 1, marginRight: "16px" }}>
                      <Typography variant="h6">{item.name}</Typography>
                      <Typography variant="body1" color="textSecondary">
                        {item.category?.name || "دسته‌بندی نشده"}
                      </Typography>
                      <Typography variant="h6" color="primary" sx={{ mt: 1 }}>
                        {item.price.toLocaleString()} تومان
                      </Typography>
                    </Box>

                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <IconButton
                        onClick={() =>
                          handleUpdateQuantity(item, item.quantity - 1)
                        }
                        disabled={item.quantity <= 1}
                      >
                        <RemoveIcon />
                      </IconButton>

                      <Typography variant="body1" sx={{ mx: 1 }}>
                        {item.quantity}
                      </Typography>

                      <IconButton
                        onClick={() =>
                          handleUpdateQuantity(item, item.quantity + 1)
                        }
                      >
                        <AddIcon />
                      </IconButton>
                    </Box>

                    <IconButton
                      onClick={() => handleRemoveItem(item)}
                      color="error"
                      sx={{ ml: 2 }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                  <Divider sx={{ mt: 2 }} />
                </Box>
              ))}

              <Button
                variant="outlined"
                color="error"
                onClick={handleClearCart}
                sx={{ mt: 2 }}
              >
                پاک کردن سبد خرید
              </Button>
            </Paper>
          </Box>

          {/* Order Summary */}
          <Box sx={{ flex: 1 }}>
            <Paper sx={{ padding: "24px", borderRadius: "8px" }}>
              <Typography variant="h6" sx={{ mb: 3 }}>
                خلاصه سفارش
              </Typography>

              <Box
                sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}
              >
                <Typography variant="body1">جمع کل:</Typography>
                <Typography variant="body1">
                  {subtotal.toLocaleString()} تومان
                </Typography>
              </Box>

              <Box
                sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}
              >
                <Typography variant="body1">هزینه ارسال:</Typography>
                <Typography variant="body1">رایگان</Typography>
              </Box>

              <Divider sx={{ my: 2 }} />

              <Box
                sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}
              >
                <Typography variant="h6">مجموع:</Typography>
                <Typography variant="h6" color="primary">
                  {total.toLocaleString()} تومان
                </Typography>
              </Box>

              <Button
                variant="contained"
                fullWidth
                sx={{ backgroundColor: "#DB2777", color: "white", py: 1.5 }}
                onClick={() => navigate("/shipping")}
              >
                تکمیل خرید
              </Button>
            </Paper>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Cart;
