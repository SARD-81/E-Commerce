import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import shoppingCard from "../assets/shop.svg";
import { Box, Button, Typography, IconButton } from "@mui/material";
import FavoriteItem from "../components/heartButton";
import type { ProductResponseType } from "../types/Product";
import { useCartStore } from "../state-management/stores/useCartStore";
import { toast } from 'react-toastify';


interface ProductCardProps {
  product: ProductResponseType;
  productId: string;
  title: string;
  price: number;
  description: string;
  imageSrc: string;
  onShowMore?: (productId: string) => void;
}

export default function ProductCard({
  product,
  productId,
  title,
  price,
  description,
  imageSrc,
  onShowMore,
}: ProductCardProps) {
  const addItem = useCartStore(state => state.addItem);

  const handleAddToCart = () => {
    addItem(product);
    toast.success('محصول به سبد خرید اضافه شد!', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      rtl: true,
    });
  };

  const handleToggleFavorite = (
    itemId: string,
    isFavorite: boolean
  ) => {
    console.log(itemId, isFavorite);
  };


  return (
    <Box sx={{ 
      width: "384px", 
      borderRadius: "6px",
      overflow: "hidden",
      boxShadow: 3,
      transition: "transform 0.3s",
      "&:hover": {
        transform: "translateY(-5px)"
      }
    }}>
      <Box
        sx={{
          backgroundColor: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "170px",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Box 
          component="img" 
          src={imageSrc} 
          alt="product-picture" 
          sx={{ 
            maxHeight: "100%",
            maxWidth: "100%",
            objectFit: "contain" 
          }} 
        />
        <FavoriteItem
          product={product}
          onToggleFavorite={handleToggleFavorite}
        />
      </Box>

      <Box
        sx={{
          backgroundColor: "#1F2937",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          padding: "16px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography component="p" variant="body1" sx={{ color: "#DB2777", fontWeight: 'bold' }}>
            {price.toLocaleString()} تومان
          </Typography>
          <Typography
            component="p"
            variant="body1"
            sx={{ 
              color: "#FFFFFF", 
              fontSize: "20px", 
              fontWeight: "bold",
              maxWidth: '200px',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}
          >
            {title}
          </Typography>
        </Box>
        
        <Typography 
          sx={{ 
            color: '#9CA3AF', 
            textAlign: 'right',
            height: '40px',
            overflow: 'hidden',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical'
          }}
        >
          {description}
        </Typography>
        
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton
            onClick={handleAddToCart}
            sx={{
              backgroundColor: "#4B5563",
              borderRadius: "12px",
              padding: "8px",
              "&:hover": {
                backgroundColor: "#6B7280"
              }
            }}
          >
            <Box
              component="img"
              src={shoppingCard}
              alt="add to cart"
              sx={{ width: "24px", height: "24px" }}
            />
          </IconButton>

          <Button
            variant="contained"
            sx={{
              color: "#FFFFFF",
              backgroundColor: "#DB2777",
              "&:hover": {
                backgroundColor: "#EC4899"
              }
            }}
            onClick={() => onShowMore?.(productId)}
            endIcon={<KeyboardBackspaceIcon sx={{ transform: 'rotate(180deg)' }} />}
          >
            مشاهده بیشتر
          </Button>
        </Box>
      </Box>
    </Box>
  );
}