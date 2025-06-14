import { Box } from "@mui/material";

interface IProductPageImageProps {
  src: string;
  alt: string;
}

const ProductImage = ({ src, alt }: IProductPageImageProps) => {
  return (
    <Box>
      <img className="object-cover" src={src} alt={alt} />
    </Box>
  );
};

export default ProductImage;
