import { Typography } from "@mui/material";

interface ProductInfoProbs {
  name?: string;
  description?: string;
  price?: number;
}

const ProductInfo = ({ name, description, price }: ProductInfoProbs) => (
  <>
    <Typography variant="h5" gutterBottom>
      {name}
    </Typography>
    <Typography variant="body2" gutterBottom>
      {description}
    </Typography>
    <Typography variant="h4" color="text.primary" sx={{ my: 2 }}>
      {price} تومان
    </Typography>
  </>
);

export default ProductInfo;
