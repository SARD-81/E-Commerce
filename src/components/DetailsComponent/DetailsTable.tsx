import React from "react";
import {
  Avatar,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

interface OrderItem {
  image: string;
  name: string;
  quantity: number;
  price: number;
}

interface DetailsProductsTableProps {
  orderItems: OrderItem[];
}

const DetailsProductsTable: React.FC<DetailsProductsTableProps> = ({
  orderItems,
}) => {
  return (
    <Box
      sx={{
        flex: "0 1 900px",
        maxWidth: "800px",
        width: "100%",
      }}
    >
      <Table sx={{ border: "1px solid #ccc", borderRadius: 0 }}>
        <TableHead>
          <TableRow
            sx={{
              display: "flex",
              justifyContent: "space-between",
              borderBottom: "1px solid rgba(224, 224, 224, 1)",
            }}
          >
            {/* Right group (Image & Name) */}
            <Box sx={{ display: "flex", gap: 1, minWidth: "30%" }}>
              <TableCell
                sx={{
                  flex: "0 0 80px",
                  borderBottom: "none",
                  textAlign: "right",
                }}
              >
                عکس
              </TableCell>
              <TableCell
                sx={{
                  flex: "1 1 auto",
                  borderBottom: "none",
                  textAlign: "right",
                }}
              >
                نام محصول
              </TableCell>
            </Box>

            {/* Left group (Quantity, Price, Total Price) */}
            <Box
              sx={{
                display: "flex",
                gap: 3,
                minWidth: "40%",
                justifyContent: "flex-start",
              }}
            >
              <TableCell
                sx={{
                  flex: "1 1 0",
                  borderBottom: "none",
                  textAlign: "center",
                }}
              >
                تعداد
              </TableCell>
              <TableCell
                sx={{
                  flex: "1 1 0",
                  borderBottom: "none",
                  textAlign: "center",
                }}
              >
                قیمت
              </TableCell>
              <TableCell
                sx={{
                  flex: "1 1 0",
                  borderBottom: "none",
                  textAlign: "center",
                }}
              >
                قیمت نهایی
              </TableCell>
            </Box>
          </TableRow>
        </TableHead>

        <TableBody>
          {orderItems.map((item, index) => (
            <TableRow
              key={index}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                "& > *": { borderBottom: "none" },
              }}
            >
              <Box sx={{ display: "flex", gap: 1, minWidth: "30%" }}>
                <TableCell
                  sx={{
                    flex: "0 0 80px",
                    borderBottom: "none",
                    textAlign: "right",
                  }}
                >
                  <Avatar src={item.image} alt={item.name} variant="square" />
                </TableCell>
                <TableCell
                  sx={{
                    flex: "1 1 auto",
                    borderBottom: "none",
                    textAlign: "right",
                  }}
                >
                  {item.name}
                </TableCell>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  gap: 3,
                  minWidth: "40%",
                  justifyContent: "flex-start",
                }}
              >
                <TableCell
                  sx={{
                    flex: "1 1 0",
                    borderBottom: "none",
                    textAlign: "center",
                  }}
                >
                  {item.quantity}
                </TableCell>
                <TableCell
                  sx={{
                    flex: "1 1 0",
                    borderBottom: "none",
                    textAlign: "center",
                  }}
                >
                  {item.price.toLocaleString()}
                </TableCell>
                <TableCell
                  sx={{
                    flex: "1 1 0",
                    borderBottom: "none",
                    textAlign: "center",
                  }}
                >
                  {(item.price * item.quantity).toLocaleString()}
                </TableCell>
              </Box>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default DetailsProductsTable;
