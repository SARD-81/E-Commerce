import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Avatar,
} from "@mui/material";

const products = [
  {
    id: 1,
    name: "Apple iPhone 14 Pro",
    price: "$999.00",
    quantity: 1,
    total: "$999.00",
    image: "/images/iphone.png",
  },
  {
    id: 2,
    name: "Apple MacBook Air M2",
    price: "$999.00",
    quantity: 1,
    total: "$999.00",
    image: "/images/macbook.png",
  },
  {
    id: 3,
    name: "Apple iPad Pro 12.9-inch",
    price: "$999.00",
    quantity: 1,
    total: "$999.00",
    image: "/images/ipad.png",
  },
];

const CheckoutOrderTable = () => {
  const cellStyle = {
    lineHeight: "24px",
    fontSize: "16px",
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 910,
        height: "auto",
        border: "1px solid #CED2D7",
        borderRadius: 2,
        padding: 2,
        overflow: "auto",
      }}
    >
      {/* Products Table */}
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="right" sx={cellStyle}>
              عکس
            </TableCell>
            <TableCell align="right" sx={cellStyle}>
              نام محصول
            </TableCell>
            <TableCell align="right" sx={cellStyle}>
              تعداد
            </TableCell>
            <TableCell align="right" sx={cellStyle}>
              قیمت
            </TableCell>
            <TableCell align="right" sx={cellStyle}>
              قیمت نهایی
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow
              key={product.id}
              sx={{ "& td": { borderBottom: "none" } }}
            >
              <TableCell align="right">
                <Avatar
                  src={product.image}
                  alt={product.name}
                  variant="rounded"
                />
              </TableCell>
              <TableCell align="right">{product.name}</TableCell>
              <TableCell align="right">{product.quantity}</TableCell>
              <TableCell align="right">{product.price}</TableCell>
              <TableCell align="right">{product.total}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default CheckoutOrderTable;
