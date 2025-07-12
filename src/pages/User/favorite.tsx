import { Box } from "@mui/material"
import ProductCArd_Blank from "../../components/ProductCArd_Blank"

const favorite = () => {
  return (
    <Box sx={{display : "flex", gap : 2}}>
        <ProductCArd_Blank productId={1} title="Apple iPad Pro 12.9-inch" price={10000} size="large" imageSrc="" />
        <ProductCArd_Blank productId={1} title="Apple iPad Pro 12.9-inch" price={10000} size="large" imageSrc="" />
    </Box>
  )
}

export default favorite
