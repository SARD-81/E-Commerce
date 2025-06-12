import React from "react";
import { Box } from "@mui/material";
import OrderProductsTable from "./DetailsComponent/DetailsTable";
import OrderCustomerInfo from "./DetailsComponent/DetailsCustomerInfo";
import OrderSummary from "./DetailsComponent/DetailsSummary";

interface OrderItem {
  image: string;
  name: string;
  quantity: number;
  price: number;
}

interface Props {
  orderItems: OrderItem[];
}

const DetailsPage: React.FC<Props> = ({ orderItems }) => {
  const handleStatusClick = () => {
    // Handle status button click
    console.log("Status button clicked");
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        gap: 4,
        mt: 4,
        mr: 12,
        px: 4,
        direction: "rtl",
      }}
    >
      {/* Products Table */}
      <OrderProductsTable orderItems={orderItems} />

      {/* Customer Info and Summary Section */}
      <Box>
        <OrderCustomerInfo
          orderNumber="۲۹۲۳۹۱۰"
          customerName="علی موسوی"
          email="Robert@gmail.com"
          address="تهران خ آزادی نبش کوچه قنبری پلاک ۱۹۲"
          paymentMethod="درگاه پرداخت پاسارگاد"
          statusText="Status"
          onStatusClick={handleStatusClick}
        />

        <OrderSummary
          productsPrice="۱۰۰,۰۰۰ تومان"
          shippingCost="۱۰,۰۰۰ تومان"
          tax="۱۰,۰۰۰ تومان"
          totalPrice="۱۲۰,۰۰۰ تومان"
        />
      </Box>
    </Box>
  );
};

export default DetailsPage;
